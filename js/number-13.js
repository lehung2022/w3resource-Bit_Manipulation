const parity_even_odd = (n) => {
    parity = false
    temp = n
    while (n != 0) {
        if ((n & 1) !== 0) {
            parity = !parity
        }
        n = n >> 1
    }
    if (parity)
        return "Parity of " + temp + " is odd."
    else
        return "Parity of " + temp + " is even."
}
n = 34
console.log(n + " in binary is " + n.toString(2))
console.log(parity_even_odd(n))
n = 104
console.log(n + " in binary is " + n.toString(2))
console.log(parity_even_odd(n))
