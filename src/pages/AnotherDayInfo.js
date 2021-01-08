import React from 'react'

import Button from '../components/Button'
import '../styles/home.css'
import '../styles/grid.css'

class AnotherDayInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: this.props.match.params.city
    }
  }

  //   async componentDidMount () {
  //     fetch('http://localhost:3000/cities')
  //       .then(response => response.json())
  //       .then(res => {
  //         this.setState({
  //           cities: res
  //         })
  //         console.log(this.state.cities)
  //       })
  //       .catch(error => {
  //         console.log({ message: 'ERROR ' + error })
  //       })
  //   }

  render () {
    return (
      <div className='App App-header'>
        {/* <header className='App-header'> */}
        <div className='cities-container'>
          <div className=' wrapper-info'>
            <div className='box'>box</div>
            <div className='box'>
              another day

            </div>
          </div>
        </div>
        {/* </header> */}
      </div>
    )
  }
}

export default AnotherDayInfo
