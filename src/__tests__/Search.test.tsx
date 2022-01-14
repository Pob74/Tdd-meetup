import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import StartPage from "../components/StartPage"

const meetupData = [
  {
    id: "1",
    title: "Rolex talks",
    description: "lets talk about rolex",
    date: "2021-01-22",
    time: "19:00",
    location: "Rolex forum"
  }
]

describe("tests for search on meetups", () => {
  test('Search "Rolex", should render 1 meetup', () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartPage
          meetups={meetupData}
          title=""
          description=""
          date=""
          time=""
          location=""
        />
      </BrowserRouter>
    )
    const searchText = "Rolex"
    const searchField = wrapper.find('[test-data="search-meetup"]')
    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[test-data="result-meetup"]').length).toBe(1)
  })
  test('Search "Yoga", should render 0 meetup', () => {
    const wrapper = mount(
      <BrowserRouter>
        <StartPage
          meetups={meetupData}
          title=""
          description=""
          date=""
          time=""
          location=""
        />
      </BrowserRouter>
    )
    const searchText = "Ap"
    const searchField = wrapper.find('[test-data="search-meetup"]')

    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[test-data="result-meetup"]').length).toBe(0)
  })
})
