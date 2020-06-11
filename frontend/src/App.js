import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherInfo from './components/weatherInfo'

class App extends React.Component {


  constructor(){
    super()
    this.state = {
      city: "",
      temperature: "",
      description: ""
    }
  }

  weatherInit = () => {
      const success = (position) => {
        this.getWeatherData(position.coords.latitude, position.coords.longitude);
      }
      navigator.geolocation.getCurrentPosition(success);
    }
    //this works because you're not assigning the latitude and longitude to a variable rather you're just passing down
    //the values, I think since this is async data you basically have to do it this way, if you try to assign it to
    //a variable then it "breaks" things due to being "live". Once you assign "live" data to a variable then it no longer
    //is "living" anymore and as such it won't work with the fetch function

    getWeatherData = (lat, lon) => {
     const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0`;
     fetch(weatherApi)
     .then(response => response.json())
     .then(data => {
         this.setState({
           city: data.name,
           temperature: data.main.temp,
           description: data.weather[0].description
         });
       })
   }

   componentDidMount(){
   this.weatherInit();
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
