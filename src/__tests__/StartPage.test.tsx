import StartPage from "../components/StartPage"
import { render, screen } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"

const meetupData = [
  {
    id: "",
    title: "Rolex talks",
    description: "lets talk about Rolex",
    date: "2022-01-22",
    time: "19:00",
    location: "Rolex forum",
    comments: [],
    attending: 0
  }
]

describe("Meetup tests", () => {
  test("Renders meetups component", () => {
    render(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )
  })
  it("shows correct meetup when typing in search field", () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )

    const searchString = "Rolex"
    const input = wrapper.find(".search-input")
    input.simulate("change", { target: { value: searchString } })

    const cards = wrapper.find('div[test-data="result-meetup"]')
    const titles = cards.find("h3")
    expect(titles.length).toBe(1)
    titles.forEach((title) => {
      const actualTitle = title.text()
      expect(actualTitle.toLowerCase()).toMatch(searchString.toLowerCase())
    })
  })

  test("Renders a h3 element for meetup title", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(
      wrapper.find('h3[test-data="meetup-title"]').length
    ).not.toBeLessThan(1)
  })
  test("Renders a p element for meetup description", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(
      wrapper.find('p[test-data="meetup-description"]').length
    ).not.toBeLessThan(1)
  })
  test("Renders a p element for meetup location", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(
      wrapper.find('p[test-data="meetup-location"]').length
    ).not.toBeLessThan(1)
  })
  test("Renders a p element for meetup time and date", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(
      wrapper.find('p[test-data="meetup-time-date"]').length
    ).not.toBeLessThan(1)
  })
  test('Check if link "Show more" exists', () => {
    render(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )

    setTimeout(() => {
      const stringValue = screen.getByText(/Show more/i)
      expect(stringValue).toBeInTheDocument()
    }, 1000)
  })

  test('Check if link "Show more" is a <Link> element', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )
    setTimeout(() => {
      expect(wrapper.find('Link[test-data="Show-MeetupDetails"]').length).toBe(
        1
      )
    }, 1000)
  })

  test('Should render the meetup title "Rolex talks"', () => {
    render(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )
    expect(
      screen.getByText(meetupData[0].title, { exact: false })
    ).toBeInTheDocument()
  })
})
