/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
    let tab = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3==0 && i % 5==0)
            tab.push('FizzBuzz')
        else if (i % 3==0)
            tab.push('Fizz')
        else if (i % 5==0)
            tab.push('Buzz')
        else tab.push (`${i}`)
;

    }



    return tab ;
};

/*
hey */
console.log("hey");
////////////////////// function two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }

        numIndices.set(nums[i], i);
    }

    return null;
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));  // Outputs: [0, 1]
