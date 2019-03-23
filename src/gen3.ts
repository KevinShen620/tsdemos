import * as Q from "q";

function masync() {
    let defer = Q.defer<string>();
    let p: any = (resolve: any, reject: any) => {
        setTimeout(() => {
            resolve("Hello");
        }, 3000);
    }
    return new Promise(p);
    // setTimeout(() => {
    //     console.log("finish timeout")
    //     defer.resolve("hello");
    // }, 3000);
    // return defer.promise;
}

function* asyncgen() {
    let yvalue = yield masync();
    console.log(yvalue);
    console.log("finish");
}
let g = asyncgen();
console.log(g.next());
console.log(g.next());

