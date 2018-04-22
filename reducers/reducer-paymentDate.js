
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_PAYMENT_DATE':
        return action.payload;
        break;
    }
       
    
    return state;
    }