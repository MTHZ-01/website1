

import React, { Component } from 'react'

export default class Alert extends Component {

  data = this.props.data
  render() {
    return (
      <div className={this.data.curentClass} style={{transition:`.2s` }}>
        <div className='col-9 leftSideAlert '>
          <h3>{this.data.title}</h3>
          <p>{this.data.message}</p>
        </div>
        <div className='col-3 blurSideAlert '></div>
      </div>
    )
  }
}
