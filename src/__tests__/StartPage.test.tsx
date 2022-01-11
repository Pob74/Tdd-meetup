import StartPage from "../components/StartPage"
import { render, screen } from "@testing-library/react"
import { shallow } from "enzyme"
import { BrowserRouter } from "react-router-dom"

const meetupData = [
  {
    id: 1,
    title: "Premier league",
    description: "lets talk about football",
    date: "2022-01-22",
    time: "19:00",
    location: "Nya lundenskolans aula"
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

  test("Renders a h3 element for meetup title", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(wrapper.find('h3[data-test="meetup-title"]').length).toBe(1)
  })
  test("Renders a p element for meetup description", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(wrapper.find('p[data-test="meetup-description"]').length).toBe(1)
  })
  test("Renders a p element for meetup location", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(wrapper.find('p[data-test="meetup-location"]').length).toBe(1)
  })
  test("Renders a p element for meetup time and date", () => {
    const wrapper = shallow(<StartPage meetups={meetupData} />)

    expect(wrapper.find('p[data-test="meetup-time-date"]').length).toBe(1)
  })
  test('Check if link "Show more" exists', () => {
    render(
      <BrowserRouter>
        <StartPage meetups={meetupData} />
      </BrowserRouter>
    )

    const stringValue = screen.getByText(/Show more/i)
    expect(stringValue).toBeInTheDocument()
  })

  //   test('Check if link "Show more" is a <Link> element', () => {
  //     const wrapper = shallow(
  //       <BrowserRouter>
  //         <StartPage meetups={meetupData} />
  //       </BrowserRouter>
  //     )

  //     expect(wrapper.find('Link[data-test="show-MeetupDetails"]').length).toBe(1)
  //   })

  test('Should render the meetup title "Premier league"', () => {
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
