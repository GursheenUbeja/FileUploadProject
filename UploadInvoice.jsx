




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
import './css/style.css';


const buttonStyle = {
   backgroundColor : 'blue',
   width : '150px',
   textAlign: 'center',
   color : 'white',
   height :'50px'
   
  };

  const backGroundStyle = {
    backgroundColor : '#00FFFF',
   };



class UploadInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state={
                   filesToBeSent:[],
                   showErrorMessage : false ,
                   editing : false,
                   modalIsOpen : false,
                   name :null,
                   surname : null,
                   address : null,
                   phone : null,
                   finalComponent : false,
                   secondPage : false
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
    if (this.state.filesToBeSent!=null && this.state.filesToBeSent.length >0){
      e.preventDefault();
      this.setState({ editing : true});
      this.setState({secondPage : true});
              }
          else{ 
    this.setState({ showErrorMessage : true});
  }
    
}


handleSelect(e){
    debugger;
    console.log(e.target.value)
    this.props.actions.savePaymentDate(e.target.value);
  
}

handleInvoiceAmountSelect(e){
    debugger;
    console.log(e.target.value)
    this.props.actions.saveInvoiceAmount(e.target.value);
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
    if(!this.props.file){
        return( <div>
         Select a file..
          </div>);
     }else{

   
    return this.props.file.map((file)=>{
     
        return(<p
            key={file[0].name}
             >
            {file[0].name}
            </p>);
    });
}

}
renderForm(){
    
    return (

<div >

<div style={backGroundStyle}>
<table id="divDetails" width="100%">

<tr>
         <td  width = "20%">
         <label >Invoice Amount :</label>
             </td>
         <td  width = "20%">
         <label>Payment Date :</label>
             </td>     
      <td width = "20%">
        </td>
        <td width = "20%">
        </td>
          <td width = "20%" textAlign="left">
          Invoice File:  {this.createList()}
          
              </td>
         </tr>
         <tr>
         <td textAlign="left">
         <input type = "text"  
                  onChange = {(event) => this.handleInvoiceAmountSelect(event)}/>
                 
           
             </td>
         <td >
         <input type="date" id="datepicker" 
                 onChange = {(event) => this.handleSelect(event)}/>
                 
             </td>
      
      <td width="20%">
      </td>
      <td width = "20%">
        </td>
      
     <td textAlign="right">
     <button style={buttonStyle}
            onClick={(event) => this.addRecipient(event)}>Add Recipient</button>
                  
          </td>
          
         </tr>
     </table>
</div> 

<table id="divDetails" style={{display:this.state.finalComponent ? 'block' : 'none' }}>
  <tr>
      <td>
      Name :
          </td>
          <td>
          {this.props.name} {this.props.surname}
              </td>
 </tr>

 <tr>
      <td>
      Address :
          </td>
          <td>
          {this.props.address} 
              </td>
 </tr>


 <tr>
      <td>
      Payment Target  :
          </td>
          <td>
          {this.props.paymentDate} 
              </td>
 </tr>


 <tr>
      <td>
      Invoice Ammount :
          </td>
          <td>
          {this.props.invoiceAmount} 
              </td>
 </tr>

</table>
    
<div>

<Modal style={{width : '40%', height : '30%'}}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
 <h2 ref={subtitle => this.subtitle = subtitle}>Add Recipient</h2>
        
          <div>Add Recipient</div>
          <form style={{width : '40%', height : '30%'}}  action="#" onSubmit={(event)=>this.saveDetails(event)}>
<table>
         <tr>
         <td>
          <label>Name :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.name} />
        </td>
        </tr>
        <tr>
         <td>
          <label>Surname :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.surname} />
        </td>
        </tr>
        <tr>
         <td>
          <label>Address :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.address} />
        </td>
        </tr>
  
        <tr>
         <td>
          <label>Phone :</label>
          </td>
           <td>
           <input type = "number"  maxLength="10" value={this.state.phone} />
        </td>
        </tr>
