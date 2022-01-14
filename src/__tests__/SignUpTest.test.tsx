import { mount } from "enzyme"
import MeetupDetails from "../components/MeetupDetails"

const meetupsData = [
  {
    id: "1",
    title: "Rolex talks",
    description: "lets talk about rolex",
    date: "2022-01-22",
    time: "19:00",
    location: "Rolex forum"
  }
]

describe("Tests for signing up on meetups", () => {
  test("Should contain a form element", () => {
    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    setTimeout(() => {
      expect(wrapper.find('[test-data="attendMeetupForm"]').length).toBe(1)
    }, 1000)
  })
  test("should render a input field for type in your name", () => {
    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    setTimeout(() => {
      expect(wrapper.find('input[test-data="inputName"]').length).toBe(1)
    }, 1000)
  })
  test("should render a input field for type in your email", () => {
    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    setTimeout(() => {
      expect(wrapper.find('input[test-data="inputEmail"]').length).toBe(1)
    }, 1000)
  })
  test("Should render commit button", () => {
    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    setTimeout(() => {
      expect(wrapper.find('button[test-data="commitBtn"]').length).toBe(1)
    }, 1000)
  })

  test("Submit email signup for meetup without @, should create/display error string", () => {
    const expectedText = "Enter a valid e-mail address"
    const wrongEmail = "test.com"

    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    const inputEmail = wrapper.find('[test-data="inputEmail"]')
    setTimeout(() => {
      expect(inputEmail.length).toBe(1)

      inputEmail.simulate("change", { target: { value: wrongEmail } })

      wrapper.find('[test-data="commitBtn"]').simulate("click")

      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })

  test("Submit name signup for meetup with only one letter,should create/display error string", () => {
    const expectedText = "Enter your name"

    const wrongName = "u"
    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")
    const inputName = wrapper.find('[test-data="inputName"]')
    setTimeout(() => {
      expect(inputName.length).toBe(1)

      inputName.simulate("change", { target: { value: wrongName } })

      wrapper.find('[test-data="commitBtn"]').simulate("click")

      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })

  test("Submit signup for meetup with correct value in inuptfields, name and email.", () => {
    const expectedText = "You are signed up for meetup"
    const correctName = "Testnamn"
    const correctEmail = "test@test.com"

    const wrapper = mount(
      <MeetupDetails meetups={meetupsData} myName="" myEmail="" />
    )

    const btn = wrapper.find('button[test-data="sign-up-btn"]')

    btn.simulate("click")

    const inputEmail = wrapper.find('[test-data="inputEmail"]')
    const inputName = wrapper.find('[test-data="inputName"]')
    setTimeout(() => {
      expect(inputEmail.length).toBe(1)
      expect(inputName.length).toBe(1)

      inputEmail.simulate("change", { target: { value: correctEmail } })
      inputName.simulate("change", { target: { value: correctName } })

      wrapper.find('[test-data="commitBtn"]').simulate("click")

      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })
})
