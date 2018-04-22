import React from 'react';
import ReactDOM from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import selectUser from '../actions/index.jsx';



class UserList extends ReactDOM.Component{
   
createList(){

    return this.props.users.map((user)=>{
        return(<li 
            key={user.id}
            onClick = {() => this.props.actions.selectUser(user)} >
            {user.first}
            </li>);
    });
}

render(){
    return(
        <div>
            {this.createList()}
        </div>
    );
}
}

const mapStateToProps = (state,props) => {
return{
    users : state.users
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        actions : bindActionCreators({selectUser: selectUser},dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);