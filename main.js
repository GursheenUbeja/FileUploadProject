import React from 'react';
import ReactDOM from 'react-dom';
import UploadInvoice from './UploadInvoice.jsx';
import {createStore} from 'redux';
import allReducers from './reducers/index.jsx'
import {Provider} from 'react-redux';
import Modal from 'react-modal';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
<UploadInvoice />
</Provider>
, document.getElementById('app'));