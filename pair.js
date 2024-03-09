export function pair(obj){
    let arr = [];
    for(let key in obj)
        arr.push([String(key),obj[key]]);
    return arr
}