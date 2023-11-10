const turn_On_Kth_Bit = (n, k) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    return n | (1 << (k - 1));
}
n = 33
k = 3
console.log(n + " in binary is " + n.toString(2))
console.log("Turning k'th bit on," + " k = " + k);
result_n = turn_On_Kth_Bit(n, k);
console.log(result_n + " in binary is " + result_n.toString(2))

n = 101
k = 5
console.log(n + " in binary is " + n.toString(2))
console.log("Turning k'th bit on," + " k = " + k);
result_n = turn_On_Kth_Bit(n, k);
console.log(result_n + " in binary is " + result_n.toString(2))
