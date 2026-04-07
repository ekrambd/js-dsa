//15. Three sum
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum3 = nums[i] + nums[left] + nums[right];

            if (sum3 > 0) {
                right--;
            } else if (sum3 < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // skip duplicates for left and right
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));