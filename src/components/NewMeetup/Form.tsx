// import { useState } from "react"
// import { Meetups } from "../../models/meetups"

interface Props {
  // addMeetup: (meetups: Meetups) => void
  onClick: () => void
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
  date: string
  setDate: (date: string) => void
  time: string
  setTime: (time: string) => void
  location: string
  setLocation: (location: string) => void
}

const Form = ({
  // addMeetup,
  onClick,
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation
}: Props) => {
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
        <button onClick={onClick}>Add new meetup</button>
      </div>
    </>
  )
}

export default Form
