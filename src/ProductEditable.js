



import React, { Component } from 'react'

export default class ProductEditable extends Component {

    data = this.props.data
    delete = () => {
        var index = null  
        // console.log(this.data.Products)
        for (let i = 0; i <= this.data.Products.length; i++) {
            // console.log("!!!!!!!!!!!!!!!!!!!!", this.data.Products[i].id)
            console.log(i)
            console.log(this.data.Products[i])
            if (this.data.Products[i].id == this.props.identifier) {
                index = i
                break
            }
        }

        // console.log(this.props.p)
        // console.log(index)
        this.props.del(index, this.props.identifier)
        
    }

    render() {
        return (
            <div className='prodEditCont'>
                <div className='col-12 imgContainer center flex-column h-fix'>
                    <img src={this.props.p.PicSrc} alt="" className='imgforProd' />

                    <div className='col-11'>
                        <input className='ml-2 addProductTitle col-12' required type="text" placeholder={this.props.p.title} onChange={this.props.handleTitleChange}/>
                    </div>


                    <div className="col-11">
                        <input className=' addProductPrice col-12' type="text" required placeholder={this.props.p.price} onChange={this.props.handlePriceChange}/>
                    </div>

                    <br />
                    <div className='prodButtCont delButton'><button onClick={this.delete}>Delete</button></div>
                    <div className='prodButtCont viewButton'><button>view</button></div>

                </div>
            </div>
        )
    }
}
