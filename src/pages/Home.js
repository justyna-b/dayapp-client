import React from 'react'

import Button from '../components/Button'
import '../styles/home.css'
import '../styles/grid.css'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cities: []
    }
  }

  async componentDidMount () {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/cities`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          cities: res
        })
        console.log(this.state.cities)
      })
      .catch(error => {
        console.log({ message: 'ERROR ' + error })
      })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='cities-container'>
           <div className='home-text' id='title'> wybierz miasto </div>
            <div className='wrapper'>
              {Object.keys(this.state.cities).map(city => (
                <Button city={this.state.cities[city].en_name} />
              ))}
            </div>
            <div className='home-text'>
              Przykro nam, API z którym współpracujemy nie wspiera póki co
              pozostałych stolic Europy :(
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Home
