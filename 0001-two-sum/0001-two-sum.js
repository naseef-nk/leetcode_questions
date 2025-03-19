/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num = new Map();
    for (let i = 0; i < nums.length; i++) {
        let array = target - nums[i]; 
        if (num.has(array)) {
            return [num.get(array), i]; 
        }
        num.set(nums[i], i); 
    }
};
