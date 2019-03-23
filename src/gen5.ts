function* gfirst() {
    let v = yield 1
    console.log(v)
}
let gfvalue = gfirst();
let v = gfvalue.next(2)

console.log(v.value)