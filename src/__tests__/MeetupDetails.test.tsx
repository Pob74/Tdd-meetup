import { render } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import MeetupDetails from "../components/MeetupDetails"
//import { watchData } from "../data/watchData"
import { BrowserRouter } from "react-router-dom"

const meetupData = [
  {
    id: "1",
    title: "Rolex talks",
    description: " lets talk about Rolex",
    date: "2021-01-22",
    time: "19:00",
    location: "Rolex forum",
    comments: [],
    attending: 0
  }
]

const comment = "Hello, here comes a test comment"
const rating = 5
const mockAddComment = jest.fn()

describe("Tests for MeetupDetails", () => {
  test("Renders meetups component", () => {
    render(
      <BrowserRouter>
        <MeetupDetails meetups={meetupData} myName="" myEmail="" />
      </BrowserRouter>
    )
  })
  test("Renders sign up button", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('button[test-data="sign-up-btn"]').length).toBe(1)
  })
  test("Meetupcard renders a textarea", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('[test-data="textfield"]').length).toBe(1)
  })
  test("Renders a button to add a comment", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('button[test-data="addCommentBtn"]').length).toBe(1)
  })
  test("Renders a rating element for rating", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('[test-data="rating"]').length).toBe(1)
  })

  test("Should add rating star even when comment is empty", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MeetupDetails meetups={meetupData} myName="" myEmail="" />
      </BrowserRouter>
    )
    const btn = wrapper.find('button[test-data="addCommentBtn"]')

    btn.simulate("click")
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(1)
      expect(mockAddComment.mock.calls[0][0]).toEqual(rating)
    }, 1000)
  })

  test("Should add 1 comment when Click on add button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MeetupDetails meetups={meetupData} myName="" myEmail="" />
      </BrowserRouter>
    )
    const btn = wrapper.find('button[test-data="addCommentBtn"]')

    btn.simulate("click")
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(1)
      expect(mockAddComment.mock.calls[0][0]).toEqual(comment)
    }, 1000)
  })
})
