const turn_On_Kth_Bit = (n, k) => {
    if (typeof n != "number") {
        return 'It must be number!'
    }
    return (n & (1 << (k - 1))) != 0;
}
n = 33
k = 1
console.log(n + " in binary is " + n.toString(2))
console.log("k = " + k);
result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n)
n = 33
k = 2
console.log(n + " in binary is " + n.toString(2))
console.log("k = " + k);
result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n)
