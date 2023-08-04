import FloatingFileInput from './FloatingFileInput'




import React, { Component } from 'react'

export default class AddProduct extends Component {

    s = this.props.data



    
    Submit = ()=> {
        this.props.Alert("Done", "your new product has been added")
        this.props.addProduct()

    }

    render() {
        return (
            <div className='productParent col-12 d-flex justify-content-start flex-column'  >
                <div>

                    {/* <form action="submit" >  */}
                        <div>
                            <FloatingFileInput srcChange={this.props.srcChange} />
                            <div className='imgContainer'>
                                <img src={this.s.PicSrc[0]} alt="" className='col-12 h-100' />
                            </div>

                            <input className='ml-2 addProductTitle col-12' required type="text" placeholder='Type here the title' onChange={this.props.handleTitleChange} />
                            <input className=' addProductPrice col-12' type="text" required placeholder='Enter the price here' onChange={this.props.handlePriceChange} />
                            
                        </div>
                        <div className='col-12 d-flex justify-content-center  prodButtonCont'>
                            <button  onClick={this.Submit}>Add product</button>
                        </div>
                    {/* </form> */}
                </div>



            </div>
        )
    }
}
