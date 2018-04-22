

import React from 'react';
import Dropzone from 'react-dropzone';
import {Route, Switch,RouteProps } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import uploadFile from './actions/index.jsx';
import saveName from './actions/action-name.jsx';
import savePhone from './actions/action-phone.jsx';
import saveAddress from './actions/action-address.jsx';
import saveSurname from './actions/action-surname.jsx';
import savePaymentDate from './actions/action-paymentDate.jsx';
import saveInvoiceAmount from './actions/action-saveinvoiceAmount.jsx';
import Popup from 'react-popup';
import Modal from 'react-modal';
import  {DateRange}   from 'react-date-range';
import  DatePicker   from 'react-datepicker';


class UploadInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state={
                   filesToBeSent:[],
                   editing : false,
                   modalIsOpen : false,
                   name :null,
                   surname : null,
                   address : null,
                   phone : null,
                   finalComponent : false
          }
      }

      onDrop(acceptedFiles) {
          console.log('Accepted files: ', acceptedFiles[0].name);
          var filesToBeSent=this.state.filesToBeSent;
          filesToBeSent.push(acceptedFiles);
          this.setState({filesToBeSent}); 
          this.props.actions.uploadFile(filesToBeSent)
          console.log('filesToBeSent: ', filesToBeSent);
      }

      saveDetails(event){
        console.log(event.target[0].value);
        var name=this.state.name;
        this.setState({finalComponent : true})
        this.props.actions.saveName(event.target[0].value);
        this.props.actions.saveSurname(event.target[1].value);
        this.props.actions.saveAddress(event.target[2].value);
        this.props.actions.savePhone(event.target[3].value);
        
      }


handleClick(e){
    e.preventDefault();
    this.setState({ editing : true});   
}


handleSelect(e){
    debugger;
    console.log(e.target.value)
      this.props.actions.savePaymentDate(e.target.value); 
}

handleInvoiceAmountSelect(){
    debugger;
    console.log(e.target.value)
    this.props.actions.invoiceAmount(e.target.value);
}
addRecipient(e){
    e.preventDefault();
    this.setState({modalIsOpen: true});
    
}
closeModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: false});
  }

createList(){
    return this.props.file.map((file)=>{
        return(<p
            key={file[0].name}
             >
            {file[0].name}
            </p>);
    });
}


renderForm(){
    
    return (
<div>
<div id="divDetails" style={{display:this.state.finalComponent ? 'block' : 'none' }}>
Name : {this.props.name} 

Address : {this.props.address}

Payment Target  : {this.props.paymentDate}

Invoice Ammount : {this.props.invoiceAmount}
</div>




    <div>
            <form>
                 <label>Invoice Amount : <input type = "text"  
                  onChange = {(event) => this.handleInvoiceAmountSelect(event)}/></label>
                 
                 <p>Date: <input type="date" id="datepicker" 
                 onChange = {(event) => this.handleSelect(event)}  /></p>

                <div>Invoice File:  {this.createList()}</div>
                     <button
                     onClick={(event) => this.addRecipient(event)}>Add Recipient</button>
                  
            </form>
<div>

<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
 <h2 ref={subtitle => this.subtitle = subtitle}>Add Recipient</h2>
          <button onClick={(event) => this.closeModal(event)}>close</button>
          <div>Add Recipient</div>
          <form  action="#" onSubmit={(event)=>this.saveDetails(event)}>
                <label>Name : <input type = "text"  value={this.state.name} /></label>
                <label>Surname :<input type = "text" value={this.state.surname} /></label>
                <label>Address : <input type = "text" value={this.state.address} /></label>
                <label>Phone : <input type = "text" value={this.state.phone} /></label>
                <input type="submit" value="Submit" />
          </form>
        </Modal>


</div>
<div className="App">
                 <Dropzone     
                 style={{
                     width: '100px',
                     height: '100px',
                     borderWidth: '2px',
                     borderColor: 'rgb(100, 102, 102)',
                     borderStyle: 'dashed',
                     borderRadius: '5px',
                     padding: '20px',
                   }}

                 onDrop={(files) => this.onDrop(files)}>
                     <div>Upload your invoice.</div>
                 </Dropzone>
            </div>
        </div>
    </div>      
    );
}


renderFileUpload(){
    return (
        <div>
           <div className="App">
                 <Dropzone     
                 style={{
                     width: '100px',
                     height: '100px',
                     borderWidth: '2px',
                     borderColor: 'rgb(100, 102, 102)',
                     borderStyle: 'dashed',
                     borderRadius: '5px',
                     padding: '20px',
                   }}

                 onDrop={(files) => this.onDrop(files)}>
                     <div>Upload your invoice.</div>
                 </Dropzone>

                 <div>
                     <button
                     onClick={(event) => this.handleClick(event)}>Upload Invoice</button>
                  </div>
             </div>
               
        </div>
       
     );

}
    

render() {
     
        if(this.state.editing){
                return this.renderForm();
            }else{
                return this.renderFileUpload();
            }
    
     }   
}

const mapStateToProps = (state,props) => {
   
    return{
        file : state.fileName,
        name : state.name,
        surname : state.surname,
        address :state.address,
        phone : state.phone,
        paymentDate : state.paymentDate,
        invoiceAmount :state.invoiceAmount

        }
    }

    const mapDispatchToProps = (dispatch) =>{
        return{
            actions : bindActionCreators({uploadFile: uploadFile,
            saveName:saveName ,
            savePhone : savePhone,
            saveAddress: saveAddress,
            saveSurname : saveSurname,
            savePaymentDate : savePaymentDate
            },dispatch)
            
        }
    }


export default connect(mapStateToProps , mapDispatchToProps)(UploadInvoice);