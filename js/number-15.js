const max_min = (x, y) => {
    max = x ^ ((x ^ y) & -((x < y) ? 1 : 0))
    min = y ^ ((x ^ y) & -((x < y) ? 1 : 0));
    return { a: max, b: min }
}
x = 12
y = 15
console.log("Two numbers: " + x + "," + y)
const { a, b } = max_min(x, y)
console.log("Maximum value: " + a + " and Minimum value: " + b)
// x = -7
// y = -5
// console.log("Two numbers: " + x + "," + y)
// const {a,b} = max_min(x, y)
// console.log("Maximum value: " +a + " and Minimum value: " +b) 
