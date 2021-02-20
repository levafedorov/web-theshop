
export const cutString = (str, length) => {
    if(typeof str !== "string" || Number.isNaN(length)) 
            return console.log("cutString", "wrong types");
    if(str.length < length) return str;
    let strArr = str.split(" ");
    strArr.splice(length);
    return strArr.join(" ") + "..."; 
}


export const numberInput = (str) => {
    if(typeof str !== "string" && typeof str !== "number") 
          return console.log("wrong type");
    str = str.toString();      
    let output;      
    if(+str >= 0 && +str <= 100000){
         output = str;
        if(output.length > 1 && output[0] === "0"){
            output =  [...output];
            output.shift();     
            output = output.join("");
        }
             return output;
     }
}


export const formatCheck = (str, pattern) => {
    str = str.trim();
    const isValid = new RegExp(pattern, "g").test(str);
    return isValid === true ? str : new Error("Wrong format");
}

