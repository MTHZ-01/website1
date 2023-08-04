



import React, { Component } from 'react'

export default class SmallLinkAnnouncement extends Component {



    data = this.props.data
    render() {
        return (
            <div className='AnnounceParent col-7 AnnounceParentExtention'>
                <div className="imgContainer col-12 ">
                    {/* {console.log("imgSrc:",  this.props.imgSrc)} */}
                    <img src={this.data.img} alt="" />
                    {/* <img src="./images/Wallpaper_4K3D_13160.JPG" alt="" /> */}
                </div>
                <div className='col-12 center '>
                    <div className="borderDiv" />
                </div>
                <h2> {this.data.title}</h2>

                <div className='col-12 center '>
                    <div className="borderDiv" />
                </div>
                
                <button><i className='fa fa-arrow-right' /> See more</button>
                
                
            </div>
        )
    }
}
