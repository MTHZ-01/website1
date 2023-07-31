



import React, { Component } from 'react'

export default class FloatingFileInput extends Component {
  render() {
    return (
      <div className='floatingGrabberParent'>
        <input type="file" onChange={e => this.props.srcChange(e)}  required/>
      </div>
    )
  }
}
