
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_SURNAME':
        return action.payload;
        break;
    }
       
    
    return state;
    }