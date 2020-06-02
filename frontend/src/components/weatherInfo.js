import React from 'react'

class WeatherInfo extends React.Component {



  //

 //  onClick={() => this.props.setCurrentCrypto(this.props.crypto)}
 //   >
 // <h1>{this.props.crypto.name}</h1>
 // <img className="logo" src={"https://www.cryptocompare.com" + this.props.crypto.image}></img>
 // <h2>Current Price:  {this.props.crypto.price} USD</h2>
 //
 //



  render() {
    return(
      <div>
      <h1>{this.props.info.city}</h1>
      <h1>{this.props.info.temperature}</h1>
      <h1>{this.props.info.description}</h1>
      </div>
    )
  }

}

export default WeatherInfo
