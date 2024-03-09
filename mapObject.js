export function mapObject(obj,cb){
    let newObj = {};
    for(let key in obj)
        newObj[key] =cb(String(obj[key]));
    return newObj
}