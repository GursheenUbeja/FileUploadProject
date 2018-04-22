import React from 'react';
import ReactDOM from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';




class UserDetails extends ReactDOM.Component{
render(){
   debugger;

        if(!this.props.activeUser){
           return( <div>
            Select a user..
             </div>);
        }else{

            return(
                <div>
                   
                    <h2>{this.props.activeUser.first}</h2>
                </div>
            ); 
        }
    
}
}

const mapStateToProps = (state,props) => {
   
        return{
            activeUser : state.activeUser
            }
    

}

export default connect(mapStateToProps)(UserDetails);