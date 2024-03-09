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
/////////////////////////////////////////////////////////////

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let estvrai = true;
    let estfaux = false;
    
    if (x > 10) {


        let ch = x.toString();
        let tab = ch.split('');
        let tabrev = tab.reverse('');

        if (tab.join('') == tabrev.join('') == true)
        {
            rt = estvrai;
        }
        else {
        rt = estfaux;

    }

}

    else {
            rt = estfaux;
        }
return (rt);
};
///////////////// 20. Valid Parentheses (NOT YET done) 
//// there is a problem of "Time Limit Exceeded"
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let i = 0;
    let boo = false;

    while (s[i] !== s[i + 1]) {
        let j = 0;
        
        do {

        if ((s[i] === '(' ) && (s[i + 1] === ')')) {
            boo = true;
            i++;
            break;
        } else if ((s[i] === '[') && (s[i + 1] === ']')) {
            boo = true;
            i++;
            break;
        } else if ((s[i] === '{') && (s[i + 1] === '}')) {
            boo = true;
            i++;
            break;
        } else {
            boo = false;
            break;
        }
        
    } 
    while (boo === false);
        
    }

    return boo;
};
