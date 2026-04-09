
var prefixSum = function(nums){
    let prefix = [];
    prefix[0] = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        prefix[i] = prefix[i-1] + nums[i];
    }
    return prefix;     
};


console.log(prefixSum([2, 4, 6, 8])); //// [2, 6, 12, 20]