<tr>
    <td>
    <input type="submit" value="Ok" />
        </td>
        <td>
        <button onClick={(event) => this.closeModal(event)}>close</button>
            </td>
    </tr>

</table>
   
    </form>
</Modal>

</div>
<div width="100%" >


      
<div  style={{ paddingTop :  '15px' }} >
    </div>
     <div style={backGroundStyle}  >
              <table width="100%"> 
                  <tr height="10%">
                      </tr>

<tr>
<div style={{display:this.state.finalComponent ? 'block' : 'none' }}>
        
        <table  style ={{backgroundColor : 'BlueViolet', width : '100%'}}>
            <tr>
             
                <td>
                <label>Additional Files : </label>
                 </td>
                <td>
                <label>Description : </label>
                </td>
        <td>
            </td>
            <td>
                
            <button >Add</button>   
                </td>
                </tr>
                <tr>
                <td>
                <label> sometimepass.png</label>
                 </td>
                <td>
               <textarea></textarea> 
                </td>
        <td>
            </td>
            <td>
                
            <button >Remove</button>   
                </td>
                    </tr>
            </table>
        
               
                
          
        
        
                <button >Remove</button>
        
                </div>
        
    </tr>
                      <tr height="40%">
                      <Dropzone     
                 style={{
                     width: '100%',
                     height: '100px',
                     borderWidth: '2px',
                     backgroundColor: 'Aquamarine',
                     borderStyle: 'dashed',
                     borderRadius: '5px'
                     
                   }}

                 onDrop={(files) => this.onDrop(files)}>
                     <h1 style={{textAlign: 'center',fontStyle : 'bold italic', fontFamily : 'Times New Roman'  }}>Drag Additional Files...</h1>
                 </Dropzone>
                      </tr>
                      <tr height="10%" style={{textAlign:'right' }}>
                      <button style={buttonStyle} >Proceed</button>
                      </tr>
                  </table>
                
                 </div>
        </div>


        <div>
       
     </div>
</div>

   
    );
}


renderFinalForm(){
    
    return (

<div >

<div style={backGroundStyle}>
<table id="divDetails" width="100%" style={{display:this.state.secondPage ? 'block' : 'none' }}>

<tr>
         <td>
         <label >Invoice Amount :</label>
             </td>
         <td >
         <label>Payment Date :</label>
             </td>     
      <td width="63%">
        </td>
          
          <td style ={{fontStyle: 'bold italic'}}>
          Receipt Info
          </td>
         </tr>
         <tr>
         <td textAlign="left">
         <input type = "text"  
                  onChange = {(event) => this.handleInvoiceAmountSelect(event)}/>
                 
           
             </td>
         <td >
         <input type="date" id="datepicker" 
                 onChange = {(event) => this.handleSelect(event)}/>
                 
             </td>
      
      <td>
      </td>
          
     
     <td >
    <label style={{fontStyle:'bold italic'}}> Full name:  </label> {this.props.name} {this.props.surname}
        
          </td>
          
         </tr>
         <tr>
             <td>
             Invoice File:   
                 </td>
                 <td textAlign="left">
                 {this.createList()} 
                     </td>
                     
                         <td>
                             </td>
                             <td >
                             Address: {this.props.address} 
     
                                 </td>
             </tr>
             <tr>
                 <td>
                     Additional Info
                  </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                <button style={buttonStyle}
            onClick={(event) => this.addRecipient(event)}>Add Recipient</button>
                </td>
                
                 </tr>
     </table>
</div> 


<div>

<Modal style={{width : '40%', height : '30%'}}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
 <h2 ref={subtitle => this.subtitle = subtitle}>Add Recipient</h2>
        
          <div>Add Recipient</div>
          <form style={{width : '40%', height : '30%'}}  action="#" onSubmit={(event)=>this.saveDetails(event)}>
<table>
         <tr>
         <td>
          <label>Name :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.name} />
        </td>
        </tr>
        <tr>
         <td>
          <label>Surname :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.surname} />
        </td>
        </tr>
        <tr>
         <td>
          <label>Address :</label>
          </td>
           <td>
           <input type = "text"  value={this.state.address} />
        </td>
        </tr>
  
        <tr>
         <td>
          <label>Phone :</label>
          </td>
           <td>
           <input type = "number"  maxLength="10" value={this.state.phone} />
        </td>
        </tr>
