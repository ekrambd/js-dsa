//11. Container With Most Water

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let area = 0;
    while(left < right){
        if(height[left] <= height[right]){
            area = height[left] * (right-left);
            left+=1;
        }else{
            area = height[right] * (right-left);
            right-=1;
        }
        max = Math.max(max,area);
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));