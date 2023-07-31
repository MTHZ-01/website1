


import React, { Component } from 'react'
import ArticleFront from './ArticleFront'
import { Fragment } from 'react'



export default class ArticleContainer extends Component {


    data = this.props.data





    render() {
        // setInterval(this.props.changeIndex, 2000)

        return (
            <div className='col-12 col-md-8 articleContainer center flex-column justify-content-around'>

                <div className='myArticle'>


                    { [0, 1, 2, 3, 4, 5].map(index =>

                        <ArticleFront
                            widthClass={this.data.Slider.imgClassNames[index]}
                            imgSrc={this.data.Slider.SliderPicSrcs[index]}
                            title={this.data.Slider.titles[index]}
                            message={this.data.Slider.descriptions[index]}
                            key={index}
                        />


                    )}
                </div>

                <div className='col-12 center'>

                    <button onClick={() => this.props.changeIndex("decrease")} className='backArrow fa fa-arrow-left   '></button>
                    <div className='indexContainer'>
                        

                            <div className={this.data.Slider.indexPointsClasses[0]} style={{ transition: `.2s` }}></div>
                            <div className={this.data.Slider.indexPointsClasses[1]} style={{ transition: `.2s` }}></div>
                            <div className={this.data.Slider.indexPointsClasses[2]} style={{ transition: `.2s` }}></div>
                            <div className={this.data.Slider.indexPointsClasses[3]} style={{ transition: `.2s` }}></div>
                            <div className={this.data.Slider.indexPointsClasses[4]} style={{ transition: `.2s` }}></div>
                            <div className={this.data.Slider.indexPointsClasses[5]} style={{ transition: `.2s` }}></div>
                    </div>
                    <button onClick={() => this.props.changeIndex("increase")} className='forwardArrow fa fa-arrow-right  '></button>


                        

                </div>

            </div>
        )
    }
}
