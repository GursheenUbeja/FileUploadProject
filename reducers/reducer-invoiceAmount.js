
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_INVOICE_AMOUNT':
        return action.payload;
        break;
    }
       
    
    return state;
    }