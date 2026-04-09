//128. Longest Consecutive Sequence

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let arr = Array.from(nums);
    let longest = 0;
    for(let i = 0; i < arr.length; i++)
    {
        let num = arr[i];
        if(!set.has(num-1)){
            let current = 1;
            let count = 1;
            while(set.has(current+1)){
                current++;
                count++;
            }
            longest = Math.max(longest,current);
        }
    }
    return longest;           
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,0,1,2]));