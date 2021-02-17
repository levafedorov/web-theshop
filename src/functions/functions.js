
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


//params = obj
//function gets object or nothing as props and returns urls for sort, renew or refresh of itemlist
//every time category changes amount of items goes to default 
//every time function invokes without props it increase amount of items on 9

//  export const getManager = (params) => {
//     let url = `https://fakestoreapi.com/products`
//     if(params !== undefined){
//         try{
//             let {category, sort} = params;
//             if(category !== getManager.category){
//                 getManager.amount = 9;
//                 getManager.category = category;
//             }
//             if(sort !== getManager.sort){
//                 getManager.sort = sort; 
//             }
//             if(category !== null){
//                 url += `/category/${category}`
//             }
           
//              url += `?sort=${sort}` 
           
           
//             getManager.url = url;

//         }catch(err){
//             return err
//         }
//     }else{
//         getManager.amount += 9; 
//     }
//        url = getManager.url;  
//        url += `&limit=${getManager.amount}`
 
//      return url
// }


// getManager.amount = 0;
// getManager.category = "";
// getManager.sort = "";
// getManager.url = `https://fakestoreapi.com/products?sort=null`;
// ////