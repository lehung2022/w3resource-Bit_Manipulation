const check_even_odd = (n) => {
    if (typeof n != "number") {
        return 'Parameter value must be number!'
    }
    if ((n ^ 1) == (n + 1))//even
        return n + ' is an even number.'
    else //odd
        return n + ' is an odd number.'
}
console.log(check_even_odd(1))
console.log(check_even_odd(4))
console.log(check_even_odd(9))
console.log(check_even_odd("15"))
