    import React from 'react';

class Weather extends React.Component{

    render(){
debugger;
        return(
            <div>
               <p>Tempreture : {this.props.tempreture}</p>
               <p>Location : {this.props.city}</p>
                    <p>{this.props.country}</p>
                    <p>Description :    {this.props.description}</p>
                    <p>Humidity : {this.props.humidity}</p>
               <p>{this.props.error}</p>
            </div>
        );
    }
}
export default Weather;