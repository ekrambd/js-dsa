//268. Missing Number

var missingNumber = function(nums) {
    let actualSum = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++)
    {
        actualSum+=nums[i];
    }
    for(let i = 0; i <= nums.length; i++)
    {
        sum+=i;
    }
    let result = sum - actualSum;
    return result;             
};

console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));