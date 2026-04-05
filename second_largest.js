var secondLargest = function(nums){
    if (nums.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if(num > largest) {
            secondLargest = largest;
            largest = num;
        } else if(num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
};

// পরীক্ষা
console.log(secondLargest([10, 5, 20, 8, 20]));   // Output: 10
console.log(secondLargest([-10, -5, -20]));       // Output: -10