import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

class CalendarCustom extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    date: new Date()
  }

  onChange = date => {
    let defDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`
    let city = this.props.match.params.city
    window.location.href = `/another-info/${city}/${defDate}`
  }

  render () {
    return (
      <div className='App App-header'>
        <h1>WYBIERZ DATĘ</h1>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    )
  }
}
export default CalendarCustom
