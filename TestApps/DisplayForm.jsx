import React from 'react';

class DisplayForm extends React.Component{

    render(){

        return(
            <div>
                <form>
                 <input type = "text"  name = "city" placeholder = "City" />
                 <input type = "text"  name = "country" placeholder =  "Country" />
                 <button name= "Get Weather" onClick = {this.props.getWeather}>Get Weather</button>
                 </form>
            </div>
        );
    }
}
export default DisplayForm;