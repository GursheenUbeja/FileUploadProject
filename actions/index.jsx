  const selectUser_NOtWorking = (user) =>{
     console.log(user.first);
     return({
         type : "USER_SELECTED",
         payload :user
     })
}



 export  function selectUser(user){
    console.log(user.first);
    return({
        type : "USER_SELECTED",
        payload :user
    })
}

export  default function uploadFile(file){
    console.log(file);
    return({
        type : "UPLOAD_FILE",
        payload :file
    })
}




