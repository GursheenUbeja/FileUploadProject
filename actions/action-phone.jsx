export  default function savePhone(phone){
    console.log(phone);
    return({
        type : "SAVE_PHONE",
        payload :phone
    })
}
