import React, { Component } from 'react'
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '80fd70077e5d494b82bd857f14b88493'
});


const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: 'https://www.publicbooks.org/wp-content/uploads/2019/11/joel-mott-LaK153ghdig-unsplash-scaled-e1574787737429-810x625.jpg',
      box: {},
      route: 'signin',
      isSigned: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const imageFace = document.getElementById('imageFace')
    const width = imageFace.width
    const height = imageFace.height
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayfaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict("f76196b43bbd45c99b4f3cd8e8b40a8a",
      this.state.input)
      .then(response => this.displayfaceBox(this.calculateFaceLocation(response)))
      .catch(error => {
        console.log(error)
      }
      );
  }

  onRouteChange = (route) => {
    console.log(route)
    if (route === 'home') {
      this.setState({ isSigned: true })
    } else {
      this.setState({ isSigned: false })
    }
    this.setState({ route: route })
  };

  render() {

    const { isSigned, imageUrl, box } = this.state
    return (
      <div className="App" >
        <Particles className="particles"
          params={particleOptions}
        />
        <Navigation onSignOut={this.onRouteChange} isSigned={isSigned} />
        { this.state.route === 'home'
          ? <>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </>
          : (
            this.state.route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
          )

        }
      </div>
    );
  }
}

export default App;