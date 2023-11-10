const turn_On_Kth_Bit = (n, k) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    if ((n & 1) != 0) {
        return 1;
    }
    n = n ^ (n & (n - 1));
    pos = 0;
    while (n != 0) {
        n = n >> 1;
        pos++;
    }

    return pos;
}

n = 34
console.log(n + " in binary is " + n.toString(2))
position = turn_On_Kth_Bit(n);
console.log("Position of the rightmost set bit of the said number: " + position)

n = 104
console.log(n + " in binary is " + n.toString(2))
position = turn_On_Kth_Bit(n);
console.log("Position of the rightmost set bit of the said number: " + position)
