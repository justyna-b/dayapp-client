import React from 'react'

import Button from '../components/Button'
import '../styles/home.css'
import '../styles/grid.css'

class Info extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: this.props.match.params.city,
      info: ''
    }
  }

    async componentDidMount () {
      fetch(`http://localhost:3000/info/today/${this.state.city}`)
        .then(response => response.json())
        .then(res => {
          this.setState({
            info: res
          })
          console.log(this.state.info)
        })
        .catch(error => {
          console.log({ message: 'ERROR ' + error })
        })
    }

  render () {
    return (
      <div className='App App-header'>
        <div className='cities-container'>
          <div className=' wrapper-info'>
            <div className='box'><img id='img' src={this.state.info.weather}/></div>
            <div className='box'>
              <div id='city'>{this.state.info.city}</div>
              <div> <span className='label'> Wschód: </span> {this.state.info.sunrise}</div>
              <div> <span className='label'> Zachód: </span>{this.state.info.sunset}</div>
              <div> <span className='label'> Temperatura: </span>{this.state.info.temp}</div>
              <div> <span className='label'> Złota godzina: </span>{this.state.info.goldenHour}</div>
              <div> <span className='label'> Długość dnia: </span>{this.state.info.dayLength}</div>
              <div> <span className='label'> Wilgotność: </span>{this.state.info.humidity}</div>
              
              <div>
              <a href={`/calendar/${this.state.city}`}>
                <button className='to-another'>inny dzien</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
