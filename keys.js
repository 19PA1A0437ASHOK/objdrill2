export function keys(obj){
    let arr = [];
    for(let key in obj)
        arr.push(String(key));
    return arr
}