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


  // componentDidMount(){
  //   fetch(weatherAPI)
  //      .then(response => response.json())
  //      .then(data => {
  //            this.setState({
  //              city: data.name,
  //              temperature: data.main.temp,
  //              description: data.weather[0].description
  //            })
  //          });
  // }




// geoFindMe(){
//
//   function success(position){
//      const latitude  = position.coords.latitude;
//      const longitude = position.coords.longitude;
//      const newAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0`
//      console.log(latitude)
//    }
//
//   navigator.geolocation.getCurrentPosition(success)
//
// }




//
//   getData(api){
//   fetch(api)
//   .then(response => response.json())
//   .then(data => {
//         this.setState({
//           city: data.name,
//           temperature: data.main.temp,
//           description: data.weather[0].description
//         })
//       });
//       return this.state
// }
//




  // componentDidMount(){
  //
  //   function success(position) {
  //     const latitude  = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0`)
  //     .then(response => response.json())
  //     .then(data => {
  //           this.setState({
  //             city: data.name,
  //             temperature: data.main.temp,
  //             description: data.weather[0].description
  //           })
  //         });
  //   }
  //     navigator.geolocation.getCurrentPosition(success)
  // }


  // geoFindMe() {
  //
  //   function success(position) {
  //     const latitude  = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         city: data.name,
  //         temperature: data.main.temp,
  //         description: data.weather[0].description
  //       })
  //     });
  //   }
  //     navigator.geolocation.getCurrentPosition(success)
  // }

  // geoFindMe() {
  //
  //   function success(position) {
  //     const latitude  = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //
  //
  //     };
  //   }
  //     navigator.geolocation.getCurrentPosition(success)
  // }



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
