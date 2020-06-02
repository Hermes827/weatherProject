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
