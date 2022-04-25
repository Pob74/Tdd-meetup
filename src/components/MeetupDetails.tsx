import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Meetups } from "../models/meetups"
import MeetupComments from "../components/MeetupComments"
import SignUpMeetup from "../components/SignUpMeetup"
import { Rating } from "react-simple-star-rating"

interface Props {
  meetups: Meetups[]
  myName: string
  myEmail: string
}

function MeetupDetails(props: Props) {
  const { id } = useParams()

  const [meetup, setMeetup] = useState({
    id: "",
    title: "",
    description: "",
    location: "",
    time: "",
    date: "",
    comments: [
      {
        message: "",
        timeAndDate: "",
        newRating: 0
      }
    ],
    attending: 0
  })

  useEffect(() => {
    props.meetups.map((meetup) => {
      if (meetup.id.toString() === id) {
        const meeting = {
          id: meetup.id,
          title: meetup.title,
          description: meetup.description,
          location: meetup.location,
          time: meetup.time,
          date: meetup.date,
          comments: meetup.comments,
          attending: meetup.attending
        }
        return setMeetup(meeting)
      }
      return "No Meetups found"
    })
  }, [id, props.meetups])

  const [today, setToday] = useState(new Date())
  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000)
  }, [])

  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const timeAndDate = date + ", " + time

  const [comment, setComment] = useState<string>("")
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  const addComment = (): void => {
    if (comment !== "" || rating !== 0) {
      console.log(timeAndDate)
      console.log("add comment clicked")
      const myComment = { message: comment, newRating: rating, timeAndDate }
      const id = meetup.id
      const index = props.meetups.findIndex((item) => item.id === id)
      props.meetups[index].comments.push(myComment)
      localStorage.setItem("meetups", JSON.stringify(props.meetups))

      setComment("")
      setRating(0)
    }
  }

  const [attending, setAttending] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")

  const signUp = (): void => {
    setShowSignup(true)
  }
  const hideSignUp = (): void => {
    if (signupName.match(/[a-z0-9]/) && signupEmail.match(/[@]/)) {
      const id = meetup.id
      const index = props.meetups.findIndex((item) => item.id === id)
      let attend = props.meetups[index].attending
      attend++
      props.meetups[index].attending = attend
      localStorage.setItem("meetups", JSON.stringify(props.meetups))

      setShowSignup(false)
      // alert("You are attending the event")
      setAttending(true)
      setSignupName("")
      setSignupEmail("")

      return
    }
  }

  return (
    <>
      <section>
        <Link test-data="BackLink" to={"/"}>
          Back
        </Link>
        <h3 test-data="meetup-title" className="meetup-data">
          <span> Title:</span>
          {meetup.title}
        </h3>
        <p>
          <span>Description:</span> {meetup.description}
        </p>
        <p>
          <span>Location:</span> {meetup.location}
        </p>
        <p>
          <span> Time:</span>
          {meetup.time} Date: {meetup.date}
        </p>
        {showSignup ? (
          <SignUpMeetup
            onClick={hideSignUp}
            myName={signupName}
            setMyName={setSignupName}
            myEmail={signupEmail}
            setMyEmail={setSignupEmail}
          />
        ) : null}
        {attending === true ? (
          <p className="attending">You are attending this meetup &#9989;</p>
        ) : null}
        {!showSignup && !attending === true ? (
          <>
            <button test-data="sign-up-btn" onClick={signUp}>
              Sign up for event
            </button>
            <p>
              <span>Attending this event:</span> {meetup.attending}
            </p>
          </>
        ) : null}
      </section>
      <section>
        <div className="add-comment-input">
          {/* Add comment or question: */}
          <textarea
            className="comment-input"
            test-data="textfield"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
          <p>
            <Rating
              test-data="rating"
              onClick={handleRating}
              ratingValue={rating}
              size={25}
              showTooltip
            />
          </p>
        </div>
        <div className="add-comment-btn">
          <button
            className="add-comment-btn"
            test-data="addCommentBtn"
            onClick={addComment}
          >
            Add comment
          </button>
        </div>
      </section>
      <div className="commentsArea">
        {meetup.comments.map((comment) => {
          return <MeetupComments key={comment.timeAndDate} comment={comment} />
        })}
      </div>
    </>
  )
}

export default MeetupDetails
