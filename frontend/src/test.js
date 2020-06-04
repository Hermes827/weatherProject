weatherInit = () => {
    const success = (position) => {
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(success);
  }

  getWeatherData = (lat, lon) => {
   const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

   fetch(weatherApi)
   .then(response => response.json())
   .then(data => {
       this.setState({
         city: "",
         temperature: "",
         description: ""
       });
     }
 }


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
