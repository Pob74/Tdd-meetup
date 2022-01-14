import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { watchData } from "./data/watchData"
import "./App.css"
import StartPage from "./components/StartPage"
import MeetupDetails from "./components/MeetupDetails"

function App() {
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
            <Route
              path="/"
              element={
                <StartPage
                  meetups={watchData}
                  title=""
                  description=""
                  date=""
                  time=""
                  location=""
                />
              }
            ></Route>

            <Route
              path="/meetup/:id"
              element={
                <MeetupDetails meetups={watchData} myName="" myEmail="" />
              }
            ></Route>
          </Routes>
        </section>
      </Router>
    </div>
  )
}

export default App
