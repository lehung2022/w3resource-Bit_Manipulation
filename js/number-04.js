const next_Power_Of_Two = (num) => {
    if (typeof num != "number") {
        return 'It must be number!'
    }

    if (num > 0 && (num & (num - 1)) === 0)
        return num
    let result = 1

    while (num > 0) {
        result = result << 1
        num = num >> 1
    }
    return result
}
console.log(next_Power_Of_Two(1))
console.log(next_Power_Of_Two(4))
console.log(next_Power_Of_Two(9))
console.log(next_Power_Of_Two("15"))
