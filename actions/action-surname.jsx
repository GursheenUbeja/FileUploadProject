export  default function savesSurname(surname){
    console.log(surname);
    return({
        type : "SAVE_SURNAME",
        payload :surname
    })
}
