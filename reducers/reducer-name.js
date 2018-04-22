
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_NAME':
        return action.payload;
        break;
    }
       
    
    return state;
    }