<tr>
    <td>
    <input type="submit" value="Ok" />
        </td>
        <td>
        <button onClick={(event) => this.closeModal(event)}>close</button>
            </td>
    </tr>

</table>
   
    </form>
</Modal>

</div>
<div width="100%" >


      
<div  style={{ paddingTop :  '15px' }} >
    </div>
     <div style={backGroundStyle}  >
              <table width="100%"> 
                  <tr height="10%">
                      </tr>

<tr>
<div>
        
        <table  style ={{backgroundColor : 'BlueViolet', width : '100%'}}>
            <tr>
             
                <td>
                <label>Additional Files : </label>
                 </td>
                <td>
                <label>Description : </label>
                </td>
        <td>
            </td>
            <td>
                
            <button >Add</button>   
                </td>
                </tr>
                <tr>
                <td>
                <label> sometimepass.png</label>
                 </td>
                <td>
               <textarea></textarea> 
                </td>
        <td>
            </td>
            <td>
                
            <button >Remove</button>   
                </td>
                    </tr>
            </table>
        
               
                
          
        
        
                <button >Remove</button>
        
                </div>
        
    </tr>
                      <tr height="40%">
                      <Dropzone     
                 style={{
                     width: '100%',
                     height: '100px',
                     borderWidth: '2px',
                     backgroundColor: 'Aquamarine',
                     borderStyle: 'dashed',
                     borderRadius: '5px'
                     
                   }}

                 onDrop={(files) => this.onDrop(files)}>
                     <h1 style={{textAlign: 'center',fontStyle : 'bold italic', fontFamily : 'Times New Roman'  }}>Drag Additional Files...</h1>
                 </Dropzone>
                      </tr>
                      <tr height="10%" style={{textAlign:'right' }}>
                      <button style={buttonStyle} >Proceed</button>
                      </tr>
                  </table>
                
                 </div>
        </div>


        <div>
       
     </div>
</div>

   
    );
}



renderFileUpload(){
    return (
        <div>
           <div  style={{
                    
                    width:'800px',
                     margin:'0 auto' ,
                    
                  }}>

                <div>
                    <p style={{display:this.state.showErrorMessage   ? 'block' : 'none' }}> <label style={{color:'red'}} > Please select file to upload first..</label> </p>
                     <button 
                      style={{
                    
                        width: '550px',
                        height: '100px',
                        color : 'rgb(66, 185, 70)',
                        backgroundColor : '#FFC107',
                        borderWidth: '2px',
                        borderColor: 'rgb(100, 102, 102)',
                        borderStyle: 'dashed',
                        borderRadius: '5px',
                        padding: '20px',
                      }}
                     onClick={(event) => this.handleClick(event)}>Upload Invoice</button>
                  </div >
                  <br />
                <div> 

                    
                </div>
                 <Dropzone     
                 style={{
                    width: '500px',
                    height: '100px',
                   textAlign: 'center',
                   backgroundColor : 'cream',
                     borderWidth: '2px',
                     borderColor: 'rgb(100, 102, 102)',
                     borderStyle: 'dashed',
                     textShadow : '1px 1px 2px grey',
                     borderRadius: '5px',
                     padding: '20px'
                   }}

                 onDrop={(files) => this.onDrop(files)}>
                     <div>Drag your files here...</div>
                 </Dropzone>

                
             </div>
               
        </div>
       
     );

}
    


render() {
     
    if(this.state.finalComponent){
       return this.renderFinalForm();
    }
      else  if(this.state.editing){
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
            saveInvoiceAmount: saveInvoiceAmount,
            savePaymentDate : savePaymentDate
            },dispatch)
            
        }
    }


export default connect(mapStateToProps , mapDispatchToProps)(UploadInvoice);

