const swap_bits = (n, pos1, pos2) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    if ((((n & (1 << pos1)) >> pos1) ^ ((n & (1 << pos2)) >> pos2)) == 1) {
        n ^= (1 << pos1);
        n ^= (1 << pos2);
    }
    return n;
}
console.log(swap_bits(245, 1, 4))
console.log(swap_bits(137, 6, 7))
console.log(swap_bits("16"))
