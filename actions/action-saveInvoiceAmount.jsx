export  default function saveInvoiceAmount(amount){
    console.log(amount);
    return({
        type : "SAVE_INVOICE_AMOUNT",
        payload :amount
    })
}
