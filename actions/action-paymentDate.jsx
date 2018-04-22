export  default function savePaymentDate(date){
    console.log(date);
    return({
        type : "SAVE_PAYMENT_DATE",
        payload :date
    })
}
