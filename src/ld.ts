import * as _ from "lodash";

let o1 = {
    name: "kevin"
}
let o2 = {
    male: true
}
let o3 = _.assign(o1, o2);
console.log(o1);
console.log(o2);
console.log(o3);
