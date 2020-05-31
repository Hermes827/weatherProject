import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
  }

  geoFindMe() {
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude + " " + longitude)
    }
      navigator.geolocation.getCurrentPosition(success)
  }

  render(){
    return (
      <div>
        hello
        {this.geoFindMe()}
      </div>
    );
  }
}

export default App;
