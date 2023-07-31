



import React, { Component } from 'react'

export default class ArticleFront extends Component {
    
    render() {

        return (
            
            <div className={this.props.widthClass} style={{transition:`.2s` }} >


                <div className='imgCont ' >
                    <img src={this.props.imgSrc}  style={{transition:`4s` }} alt="" />
                </div>
                <div className='col-12 center justify-content-end'>
                    <div className='col-11'>


                        <h2 className='sliderH' style={{transition:`4` }}>{this.props.title}</h2>
                        <p style={{transition:`.2s` }}>
                            {this.props.message}
                        </p>
                    </div>

                </div>
                <div className='col-11 center justify-content-end'><button><i className='fa fa-arrow-right' /> Check Out </button></div>
            </div>


        )
    }
}
