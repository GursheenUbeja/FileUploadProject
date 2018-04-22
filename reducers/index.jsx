import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import activeUser from './reducer-activeUser';
import FileReducer from './reducer-file';
import NameReducer from './reducer-name';
import SurnameReducer from './reducer-surname';
import AddressReducer from './reducer-address';
import PhoneReducer from './reducer-phone';
import PaymentDateReducer from './reducer-paymentDate';
import InvoiceAmountReducer from './reducer-invoiceAmount';


export const allReducers = combineReducers({

    users : UserReducer,
    activeUser : activeUser,
    fileName : FileReducer,
    name : NameReducer,
    surname : SurnameReducer,
    address : AddressReducer,
    phone : PhoneReducer,
    paymentDate : PaymentDateReducer,
    invoiceAmount: InvoiceAmountReducer
});

export default allReducers;