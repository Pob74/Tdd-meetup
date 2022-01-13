import { render } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import MeetupDetails from "../components/MeetupDetails"

const meetupData = [
  {
    id: "1",
    title: "Rolex talks",
    description: " lets talk about Rolex",
    date: "2021-01-22",
    time: "19:00",
    location: "Rolex forum"
  }
]

const comment = "Hello, here comes a test comment"

const mockAddComment = jest.fn()

describe("Tests for MeetupDetails", () => {
  test("Renders meetups component", () => {
    render(<MeetupDetails meetups={meetupData} myName="" myEmail="" />)
  })
  test("Renders sign up button", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
  test("Meetupcard renders a textarea", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('[data-test="textfield"]').length).toBe(1)
  })
  test("Renders a button to add a comment", () => {
    const wrapper = shallow(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    expect(wrapper.find('button[data-test="addCommentBtn"]').length).toBe(1)
  })

  test("Should add 1 comment when Click on add button", () => {
    const wrapper = mount(
      <MeetupDetails meetups={meetupData} myName="" myEmail="" />
    )
    const btn = wrapper.find('button[data-test="addCommentBtn"]')

    btn.simulate("click")
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(1)
      expect(mockAddComment.mock.calls[0][0]).toEqual(comment)
    }, 1000)
  })
})
