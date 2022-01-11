import { Meetups } from "../models/meetups"
import { useState } from "react"
import Search from "./Search"
import { Link } from "react-router-dom"
import Form from "./NewMeetup/Form"
import { watchData } from "../data/watchData"

interface Props {
  meetups: Meetups[]
}

function StartPage({ meetups }: Props) {
  const [searchText, setSearchText] = useState("")
  const [meetup, setMeetup] = useState<Meetups[]>(watchData)

  function addMeetup(meetups: Meetups): void {
    setMeetup([...meetup, meetups])
    console.log("addMeetup function why it doesn't work")
  }

  const filteredMeetups = meetups.filter((meetup) =>
    meetup.title.match(new RegExp(searchText, "i"))
  )

  const sortedMeetups = filteredMeetups.sort((a, b) =>
    a.date.localeCompare(b.date)
  )

  // console.log("sorterat: ", sortedMeetups)

  return (
    <>
      <Search searchValue={searchText} setSearchValue={setSearchText} />
      <Form addMeetup={addMeetup} />
      {sortedMeetups.map((meetups) => (
        <div key={meetups.id} data-test="result-meetup">
          <section>
            <h3 data-test="meetup-title">Title: {meetups.title}</h3>
            <p data-test="meetup-description">
              Description: {meetups.description}
            </p>
            <p data-test="meetup-location">Location: {meetups.location}</p>
            <p data-test="meetup-time-date">
              Time:{meetups.time} Date: {meetups.date}
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
