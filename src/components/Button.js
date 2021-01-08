import React from 'react'

import '../styles/grid.css'

class Button extends React.Component {
  render (props) {
    return (
      <a href={`/info/${this.props.city}`}>
        <div className='cities-button__container box'>{this.props.city}</div>
      </a>
    )
  }
}

export default Button
