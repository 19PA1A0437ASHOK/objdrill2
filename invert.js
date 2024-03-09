export function invert(obj){
    let newObj = {};
    for(let key in obj)
        newObj[String(obj[key])] =String(key);
    return newObj
}