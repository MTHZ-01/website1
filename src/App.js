import logo from './logo.svg';
import './App.css';
import './Components.css';
import "./media.css"
import './KeyFrames.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from 'uuid';

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Products from './Products';
import BigAlert from './BigAlert';
import NavBar from './NavBar';
import Alert from './Alert';
import SmallLinkAnnouncement from './SmallLinkAnnouncement';
import StageOneMain from './StageOneMain';
import AddProduct from './AddProduct';
import Loading from './Loading';
import ArticleContainer from './ArticleContainer';
import FloatingFileInput from './FloatingFileInput';
import Settings from './Settings';

import { Component } from "react"
import { toHaveStyle } from '@testing-library/jest-dom/matchers';


class App extends Component {
  constructor() {
    super()
    setInterval(this.handlePictureindexChange, 2000)



    this.state = {

      smallView: false,
      menuOpen: false,

      AddProd: {
        title: "",
        price: "",
        imgSrc: "",
        id: uuidv4()


      },


      NavBarMenu:
      {
        activeClass: "navBarTail col-10", deactiveClass: "navBarTail col-10 navBarTailDeactive", curentClass: "navBarTail col-10 navBarTailDeactive",
        menuTitle: "", menuMessage: "", links: [], destinationPath: ""
      },

      BigAlert:
        { title: "", message: "", activeClass: "AlertParent", deactiveClass: "AlertParent widthNone", curentClass: "AlertParent widthNone", to: "/home" },
      Alert:
        { id: 0, title: "", message: "", activeClass: "alertSmall", deactiveClass: "alertSmall widthNone", curentClass: "alertSmall widthNone" },

      Products: [],

      Slider: null
    }






  }








