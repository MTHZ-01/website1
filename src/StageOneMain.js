

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import React, { Component } from 'react'

class StageOneMain extends Component {
  handlePush = path => {
    this.props.history.push(path)
    // this.props.handleClose()
  }
  render() {
    return (
      <div className='AnnounceParent start col-8 p-4 AnnounceParentBgCustom'>
        <h1>Try adding a product:</h1>
        <div  className=' flex-column flex-md-row col-12 d-flex center'>
            <button onClick={() => this.handlePush("/products")} className='BtnTitle m-2 fa fa-plus'></button>
            <button className='BtnTitle m-2'></button>  
        </div>
      </div>
    )
  }
}

export default withRouter(StageOneMain)