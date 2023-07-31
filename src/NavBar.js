


import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import Loading from './Loading';
class NavBar extends Component {

  handleCloseDirect = path => {
    this.props.history.push(path)
    this.props.handleClose()
  }



  stats = this.props.stats
  data = this.props.data

  render() {
    return (
      <div className='NavBar col-11 d-flex row justify-content-center align-items-center' onMouseLeave={this.props.handleClose}>
        {this.props.isSmall &&

          <div className='col-12 d-flex justify-content-start'>
            <button className='fas fa-bars navMenu' onClick={this.props.menuOpenFunc}></button>
          </div>}


        {(!(this.props.isSmall) || this.props.isMenuOpen) &&

          <Fragment>

            <button
              className='fa fa-home'
              onMouseEnter={() => this.props.handleOpen("Home", "Go home", [], "/home")}
              onClick={() => this.handleCloseDirect("/home")}
            />
            <button
              onMouseEnter={() => this.props.handleOpen("Products", "see products", [], "products")}
              onClick={() => this.handleCloseDirect("products")}
            >Products</button>

            <button>Components</button>
            <button
              onMouseEnter={() => this.props.handleOpen("Add Product", "try adding a new product", [], "AddProduct")}
              onClick={() => this.handleCloseDirect("AddProduct")}

            >Add product</button>
            <button
              onMouseEnter={() => this.props.handleOpen("Settings", "Open settings", [], "Settings")}
              onClick={() => this.handleCloseDirect("Settings")}

            >settings</button>
            <button>Admin</button>
            <button>About</button>
          </Fragment>
        }

        <div className={this.data.curentClass}>
          <div className="col-12 col-md-4 leftNavTail">
            <div>
              <h1>{this.data.menuTitle}</h1>
              <p>{this.data.menuMessage}</p>

            </div>
            <button onClick={() => this.props.history.push(this.data.destinationPath)}>Check out</button>
          </div>
          <div className="col-md-8 rightNavTail start flex-column">


              {(this.data.menuTitle == "Settings") &&
                <Fragment>
                  <button onClick={() => {this.props.history.push("/Settings/SliderSettings")}}>Slider settings</button>
                  <button> Products </button>
                </Fragment>}
              {/* <Loading /> */}


          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)