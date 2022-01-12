import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Meetups } from "../models/meetups"
import { IComment } from "../models/comments"
import MeetupComments from "../components/MeetupComments"
import SignUpMeetup from "../components/SignUpMeetup"

interface Props {
  meetups: Meetups[]
  myName: string
  myEmail: string
}

function MeetupDetails({ meetups }: Props) {
  const { id } = useParams()

  const [meetup, setMeetup] = useState({
    id: "",
    title: "",
    description: "",
    location: "",
    time: "",
    date: ""
  })

  useEffect(() => {
    meetups.map((meetup) => {
      if (meetup.id.toString() === id) {
        const meeting = {
          id: meetup.id,
          title: meetup.title,
          description: meetup.description,
          location: meetup.location,
          time: meetup.time,
          date: meetup.date
        }
        return setMeetup(meeting)
      }
      return "No Meetups found"
    })
  }, [id, meetups])

  const [comment, setComment] = useState<string>("")

  const [newComment, setNewComment] = useState<IComment[]>([])

  const addComment = (): void => {
    console.log("add comment clicked")
    const myComment = { message: comment }
    setNewComment([...newComment, myComment])
    setComment("")
  }

  const [showSignup, setShowSignup] = useState(false)

  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")

  const signUp = (): void => {
    setShowSignup(true)
  }
  const hideSignUp = (): void => {
    if (signupName.match(/[a-z0-9]/) && signupEmail.match(/[@]/)) {
      setShowSignup(false)
      alert("You are attending the event")
      setSignupName("")
      setSignupEmail("")
      return
    }
  }

  return (
    <>
      <section>
        <h3 data-test="meetup-title" className="meetup-data">
          Title: {meetup.title}
        </h3>
        <p>Description: {meetup.description}</p>
        <p>Location: {meetup.location}</p>
        <p>
          Time:{meetup.time} Date: {meetup.date}
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
        {!showSignup ? (
          <button data-test="sign-up-btn" onClick={signUp}>
            Sign up for event
          </button>
        ) : null}
      </section>
      <section>
        Add comment or question:
        <textarea
          data-test="textfield"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button data-test="addCommentBtn" onClick={addComment}>
          Add comment
        </button>
      </section>
      <div className="commentsArea">
        {newComment.map((comment: IComment, key: number) => {
          return <MeetupComments key={key} comment={comment} />
        })}
      </div>
    </>
  )
}

export default MeetupDetails
