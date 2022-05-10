import { Meetups } from "../models/meetups"
import { useState, useEffect } from "react"
import Search from "./Search"
import { Link } from "react-router-dom"
import Form from "./NewMeetup/Form"
import nextId from "react-id-generator"
import { IComment } from "../models/comments"
import React from "react"

interface Props {
  meetups: Meetups[]
}

function StartPage(props: Props) {
  const myid = nextId()
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")
  const [comment, setComment] = useState<IComment[]>([])
  const [attend, setAttend] = useState<string[]>([])

  const [searchText, setSearchText] = useState("")
  const [meetup, setMeetup] = useState(props.meetups)

  useEffect(() => {
    let meetups = props.meetups.filter((item: any) =>
      item.title.match(new RegExp(searchText, "i"))
    )

    const sortedMeetups = meetups.sort((a, b) => a.date.localeCompare(b.date))
    setMeetup(sortedMeetups)
  }, [searchText, props.meetups])

  const addMeetup = (): void => {
    let m = {
      id: myid,
      title: title,
      description: description,
      date: date,
      time: time,
      location: location,
      comments: comment,
      attending: attend,
    }
    if (
      title !== "" &&
      description !== "" &&
      date !== "" &&
      time !== "" &&
      location !== ""
    ) {
      props.meetups.push(m)
      setMeetup([...meetup, m])
      setComment(comment)
      setAttend(attend)
      localStorage.setItem("meetups", JSON.stringify(props.meetups))
    }

    window.location.reload()
  }

  const filteredMeetups = meetup.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )

  const sortedMeetups = filteredMeetups.sort((a, b) =>
    a.date.localeCompare(b.date)
  )

  return (
    <>
      <Search searchValue={searchText} setSearchValue={setSearchText} />

      <Form
        onClick={addMeetup}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        location={location}
        setLocation={setLocation}
        comment={comment}
        setComment={setComment}
        attend={attend}
        setAttend={setAttend}
      />
      {sortedMeetups.map((meetups) => (
        <div key={meetups.id} test-data="result-meetup">
          <section>
            <h3 test-data="meetup-title">Title: {meetups.title}</h3>
            <p test-data="meetup-description">
              <span>Description:</span> {meetups.description}
            </p>
            <p test-data="meetup-location">
              <span>Location:</span> {meetups.location}
            </p>
            <p test-data="meetup-time-date">
              <span> Time:</span>
              {meetups.time} Date: {meetups.date}
            </p>
            {/* <p>Attending this event: {meetups.attending}</p> */}

            <Link test-data="Show-MeetupDetails" to={`/meetup/${meetups.id}`}>
              Show more
            </Link>
          </section>
        </div>
      ))}
    </>
  )
}

export default StartPage
