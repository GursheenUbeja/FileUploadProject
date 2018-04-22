import React from 'react';
import Titles from './Titles.jsx';
import DisplayForm  from './DisplayForm.jsx';
import Weather  from './Weather.jsx';

const API_KEY = '59cbfeaba9c01374870ed374382aaa20';
class WeatherApp extends React.Component {

   
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.state = {
                tempreture : null,
                city : null,
                country : null,
                humidity : null,
                description : null,
                error : null
        }
    }


    async getWeather(e){
        debugger;
        e.preventDefault();
        const city = 'London';
        const country = 'uk';
       // const api_call = await fetch('http://cors.io/?http://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}');
        
       const api_call = await fetch('http://cors.io/?http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=59cbfeaba9c01374870ed374382aaa20');
       const data = await api_call.json();
        console.log(data);


        this.setState({
            tempreture : data.main.temp,
            city : data.name,
            country : data.sys.country,
            humidity: data.main.humidity,
            description : data.weather[0].description,
            error :""

        });


    }

   render() {
      return (
         <div>
            <Titles />
            <Weather 
                tempreture = {this.state.tempreture}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
                />
            <DisplayForm getWeather = {this.getWeather}/>
         </div>
        
      );
   }
}
export default WeatherApp;