//643. Maximum Average Subarray I

var findMaxAverage = function(nums, k) {
	let left = 0;
    let windowSum = 0;
    let max = 0;

    for(let right = 0; right < nums.length; right++)
    {
        windowSum+=nums[right];
        if(right-left+1 > k){
            windowSum-=nums[left];
            left++;
        }
        if(right-left+1 == k){
            max = Math.max(max,windowSum);
        }
    }
    return max/k;    
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));