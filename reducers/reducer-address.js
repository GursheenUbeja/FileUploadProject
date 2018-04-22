
export default function(state=null,action) {

    switch(action.type){
        case 'SAVE_ADDRESS':
        return action.payload;
        break;
    }
       
    
    return state;
    }