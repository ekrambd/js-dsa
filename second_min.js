var secondMin = function(nums){
    if (nums.length < 2) {
        return null;
    }
    let min = Infinity;
    let secondMin = Infinity;
    for(let i = 0; i < nums.length; i++)
    {
        let num = nums[i];
        if(num < min){
            secondMin = min;
            min = num;
        }else if(num < secondMin && num !== min){
            secondMin = num;
        }
    }
    return secondMin === Infinity ? null : secondMin;   
};

console.log(secondMin([10, 5, 20, 8, 20])); //8