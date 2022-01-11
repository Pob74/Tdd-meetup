import { useState } from "react"
import { Meetups } from "../../models/meetups"

interface Props {
  addMeetup: (meetups: Meetups) => void
}

const Form = ({ addMeetup }: Props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")

  function handleAddClick() {
    const m: Meetups = {
      id: 20,
      title: title,
      description: description,
      date: date,
      time: time,
      location: location
    }
    addMeetup(m)
    // console.log(m)
  }

  return (
    <>
      <div className="new-meetup-form">
        <label test-data="title">
          Title{" "}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label test-data="description">
          Description{" "}
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label test-data="date">
          Date{" "}
          <input
            type="text"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label test-data="time">
          Time{" "}
          <input
            type="text"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
        <label test-data="location">
          Location{" "}
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button onClick={handleAddClick}>Add new meetup</button>
      </div>
    </>
  )
}

export default Form
