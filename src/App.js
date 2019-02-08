import React, { Component } from "react"
import "./App.css"
import moment from "moment"

const renderCountdown = () => {
  const daysLeft = Math.round(
    moment.duration(moment("2019-05-18T20:00:00-0500").diff(moment())).asDays()
  )

  if (daysLeft >= 1) {
    return (
      <div>
        <div className="count">{daysLeft} days</div>
        <div>until Shrek's 18th birthday party</div>
      </div>
    )
  } else if (daysLeft === 0) {
    return (
      <div>
        <div className="count">Less than a day</div>
        <div>until Shrek's 18th birthday party</div>
      </div>
    )
  }

  return <div className="count">IT'S HERE</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="countdown">{renderCountdown()}</div>
      </div>
    )
  }
}

export default App
