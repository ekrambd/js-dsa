//34. Find First and Last Position of Element in Sorted Array

var searchRange = function(nums, target) {
    let indexes = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            indexes.push(i);
        }
    }
    if(!indexes.length) return [-1,-1];
    return [indexes[0], indexes[indexes.length-1]];
};

console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([5,7,7,8,8,10],6));
console.log(searchRange([],0));