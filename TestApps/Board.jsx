import React from 'react';
import Notes from './Notes.jsx';


class  Board  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            comments : [
                  'Hello'
            ]
        };
        this.removeNotes = this.removeNotes.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.addNotes = this.addNotes.bind(this);
      }


      addNotes(newText){
        var arr = this.state.comments;
        arr.push(newText);
        this.setState({comments : arr});
      }


      removeNotes(i){

        var arr = this.state.comments;
        arr.splice(i , 1);
        this.setState({comments : arr});
      }


      updateNotes(i, newText){
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments : arr});
      }

    render(){
      return(
            <div>
                <button onClick = {this.addNotes.bind(null,'')}>Add Note</button>
                {
                    
                        this.state.comments.map(function(text , i ){
                            return(<Notes key = {i} index = {i} updateNotes = {this.updateNotes.bind(this)}
                              >{text}</Notes>);
                        })

                }

               
            </div>
      );
            
    
        
    }
}



export default Board;