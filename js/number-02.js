const swap = (x, y) => {
    x = x ^ y
    y = x ^ y
    x = x ^ y
    return { a: x, b: y }
}
x = 12
y = 15
console.log("Before swap: x = " + x + " and y = " + y)
const { a, b } = swap(x, y)
console.log("After swap: x = " + a + " and y = " + b)
