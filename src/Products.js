



import React, { Component } from 'react'



export default class Products extends Component {
  
  data = this.props.data
  
  render() {

    return (
      <div className='productParent col-12 '>
        <div>
          <div className="col-12 imgContainer">
            <img src={this.data.PicSrc} alt="is not loading" className='d-flex col-12 h-100' />
          
          </div>
          <h3 className='m-2'>{this.data.title}</h3>
        </div>


        <div className="col-12 price">
          <h4 className='m-2'>{this.data.price}</h4>
        </div>
        <div className='border'></div>
        <div className="col-12 d-flex justify-content-center btnShopContainer"><button className='fa fa-shopping-cart btn-shop'></button></div>
      </div>
    )
  }
}
