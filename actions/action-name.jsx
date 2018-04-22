export  default function saveName(name){
    console.log(name);
    return({
        type : "SAVE_NAME",
        payload :name
    })
}
