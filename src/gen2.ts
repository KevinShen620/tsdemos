function* gen2() {
    yield 1;
    yield 2;
}

function* mygen() {
    yield* gen2();
    yield 3;
    console.log("after delge");
}
let g = mygen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());