import React from 'react';

class Notes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            editing : false,
        };
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
      }

    edit(){
        this.setState({ editing : true});
    }

    remove(){
        this.setState({ editing : true});
        this.props.deleteNotes(this.props.index);
    }


    save(){
       
       this.props.updateNotes(this.props.index , this.refs.newText.value);
        this.setState({ editing : false});
    }

    renderNormal(){

        return(
            <div>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.remove}>Remove</button>
            <p>{this.props.children}</p>
      </div>

        );
    }


    renderForm(){
        return(
        <div>
            <textarea ref = "newText"/>
            <button onClick={this.save}>Save</button>  
            </div>);
    }

    
    render(){
      
            if(this.state.editing){
                return this.renderForm();
            }else{
                return this.renderNormal();
            }
    
        
    
    }
}

export default Notes;