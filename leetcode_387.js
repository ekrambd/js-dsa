//387. First Unique Character in a String

var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++)
    {
        let count = map.get(s[i]);
        if(count == null){
            map.set(s[i],1)
        }else{
            map.set(s[i],count+1);
        }
    }
    for(let i = 0; i < s.length; i++)
    {
        let count = map.get(s[i]);
        if(count == 1){
            return s.indexOf(s[i]);
        }
    }
    return -1;    
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));