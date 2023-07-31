    import React, { Component } from 'react'
import ArticleContainer from './ArticleContainer'
import Loading from './Loading'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ProductEditable from './ProductEditable';

class Settings extends Component {
    state = {
        index: 0,
        head: "First item",
        titles: ["", "", "", "", "", ""],
        descriptions: ["", "", "", "", "", ""],
        srcs: ["", "", "", "", "", ""]
    }
    data = this.props.data


    handleOptionCLick = (index, head) => {
        var cs = { ...this.state }
        cs.index = index
        console.log(index)
        cs.head = head
        this.setState(cs)
    }


    handleTitleChange = (event, index = this.state.index) => {
        var cs = { ...this.state }
        cs.titles[index] = event.target.value
        console.log(event.target.value)
        this.setState(cs)
    }

    handleDescriptionChange = (event, index = this.state.index) => {
        var cs = { ...this.state }
        cs.descriptions[index] = event.target.value
        console.log(event.target.value)
        this.setState(cs)
    }

    handleSrcChange = (e) => {
        var clone_State = { ...this.state }
        var s = clone_State.srcs
        console.log(clone_State)
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];


        reader.addEventListener("load", async () => {

            clone_State.srcs[clone_State.index] = reader.result
            console.log("Image read success")
            this.setState(clone_State)



        })
        reader.readAsDataURL(file);
    }


    handleSave = () => {
        this.props.setter(
            this.state.titles[this.state.index],
            this.state.descriptions[this.state.index],
            this.state.srcs[this.state.index],
            this.state.index
        )
        console.log("Parent State setting Success !!!!")

    }

    render() {
        return (

            <div className='settingContainer col-12 col-md-9 col-lg-8 col-xl-7 center justify-content-start flex-column'>
                <div className='d-flex row justify-content-center align-items-center sliderOptionCont settingOptCont col-12'>

                    <button onClick={() => this.props.history.push("/Settings/SliderSettings")}>Slider settings</button>
                    <button onClick={() => this.props.history.push("/Settings/ProductSettings")}>Products</button>

                </div>


                <Route path="/Settings/ProductSettings">
                    <h1>Product settings </h1>
                    
                    {(this.props.data.Products.length === 0) && <div className='col-3'>Loading . . .</div>}
                    <div className='ProductEditableContParent d-flex row justify-content-center align-items-center'>

                        {
                            (this.props.data.Products.length != 0) &&
                            this.props.data.Products.map((product) => (<ProductEditable p={product} data={this.props.data} identifier={product.id} del={this.props.delProd} key={product.id} />))

                        }

                    </div>
                </Route>

                <Route path="/Settings/SliderSettings">
                    <h1>Slider Settings </h1>

                    <div className='  col-12 center flex-column'>
                        <div className=' sliderRepresentor'>
                            {(this.data.Slider == null) && <div className='marginalBox'><Loading /></div>}
                            {(this.data.Slider != null) && <ArticleContainer data={this.data} changeIndex={this.props.changeIndex} getState={this.props.getState} />}
                        </div>

                        <div className='d-flex row justify-content-center align-items-center sliderOptionCont '>

                            <button onClick={() => this.handleOptionCLick(0, "First item")}>First item</button>
                            <button onClick={() => this.handleOptionCLick(1, "Second item")}>Second item</button>
                            <button onClick={() => this.handleOptionCLick(2, "Third item")}>Third item</button>
                            <button onClick={() => this.handleOptionCLick(3, "Fourth item")}>Fourth item</button>
                            <button onClick={() => this.handleOptionCLick(4, "Fifth item")}>Fifth item</button>
                            <button onClick={() => this.handleOptionCLick(5, "Sixth item")}>Sixth item</button>
                        </div>

                        {
                            (this.state.index == 0 || this.state.index == 1 || this.state.index == 2 || this.state.index == 3 || this.state.index == 4 || this.state.index == 5) &&

                            <div className="  sliderSettingsParent">
                                <h2>{this.state.head}</h2>
                                <div className='d-flex flex-column sliderSettingsCont'>
                                    <label htmlFor="">picture:</label>
                                    <input type="file" name='' onChange={this.handleSrcChange} />
                                    <label htmlFor="">Title:</label>
                                    <input type="text" onChange={this.handleTitleChange} />
                                    <label htmlFor="">Description:</label>
                                    <textarea name="" id="" cols="30" rows="10" onChange={this.handleDescriptionChange} ></textarea>
                                    <div
                                        className="col-12 d-flex justify-content-end"
                                        onClick={this.handleSave}
                                    ><button>Save Changes</button></div>

                                </div>
                            </div>
                        }
                    </div>


                </Route>
            </div>


        )
    }
}


export default withRouter(Settings)