//217. Contains Duplicate

var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i],i);
    }
    return false;    
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));