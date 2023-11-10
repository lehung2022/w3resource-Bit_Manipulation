const Power_of_four = (n) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    return n != 0 && (n & (n - 1)) == 0 && (n & 0xAAAAAAAA) == 0;
}
console.log(Power_of_four(256))
console.log(Power_of_four(4))
console.log(Power_of_four(2))
console.log(Power_of_four("16"))
