const non_repeated_num = (nums) => {
    r = 0
    for (let i = 0; i <= nums.length; i++) {
        r = r ^ nums[i]
    }
    return r
}
nums = [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7]
console.log(non_repeated_num(nums))
