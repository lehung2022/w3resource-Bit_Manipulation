const log_Two = (n) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    let result = 0
    while (n >> 1) {
        n >>= 1
        result++
    }
    return result
}
console.log(log_Two(1))
console.log(log_Two(2))
console.log(log_Two(4))
console.log(log_Two(32))
