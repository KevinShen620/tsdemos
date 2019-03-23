import * as Q from "q";
import * as _ from "lodash";
function asyncAdd(i: number, plus: number): Q.Promise<number> {
    let defer = Q.defer<number>();
    setTimeout(() => {
        defer.resolve(i + plus);
    }, 3000);
    return defer.promise;
}


function handleGen(g: Generator, nextValue?: any) {
    let r = g.next(nextValue);
    if (r.done) {
        return;
    }
    let v = r.value;
    if (v && v.then && _.isFunction(v.then)) {
        v.then((nvalue: any) => handleGen(g, nvalue));
    } else {
        handleGen(g, v);
    }
}
function co(genFactory: () => Generator) {
    let thisGen = genFactory();
    handleGen(thisGen);
}

co(function* g() {
    let total = yield asyncAdd(5, 6);
    console.log(total);
});
