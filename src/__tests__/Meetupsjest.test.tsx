import { describe, expect, test, jest } from "@jest/globals"
import StartPage from "../components/StartPage"

jest.mock("../components/StartPage")

describe("Tests on meetupdata with jest", () => {
  test("should sort by number", () => {
    const meetups = [
      {
        id: 1,
        title: "Rolex talks",
        description: "lets talk about Rolex",
        date: "2021-01-22",
        time: "19:00",
        location: "Rolex forum"
      },

      {
        id: 2,
        title: "Omega",
        description: "lets talk about Omega",
        date: "2022-03-05",
        time: "13:00",
        location: "Omega"
      }
    ]

    const spyFn = jest.fn(StartPage)
    spyFn({ meetups })
    // @ts-ignore
    spyFn.mockImplementationOnce(() => {
      return { meetups }
    })

    expect(spyFn).toHaveBeenCalled()
  })
})
