
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_PHONE':
        return action.payload;
        break;
    }
       
    
    return state;
    }