  uploadSlider = (updatedData) => {
    fetch('http://192.168.1.192:8000/Slider', {
      method: 'PUT', // or 'PATCH' for partial update
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data updated:', data);
        this.handlePopUpAlert("Success", "data has been sent to json server")
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }




  // Handling SliderSettings:
  handleSliderDataSetting = (title, description, src, index) => {
    console.log(title)
    console.log(description)
    console.log(src)
    console.log(index)
    var cs = { ...this.state }
    cs.Slider.titles[index] = title
    cs.Slider.descriptions[index] = description
    cs.Slider.SliderPicSrcs[index] = src
    this.setState(cs)
    const data = this.state.Slider
    this.uploadSlider(data)


    // console.log(this.state.Slider)
  }


  // `http://${}:8000/Slider`
  handleSliderStateRevive = () => {
    if (this.state.Slider == null) {

      const clone_State = { ...this.state }
      fetch(`http://${this.ip}:8000/Slider`)
        .then(response => response.json())
        .then((data) => {
          console.log()
          console.log("From local api:", data)
          console.log()
          const cloneState = {...this.state}
          cloneState.Slider = data
          this.setState(cloneState)
          
          
          
        })
        .then(() => {
          console.log("Slider from local state", this.state.Slider)
          // this.setState(this.state)
          this.forceUpdate()
  
        })
        
    }

    // console.log(this.state.Slider)

  }




  // Handling menuOpen:
  handleMenuOpen = () => {
    const cloneState = { ...this.state }
    cloneState.menuOpen = true
    this.setState(cloneState)
  }

  // Handling menuClose:
  handleMenuClose = () => {
    const cloneState = { ...this.state }
    cloneState.menuOpen = false
    this.setState(cloneState)
  }

  // Handling small alert popUp:
  handleCloseAlert = () => {
    var clone_State = { ...this.state }
    clone_State.Alert.curentClass = this.state.Alert.deactiveClass
    this.setState(clone_State)
  }
  handlePopUpAlert = (Title, message) => {
    var clone_State = { ...this.state }
    clone_State.Alert.curentClass = this.state.Alert.activeClass
    clone_State.Alert.title = Title
    clone_State.Alert.message = message

    this.setState(clone_State)

    console.log(this.state.Slider)

    setTimeout(() => {
      this.handleCloseAlert()
    }, 3000)
  }


  // Handling add product:
  handleAddProduct = () => {
    const data = {
      title: this.state.AddProd.title,
      price: this.state.AddProd.price,
      PicSrc: this.state.AddProd.imgSrc,
      id: this.state.AddProd.id,
    }

    console.log(data)
    if (data.price == "" || data.title === "" || data.PicSrc === "") {
      this.handlePopUpAlert("Complete all fields", "Please compelete all the required fields.")
      return
    }

    fetch(`http://${this.ip}:8000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error c:', error);
        this.handlePopUpAlert("Payload too lagrge", "please lower image size")
      });

  }



  // Handling price change:
  handleTitleChange = (event) => {
    var clone_State = { ...this.state }
    clone_State.AddProd.title = event.target.value
    this.setState(clone_State)
    console.log(this.state.AddProd.title)


  }

  handlePriceChange = (event) => {
    var clone_State = { ...this.state }
    clone_State.AddProd.price = event.target.value
    console.log(this.state.AddProd.price)

  }



  // Handling img src Change:
  handleImageChange = (e) => {
    var clone_State = { ...this.state }
    var s = clone_State.AddProd.imgSrc
    console.log(clone_State)
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];


    reader.addEventListener("load", async () => {

      clone_State.AddProd.imgSrc = reader.result
      console.log("Image read success")
      this.setState(clone_State)



    })
    reader.readAsDataURL(file);
  }



  // Handling NavBar menuOpen:
  handleNavMenuOpen = (title, discription, links, dest) => {
    this.handleNavMenuClose()


    const clone_State = { ...this.state }
    clone_State.NavBarMenu.curentClass = clone_State.NavBarMenu.activeClass
    clone_State.NavBarMenu.menuTitle = title
    clone_State.NavBarMenu.menuMessage = discription
    clone_State.NavBarMenu.links = links
    clone_State.NavBarMenu.destinationPath = dest

    this.setState(clone_State)

  }

  handleNavMenuClose = () => {
    const clone_State = { ...this.state }
    clone_State.NavBarMenu.curentClass = clone_State.NavBarMenu.deactiveClass
    this.setState(clone_State)
  }



  // Handling BigAlertClose:
  handleBigAPopUp = (title, message, to = "./home") => {
    const clone_State = { ...this.state }

    clone_State.BigAlert.curentClass = clone_State.BigAlert.activeClass
    clone_State.BigAlert.title = title
    clone_State.BigAlert.message = message
    clone_State.BigAlert.to = to

    this.setState(clone_State)

  }


  handleBigAClose = () => {
    const clone_State = { ...this.state }
    clone_State.BigAlert.curentClass = clone_State.BigAlert.deactiveClass

    this.setState(clone_State)

  }


  SliderSetter = (data) => {
    var clone_State = { ...this.state }

    clone_State.Slider = data
    this.setState(clone_State)


  }



  componentDidMount() {

    fetch(`http://192.168.1.192:8000/products`)
      .then(response => response.json())
      .then((data) => {

        const clone_State = { ...this.state }
        clone_State.Products = data
        this.setState(clone_State)

      })

    this.handleSliderStateRevive()



    window.addEventListener('resize', this.handleResize);
    this.checkViewport();


  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.checkViewport();
  };

  checkViewport() {


    if (window.innerWidth < 600) {
      // this.setState({ isViewportLower: true });
      const cloneState = { ...this.state }
      cloneState.smallView = true
      this.setState(cloneState)
      console.log(`Small Veiw: ${this.state.smallView}`)
    } else {
      // this.setState({ isViewportLower: false });

      const cloneState = { ...this.state }
      cloneState.smallView = false
      cloneState.menuOpen = false
      this.setState(cloneState)
      console.log(`Small Veiw: ${this.state.smallView}`)

    }
  }


  // Handle index increase:
  handlePictureindexChange = (action = "increase") => {
    if (this.state.Slider == null) {
      return
    }
    const cloneState = { ...this.state }
    cloneState.Slider.indexPointsClasses[cloneState.Slider.currentIndex] = cloneState.Slider.deactiveClassName_index
    cloneState.Slider.imgClassNames[cloneState.Slider.currentIndex] = cloneState.Slider.deactiveClassName_img
    if (action == "increase") {

      cloneState.Slider.currentIndex = (cloneState.Slider.currentIndex + 1) % 6
      console.log(cloneState.Slider.currentIndex)
    }
    if (action == "decrease") {

      if (cloneState.Slider.currentIndex == 0) {
        cloneState.Slider.currentIndex = 5


      } else {
        cloneState.Slider.currentIndex = (cloneState.Slider.currentIndex - 1) % 6

      }
      console.log(cloneState.Slider.currentIndex)
    }

    cloneState.Slider.indexPointsClasses[cloneState.Slider.currentIndex] = cloneState.Slider.activeClassName_index
    cloneState.Slider.imgClassNames[cloneState.Slider.currentIndex] = cloneState.Slider.activeClassName_img
    this.setState(cloneState)

  }



  ip = "192.168.1.192"
  // ip = this.GetApi()



  render() {




    return (
      <div className="App">
        <Router>
          <BigAlert key={this.state.BigAlert.id} data={this.state.BigAlert} handleOpen={this.handleBigAPopUp} handleClose={this.handleBigAClose} />
          <Alert data={this.state.Alert} />
          <NavBar
            isMenuOpen={this.state.menuOpen}
            menuOpenFunc={this.handleMenuOpen}
            menuCloseFunc={this.handleMenuClose}
            data={this.state.NavBarMenu}
            isSmall={this.state.smallView}
            handleOpen={this.handleNavMenuOpen}
            handleClose={this.handleNavMenuClose}
            smallAlert={this.handlePopUpAlert}
          />

          <div className='col-12 h-100 appCont'>
            <Route path="/home">
              {/* {this.state.smallView && <h1>small</h1>} */}
              <div className='topIntro col-12 d-flex justify-content-center align-items-center flex-column flex-md-row ' style={{ transition: `.2s` }}>
                <div className='col-5 d-flex justify-content-between align-items-end flex-column h-25 headContainer'>
                  <div className='headLeft '>
                    <h1>Alucard</h1>
                    <h3>development</h3>

                  </div>
                  <div className="headLeft">
                    <button>Learn more</button>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center align-items-md-start flex-column ">
                  <SmallLinkAnnouncement />
                </div>
              </div>

              <div className='middleSection d-flex justify-content-center align-items-center flex-column'>

                {(this.state.Slider != null) && <ArticleContainer data={this.state} changeIndex={this.handlePictureindexChange} getState={this.handleSliderStateRevive} />}
                
                <StageOneMain />
              </div>
              {/* <button onClick={() => this.handleBigAPopUp(0)}></button> */}


            </Route>

            <Route path="/products">

              <div className="middleSection productContaiter ">


                <div className='col-11  d-flex row justify-content-center align-items-center  '>



                  {(this.state.Products.length === 0) && <div className='col-3'>Loading . . .</div>}
                  {(this.state.Products.length != 0) &&
                    this.state.Products.map((product) => (<Products data={product} key={product.id} />))

                  }
                </div>


              </div>
            </Route>


            <Route path="/AddProduct">

              <div className='middleSection productContaiter AddProdParent d-flex flex-column'>
                <div className="col-10">

                  <h1>Add a new product:</h1>
                  <br />
                  <br />
                </div>
                <AddProduct
                  data={this.state.AddProd}
                  srcChange={this.handleImageChange}
                  Alert={this.handleBigAPopUp}
                  addProduct={this.handleAddProduct}
                  handleTitleChange={this.handleTitleChange}
                  handlePriceChange={this.handlePriceChange}
                ></AddProduct>
              </div>
            </Route>
            <Route path="/submit">
              <div className='middleSection productContaiter AddProdParent d-flex flex-column'>
                <div className="col-6 d-flex flex-column">
                  <h1>Done !</h1>
                  <p>Your new product has been added.</p>
                  <Link to="/home">Home</Link>
                  <Link to="/Products">Products</Link>
                </div>

              </div>

            </Route>

            <Route path="/Settings/">
              <div className='middleSection productContaiter center'>
                <Settings setter={this.handleSliderDataSetting} data={this.state} />
              </div>
            </Route>









            <footer className='col-12 center'></footer>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;


