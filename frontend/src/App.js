import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherInfo from './components/weatherInfo'
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=47.51169420000001&lon=-122.18608669999999&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0"

class App extends React.Component {


  constructor(){
    super()
    this.state = {
      city: "",
      temperature: "",
      description: ""
    }
  }

  componentDidMount(){
    fetch(weatherAPI)
    .then(response => response.json())
    .then(data => {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description
      })
    });
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
        <div className="outerDiv">
        <div className="mainDiv">
        <h1 className="header1">FREECODECAMP</h1>
        <h1 className="header2">WEATHER APP</h1>
        <WeatherInfo info={this.state}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
