//238. Product of Array Except Self

var productExceptSelf = function(nums) {
    let ans = [];
    let prefix = 1;
    for(let i = 0; i < nums.length; i++)
    {
        ans.push(prefix);
        prefix*=nums[i];
    }
    let suffix = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        ans[i]*=suffix;
        suffix*=nums[i];
    }
    return ans;     
};

console.log(productExceptSelf([1,2,3,4]));
//console.log(productExceptSelf([-1,1,0,-3,3]));