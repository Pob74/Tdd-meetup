import { Meetups } from "../models/meetups"
import { useState } from "react"
import Search from "./Search"
import { Link } from "react-router-dom"
import Form from "./NewMeetup/Form"
import { watchData } from "../data/watchData"
import nextId from "react-id-generator"

interface Props {
  meetups: Meetups[]
  title: string
  description: string
  date: string
  time: string
  location: string
}

function StartPage({ meetups }: Props) {
  const myid = nextId()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")

  const [searchText, setSearchText] = useState("")
  const [meetup, setMeetup] = useState<Meetups[]>(watchData)

  const addMeetup = (): void => {
    const m = {
      id: myid,
      title: title,
      description: description,
      date: date,
      time: time,
      location: location
    }
    if (
      title !== "" &&
      description !== "" &&
      date !== "" &&
      time !== "" &&
      location !== ""
    ) {
      setMeetup([...meetup, m])
    }
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
      />
      {sortedMeetups.map((meetups) => (
        <div key={meetups.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title">Title: {meetups.title}</h3>
            <p data-test="meetup-description">
              <span>Description:</span> {meetups.description}
            </p>
            <p data-test="meetup-location">
              <span>Location:</span> {meetups.location}
            </p>
            <p data-test="meetup-time-date">
              <span> Time:</span>
              {meetups.time} Date: {meetups.date}
            </p>
            <Link data-test="Show-MeetupDetails" to={`/meetup/${meetups.id}`}>
              Show more
            </Link>
          </section>
        </div>
      ))}
    </>
  )
}

export default StartPage
