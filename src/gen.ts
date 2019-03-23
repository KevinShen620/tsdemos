function* numbers() {
    yield 1;
    yield 2;

    return 'numbers';
}
function* delegate() {
    var str = yield* numbers();
    console.log(str);

    return 'delegate';
}
var iterator = delegate();
/**
  * 第一次输出结果
  * { value: 1, done: false }
  */
console.log("1:", iterator.next()) // 第一次输出

console.log("2:", iterator.next()) // 第二次输出

console.log("3:", iterator.next()) // 第三次输出

// console.log("4:", iterator.next()) // 第四次输出
