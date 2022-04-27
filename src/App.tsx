import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { watchData } from "./data/watchData"
import "./App.css"
import StartPage from "./components/StartPage"
import MeetupDetails from "./components/MeetupDetails"
import { useState, useEffect } from "react"

function App() {
  const [meetups, setMeetups] = useState(
    localStorage.getItem("meetups") ? localStorage.getItem("meetups") : "[{}]"
  )

  useEffect(() => {
    if (!localStorage.getItem("meetups")) {
      localStorage.setItem("meetups", JSON.stringify(watchData))
      setMeetups(localStorage.getItem("meetups"))
    } else if (localStorage.getItem("meetups")) {
      setMeetups(localStorage.getItem("meetups"))
    }
  }, [meetups])

  return (
    <div className="App">
      <Router>
        <>
          <header className="App-header">
            <h1>&#9201; Watch Meetups &#9201;</h1>
          </header>
        </>
        <section className="main-content">
          <Routes>
            {localStorage.getItem("meetups") && (
              <Route
                path="/"
                element={<StartPage meetups={JSON.parse(meetups || "")} />}
              ></Route>
            )}
            <Route
              path="/meetup/:id"
              element={
                <MeetupDetails
                  meetups={JSON.parse(meetups || "")}
                  myName=""
                  myEmail=""
                />
              }
            ></Route>
          </Routes>
        </section>
      </Router>
    </div>
  )
}

export default App
