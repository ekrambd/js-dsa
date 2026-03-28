//88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0,m);
    let arr2 = arr1.concat(nums2);
    let arr = arr1.concat(arr2);
    for(let i = 0; i < arr.length; i++)
    {
        nums1[i] = arr[i];
    }
    return arr;        
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));