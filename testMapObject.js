import {mapObject} from './mapObject.js';
import {testObject} from './index.js';
function cb(k){
  return k+1;
}
const res = mapObject(testObject,cb);
console.log(res);