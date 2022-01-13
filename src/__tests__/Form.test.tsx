import Form from "../components/NewMeetup/Form"
import { render } from "@testing-library/react"
import { shallow } from "enzyme"
import { Meetups } from "../models/meetups"

describe("Form component", () => {
  it("renders without errors", () => {
    render(
      <Form
        onClick={() => {}}
        title=""
        setTitle={() => {}}
        description=""
        setDescription={() => {}}
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        location=""
        setLocation={() => {}}
      />
    )
  })
  it("adds a new meetup", () => {
    let addMock = jest.fn()

    const wrapper = shallow(
      <Form
        onClick={addMock}
        title=""
        setTitle={() => {}}
        description=""
        setDescription={() => {}}
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        location=""
        setLocation={() => {}}
      />
    )
    const testMeetup: Meetups = {
      id: "",
      title: "Something",
      description: "something else",
      date: "2021-02-02",
      time: "13:00",
      location: "somewhere"
    }
    const titleElement = wrapper.find('[test-data="title"] input')
    titleElement.simulate("change", { target: { value: testMeetup.title } })

    const descriptionElement = wrapper.find('[test-data="description"] input')
    descriptionElement.simulate("change", {
      target: { value: testMeetup.description }
    })

    const dateElement = wrapper.find('[test-data="date"] input')
    dateElement.simulate("change", { target: { value: testMeetup.date } })

    const timeElement = wrapper.find('[test-data="time"] input')
    timeElement.simulate("change", { target: { value: testMeetup.time } })

    const locationElement = wrapper.find('[test-data="location"] input')
    locationElement.simulate("change", {
      target: { value: testMeetup.location }
    })

    wrapper.find("button").simulate("click")

    setTimeout(() => {
      expect(addMock.mock.calls.length).toBe(1)
      const values = addMock.mock.calls[0][0]

      expect(isMeetup(values)).toBe(true)

      expect(values.title).toBe(testMeetup.title)
      expect(values.description).toBe(testMeetup.description)
      expect(values.date).toBe(testMeetup.date)
      expect(values.time).toBe(testMeetup.time)
      expect(values.location).toBe(testMeetup.location)
    }, 1000)
  })
})

function isMeetup(maybe: any): boolean {
  if (typeof maybe !== "object") {
    return false
  } else if (
    !maybe.title ||
    !maybe.description ||
    !maybe.date ||
    !maybe.time ||
    !maybe.location
  ) {
    return false
  }
  return true
}
