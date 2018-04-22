import React from 'react';

class CheckBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };

        this.handleChange = this.handleChange.bind(this);
      }


      handleChange(){
        this.setState({checked: !this.state.checked});
      }


    render(){
        var msg;
        if(this.state.checked){
            msg = 'checked'
        }else{
            msg = 'not checked'
        }


        return(
            <div>
                <input type = "checkBox" defaultChecked={this.state.checked} onChange={this.handleChange}/>
                <h1>State is now :{msg}</h1>
            </div>


        );
    }

}



export default CheckBox;