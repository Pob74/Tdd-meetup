import React from "react"
import { render } from "@testing-library/react"
import { shallow } from "enzyme"
import App from "../App"
// import StartPage from "../components/StartPage"
// import MeetupDetails from "../components/MeetupDetails"
// import { MemoryRouter } from "react-router"
// import { Route } from "react-router"
// import { Routes } from "react-router-dom"

// const meetupData = [
//   {
//     id: "1",
//     title: "Rolex talks",
//     description: " lets talk about Rolex",
//     date: "2021-01-22",
//     time: "19:00",
//     location: "Rolex forum"
//   }
// ]

describe("App component tests", () => {
  test("renders App", () => {
    render(<App />)
  })
  test("App renders one header element", () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find("header").length).toBe(1)
  })
  test("App renders one h1  element", () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find("h1").length).toBe(1)
  })
  // Could't get this to work tryed in 1000 different ways but something does't work with react 17
  // test("it show StartPage compunent for / route", () => {
  //   const component = mount(
  //     <MemoryRouter>
  //       <Routes>
  //         <Route>
  //           <StartPage
  //             meetups={meetupData}
  //             title=""
  //             description=""
  //             date=""
  //             time=""
  //             location=""
  //           />
  //         </Route>
  //       </Routes>
  //     </MemoryRouter>
  //   )

  //   expect(component.find(StartPage)).toHaveLength(1)
  //   expect(component.find(MeetupDetails)).toHaveLength(0)
  // })
})
