
export const cutString = (str, length) => {
    if(typeof str !== "string" || Number.isNaN(length)) 
            return console.log("wrong type");
    if(str.length < length) return str;
    let strArr = str.split(" ");
    strArr.splice(length);
    return strArr.join(" ") + "..."; 
}

