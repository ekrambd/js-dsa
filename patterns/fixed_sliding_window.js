let maxSumSubarray = function(arr, k) {
    let left = 0;
    let windowSum = 0;
    let max = 0;
    for(let right = 0; right < arr.length; right++)
    {
        windowSum+=arr[right];
        if(right-left+1 > k){
            windowSum-=arr[left];
            left++;
        }
        if(right-left+1 == k){
            max = Math.max(max,windowSum);
        }
    }
    return max;             
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); //9