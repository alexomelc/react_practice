https://leetcode.com/discuss/general-discussion/1868912/My-Leetcode-Solutions-All-In-One
https://frontendmasters.com/courses/algorithms/
--------------------------------------------------------------------------
<b>LeetCode Questions:</b>
Two Sum: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,7,11,15], target = 9, Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++){
        for(var j=1; j<nums.length; j++){
            if(nums[i]+nums[j]==target){
                return [i,j] //[nums.indexOf(nums[i]),nums.indexOf(nums[j])]
            }
        }
    }    
};
------------------------------------------------------------------------------
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map.hasOwnProperty(diff)){ //checking the new diff value is already present or not
           return [map[diff], i]; //[value, index]
		       break;
        }
        map[nums[i]] = i; //console.log(map) //we storing the exact value not diff
    }    
    return result;
};
console.log(twoSum([2,7,11,15], target = 9))
=========================================================================================================================================================================
Palindrome:
var isPalindrome = function(x) {
   if(x<0) return false;
   if(x.toString()===x.toString().split('').reverse().join('')) return true;
   return false;  
}
-------------------------------------------------------------------------------
var isPalindrome = function(x) {
   let len = x.length;
   if(x<0) return false;
    for (i=0; i<len/2;i++)
    {       
       if (x[i]!==x[len-1-i]) return false;  
    }
    return true;  
}
===========================================================================================================================================================================
Longest Common Prefix:
var longestCommonPrefix = function(strs) {
let ans = ""; var strs= strs.sort();
  for (i in strs[0]) { //i means 0,1,2
    if (!strs.every((el) => el[i] === strs[0][i])) { break; } 
      //every function return true/false usually //el representig each character of the items of 
      //an array which we are compairing with f,l,....
    ans += strs[0][i];
  }
  return ans;
};
--------------------------------------------------------------------------------
var longestCommonPrefix = function(strs) {
var arr = strs.sort()
  var i=0;
  while(arr[0].length>0 && arr[0].charAt(i)===arr[arr.length-1].charAt(i)){
    i++;
  }
  console.log(arr[0].substring(0,i)) 
  return arr[0].substring(0,i)
};
------------------------------------------------------------------------------
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let r = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return r;
    }
    r += strs[0][i];
  }
  return r;
};
========================================================================================================================================================================
Valid Paranthesis :
var isValid = function(s) {
    let map ={
        "(":")",
        "{":"}",
        "[":"]"
    }
    let arr = []; //its example of stack i.e, 
    for (let ch of s){
        if(map[ch]){ //checking if inside in map object
            arr.push(map[ch]);
        }
        else if(arr.length>0 && arr[arr.length-1]===ch){ //checking length>0 otherwise give undefined
            arr.pop();
        }
        else {
            return false;
        }
    }
   return arr.length ===0 ? true: false;
};
--------------------------------------------------------------
const isValid = (s) => {
  const stack = [];
  for (const c of s) {
    if (c === '{' || c === '[' || c === '(') stack.push(c);
    else {
      const p = stack.pop(); // No need to check for empty before popping (returns undefined)
      if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
    }
  }
  return stack.length === 0; //true
};
=======================================================================================================================================================================
Contain duplicate: 
var containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size // As Set only contains non-duplicate values so new Set(nums) will remove all duplicates element then you can 
    //check if the lenght of the array is same as set if same means no duplicates element otherwise duplicate is there
};
---------------------------------------------------------------
var containsDuplicate = function(nums) {
    return nums.length > new Set(nums).size;
};
=========================================================================================================================================================================
Remove Duplicates from Sorted Array:
var removeDuplicates = function(nums) {
    let prev = null;
    const k = nums.length;
    for (let i = 0; i < k; i++) {
        if (prev === nums[i]) { //for duplicacy won't work
            continue;
        }
        prev = nums[i];
        nums.push(nums[i]); //[1,1,2,1,2]
    }
    nums.splice(0, k); //index, no. of elemnets from that index to delete the exact array
};
=========================================================================================================================================================================
Fibonacci Number:
const fib = N => {
    return (N < 2) 
        ? N 
        : fib(N-2) + fib(N-1);
};
------------------------------------------------------
const fib = n => {
    const memo = {};
    for (let i = 0; i <= n; i++)
    {
        if (i < 2)   memo[i] = i;
        else memo[i] = memo[i-2] + memo[i-1];
    }
    return memo[n];
}
------------------------------------------------------
const fib = n => {
    let arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    
    return arr[n];
};
--------------------------------------------------------
function fibbo(num){
let arr = [0,1];
  for(let i=0; i< num; i++){
      arr<2 
      ? arr 
      : arr.push(arr[i]+arr[i+1])
  }
return arr
}
console.log(fibbo(5)) 
========================================================================================================================================================================
 Search Insert Position:
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        if(target === nums[i] || target < nums[i]) { //  if (nums[i] >= target){
            return i
        }
    }
    
    return nums.length
};
---------------------------------------------------------------
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start<=end) {
        const mid = Math.floor((start + end)/2);
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }   
    }
    return start;
};
console.log(searchInsert([1,2,4,5],3))
============================================================================================================================================================================
Roman To Integer:
var romanToInt = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let num = 0;   
    for(let i = 0; i < s.length; i++) {
        const curr = map[s[i]], next = map[s[i+1]];
        if(curr < next) num -= curr;
        else num += curr;
    }
    return num;    
};
console.log(romanToInt("LVIII"))
========================================================================================================================================================================
Valid Anagram:
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
};
-------------------------------------------------------------------------
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let c of s) {
    if (map[c] == null) map[c] = 0;
    map[c]++;
  }

  for (let c of t) {
    if (map[c] > 0) map[c]--;
    else return false;
  }

  return true;
}
console.log(isAnagram("aman", "aamn"))
=======================================================================================================================================================================
Length of Last Word:-
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};
--------------------------------------------
var lengthOfLastWord = function(s) {
   return s.trim().split(" ").pop().length;
};
------------------------------------------
var lengthOfLastWord = function(s) {
   return s.trim().split(' ').at(-1).length;
};
----------------------------------------------
var lengthOfLastWord = function(s) {
    let len = 0;
    let hasStarted = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') hasStarted = true;
        if (hasStarted) {
            if (s[i] === ' ') break;
            len++;
        }
    }
    return len;
};
============================================================================================================================================================================
Majority Element:
var majorityElement = function(nums) {
    let map = {}
    for(let item of nums){
        if(!map[item]) {
            map[item] = 1;
        } else {
            map[item]++;
        }
        if (map[item] >= nums.length/2) return item
    }
};
========================================================================================================================================================================
Missing Number:
var missingNumber = function(nums) {
    nums.sort((a,b) => a - b ) 
    let count = 0
    for(let i = 0; i <= nums.length; i++) { // o (n)
        if(nums[i] == count) {
           count++
        } else {
            return count
        }
    }
};
------------------------------------------------
var missingNumber = function(nums) {
   nums.sort(function(a,b){return (a-b); });
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i){
            return i;
        }
    }
    return nums.length    
};
-----------------------------------------------
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    if (nums[0] !== 0) return 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]+1 !== nums[i+1]) {
            return i+1;
        }
    }
};
==============================================================================================================================================================================
Reverse Vowels of a String:
var reverseVowels = function(s) {
    const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    const arr = s.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (VOWELS[arr[i]] && VOWELS[arr[j]]) { //if both present in VOWELS
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (VOWELS[arr[i]]) { //if left side present in VOWELS then need to find right hand side so that's why j--
            j--;
        } else { //if right side present in VOWELS
            i++;
        }
    }
    return arr.join('');
};
----------------------------------------------------------------------------
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    let arr = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']
    
    while(left < right){
        if(vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) // if both present in vowels
            {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                ++left;
                --right;
            }
        if(vowels.indexOf(arr[left]) == -1){ //if left not present
            ++left
        }
        if(vowels.indexOf(arr[right]) == -1){ //if right not prsent
            --right
        }
    }
    return arr.join("")
};
------------------------------------------------------------------------------------
const reverseVowels = (s) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');
    
    let l = 0, r = s.length - 1;
    
    while(l < r){
        if(vowels.has(s[l]) && vowels.has(s[r])){
            swap(s, l, r);
            l++, r--;
        }else if(!vowels.has(s[l])){
            l++;
        }else if(!vowels.has(s[r])){
            r--;
        }
    }
    
    return s.join('');
};

const swap = (arr, l, r) => {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
--------------------------------------------------------------------------
function swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// reverse vowel function
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split('');
    let start = 0;
    let end = s.length-1;
    while(start < end) {
        if(vowels.includes(s[start]) && vowels.includes(s[end])) {
            swap(s, start, end);
            start++;
            end--;
        }else if(!vowels.includes(s[start])){
            start++;
        } else if(!vowels.includes(s[end])) {
            end--;
        }
    }
    
    return s.join('');
};
================================================================================================================================================================================
Single Number:
var singleNumber = function(nums) {
            nums.sort();
            for (var i = 0; i < nums.length; i += 2) {
                if (nums[i] != nums[i + 1]) {
                    return nums[i];
                }
            }
};
-----------------------------------------
var singleNumber = function(nums) {
    let hash = {}
    for(let val of nums){
        hash[val]?delete hash[val]:hash[val]=1;
    }
    return Object.keys(hash)[0]
};
-----------------------------------------------
var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
};
===============================================================================================================================================================================
Fizz Buzz:
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
};
---------------------------------------------------------
var fizzBuzz = function (n) {
return new Array(n).fill(0).map((item, num) => (++num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || '' + num);
};

->My first thought is to use the Array constructor. If you pass an integer as the only argument, an empty array with the given length is returned.
-> for loop that goes from 0 — 100
-> This code makes use of the ternary operator(condition ? value if true : value if false).
-> The condition that we’re testing is ++i%3. 
    If that is true, then '' will be returned. 
    If ++i%3 is false, then fizz will be returned.
-> For ++i%3, the increment operator is being used. Using the operator before the operand ++i will increment the operator i before returning it. This means that on our first pass through the loop, i will increase from 0 to 1.
-> For 1 % 3, utilizes the remainder operator. The remainder operator returns the remainder of one number divided another.
-> The remainder is 1 and thus our ternary condition is now simplified to 1.
-> 1 ends up not being a falsy value and therefor coerces into a truthy value.
========================================================================================================================================================================
Concatenation of Array:
var getConcatenation = function(nums) {
    return nums.concat(nums)
};
--------------------------------------------------
var getConcatenation = function(nums) {
   return [...nums, ...nums]
};
--------------------------------------------------
var getConcatenation = function(nums) {
    var n = nums.length;
   for(var i=0; i<n; i++){
       nums[i+n]=nums[i]
   }
    return nums
}
--------------------------------------------------
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(2*n);    
    for(let i = 0; i < n; i++) {
		// ans[i] == nums[i] and ans[i + n] == nums[i]
        ans[i] = ans[i + n]= nums[i];
    }
    return ans;
};
=========================================================================================================================================================================
Sort Array By Parity: 
var sortArrayByParity = function(nums) {
    var even =[], odd=[];
    for(var i=0; i<nums.length;i++){
        if(nums[i]%2 ===0){ even.push(nums[i]) }  
        else {odd.push(nums[i])}
    }
    return even.concat(odd);
};
-----------------------------------------------------------
var sortArrayByParity = function(nums) {
    var even = nums.filter(num => num%2 === 0)
    var odd = nums.filter(num => num%2 !==0)
    return even.concat(odd);
}
------------------------------------------------------------
var sortArrayByParity = function(nums) {
    var even =[], odd=[];
    nums.forEach((item)=>{
         item%2==0 ? even.push(item) : odd.push(item)
        
    })
    return even.concat(odd)
}
---------------------------------------------------------------
var sortArrayByParity = function(nums) {
    var even =[], odd=[];
    nums.forEach((item)=>{
         item%2==0 ? even.push(item) : odd.push(item)        
    })
    return [...even, ...odd]
}
-------------------------------------------------------------
var sortArrayByParity = function(nums) {
    var temp =[]
    nums.forEach((item)=>{
         item%2==0 ? temp.unshift(item) : temp.push(item)        
    })
    return temp
}
-----------------------------------------------------------
var sortArrayByParity = function(A) {
    return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};
-----------------------------------------------------------
var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length -1;

  while(i < j) {
    if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }

    if (A[i] % 2 !== 0) {
      j--;
    }

    if(A[i] % 2 === 0) {
      i++;
    }
  }

  return A;
};
=========================================================================================================================================================================
String Compression: 
/*var compress = function(chars) {
    var arr=[], count=1;
    //if(chars.length===1) return 1;
    for(var i=0; i< chars.length; i++){
        if(!arr.includes(chars[i])){arr.push(chars[i])}
        if(chars[i] != chars[i+1]){
            arr.push(count);
          count =1;
        }
        if(chars[i]==chars[i+1]){
            count++;
        }
    }
    return arr.length;
};
//console.log(compress( ["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
*/
------------------------------------------------------------------
var compress = function(chars) {
    var arr=[], count=1;
    if(chars.length===1) return 1;
    for(var i=0; i< chars.length; i++){
        if(!arr.includes(chars[i])){arr.push(chars[i])}
        if(chars[i] != chars[i+1]){
            arr.push(""+count);
          count =1;
        }
        if(chars[i]==chars[i+1]){
            count++;
        }
    }
    return arr.length;
};
console.log(compress( ["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
======================================================================================================================================================================================
Find All Numbers Disappeared in an Array:
var findDisappearedNumbers = function(nums) {
    var s = {};
    for (let i =1; i<= nums.length; i++) {
        s[i] = 1; //storing all the key and values(1) to the object till the length of an array
    }    
    nums.forEach(n=> {   delete s[n] })  //deleting if we have in nums
   return Object.keys(s) //getting from an object
}; console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
-------------------------------------------------------------------
To find unique values:
var kthDistinct = function(arr) {
  var unique = []
  arr.filter((item)=>{
    if(!unique.includes(item))
       {
         unique.push(item)
       }
    else {
        unique.splice(1,1)
    }
  })
 
  return unique
};
console.log(kthDistinct(["d","b","c","b","c","a"])) //[d,a]
=====================================================================================================================================================================
 Kth Distinct String in an Array: 
var kthDistinct = function(arr,k) {
  var unique = []
  arr.filter((item)=>{
    if(!unique.includes(item))
       {
         unique.push(item)
       }
    else {
        unique.splice(1,1)
    }
  })
 
  return unique[k-1] == undefined ? "" : unique[k-1]
   
};
//console.log(kthDistinct(["d","b","c","b","c","a"],2))*/
-------------------------------------------------------------------------------
var kthDistinct = function(arr, k) {
    let obj = {}
    let ans = []
    
    for (let item of arr) {
        obj[item] = obj[item] + 1 || 1
    } // arr.forEach(letter => map[letter] = map[letter] + 1 || 1)
    
    for (let item in obj) {
        if (obj[item] === 1) {
            ans.push(item)   
        }
    }
    
    return ans.length >= k ? ans[k-1] : ''
    
    
};
-------------------------------------------------------------------------------
const kthDistinct = (arr, k) => {
    const map = {}
    
    for (const word of arr) {
        if (!(word in map)) map[word] = 0
        
        map[word]++
    }

    const distinct = arr.filter(word => map[word] === 1)
    
    return distinct[k - 1] || ''
}
-------------------------------------------------------------------------------
const kthDistinct = (arr, k) => {
  const notDistinct = new Set(arr.filter((x, index, arr) => arr.indexOf(x) !== arr.lastIndexOf(x)));
  return arr.filter((x) => !notDistinct.has(x))[k - 1] ?? "";
};
-------------------------------------------------------------------------------
var kthDistinct = function(arr, k) {
    let freqs = {};
    for (let s of arr) freqs[s] = (freqs[s] || 0) + 1;
       
    return [...Object.keys(freqs)].filter(x => freqs[x] === 1)[k - 1] || "";
};
======================================================================================================================================================================
Merge Strings Alternately:
var mergeAlternately = function(word1, word2) {
    var merged = [];
    var w1 = word1.split("");
    var w2 = word2.split("");
    for(var i=0; i<word1.length || i< word2.length; i++){
        merged.push(word1[i])
        if( word2[i]){
            merged.push(word2[i])
        }
    }
    return merged.join("")
};
console.log(mergeAlternately("abc","pqr"))
============================================================================
Divide a String Into Groups of Size k: 
var divideString = function(s, k, fill) {
    var result = []
    for(let i = 0;i<s.length;i+=k){
		const element = s.slice(i,i+k);
		if(element.length === k){
			result.push(element);
		}
		else {
			result.push(element+ fill.repeat(k - element.length));
			
		}
	}
	return result;
};
--------------------------------------------------------
var divideString = function(s, k, fill) {
    const res = []; let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s[i];  
        if (str.length === k) {
            res.push(str);
            str = '';
        }
    }
    const n = str.length;   
    if (n > 0) {
        for (let i = 0; i < k - n; i++) {
            str += fill;
        }    
        res.push(str);
    }   
    return res;
};
console.log(divideString("abcdefghi", 3, "x"))
----------------------------------------------------------------
var divideString = function(s, k, fill) {
    let result = []    
    if(s.length % k !== 0) s = s.concat(fill.repeat(k - s.length % k))   
    for(let i = 0; i < s.length; i += k){
        result.push(s.slice(i,i+k))
    } 
    return result
};
------------------------------------------------------------------
const divideString = (s, k, fill) => {
  const result = []
  if (s.length % k) {
    s += fill.repeat(k - s.length % k)
  }
  for (let i = 0; i < s.length; i ++) {
    result.push(s.slice(i, i + k))
    i += k - 1
  }
  return result
}
=========================================================================================================================================================================
Plus One : 
var plusOne = function(digits) {
for(var i = digits.length - 1; i >= 0; i--){
     digits[i]++; 
    if(digits[i] > 9){
        digits[i] = 0;
    }else{
        return digits;
    }
}
digits.unshift(1);
return digits;
}; [1,2,3] //[1,2,4]
//First, I add 1 anyway. If there is a carry-over, the new digit will also add 1. If the current digit is less than 9 then return the array.
//Last, when running over for loop, I just put fill 1 in front of the array.
//the spread operator creates a copy while unshift manipulates the original array.
--------------------------------------------------------
var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i --){
    if(digits[i] === 9){
      digits[i] = 0;
    }
    else {
      digits[i] ++;
      return digits; //if less than 9
    }
  }
  return [1,...digits] //[1, ...digits] is the equivalent of digits.unshift(1) //Always run for more than 9
  //this is used for the case where the digits are [9,9] after the iteration has //been completed, we are left with [0,0] which is wrong but it's okay because at //this point what we do is only increasing the number by one. So if this happens, //how do we return the right answer? We return the array with appending 1 in the //front and spread the digits to make a new array of [1,0,0]  
};
--------------------------------------------------
var plusOne = function(digits) {
    if (!digits || digits.length == 0) return [];
    for(let i = digits.length - 1; i >= 0; i--){
        if (digits[i] < 9){ //998->999  989->990
            digits[i]++;
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    //only special case 999-> 1000
    let thousand = new Array(digits.length).fill(0);
    thousand.unshift(1); //add 1 in head of arr
    return thousand;
};
----------------------------------------------------------
var plusOne = function(digits) {
    let end = digits.length - 1;
    for(let i = end; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i] = digits[i] + 1;
            break;
        } else {
            digits[i] = 0;
        }
    }

    if(digits[0] === 0) digits.unshift(1);
    return digits;
};
==========================================================================================================================================================================
Find First Palindromic String in the Array:
var firstPalindrome = function(words) {
    for(var i =0; i<words.length; i++){
        if(words[i] === words[i].split('').reverse().join('')){
           return words[i];
           break;
        }
    }
    return ""
};
----------------------------------------------------------------------
var firstPalindrome = function(words) {
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word;
    }
    
    return '';
}; 
----------------------------------------------------------------------
var firstPalindrome = function(words) {
    const isPalindrome = (w) => {
        if(w === w.split('').reverse().join('')) return true
        return false;
    }
    
    let result = words.find(word => isPalindrome(word));
    if(result) return result;
    return '';
};
----------------------------------------------------------------------
var firstPalindrome = function(words) {    
    let result = words.find(w =>w === w.split('').reverse().join('') ?  true :   false)
    return result ? result : '';
};
----------------------------------------------------------------------
const firstPalindrome = (words) => words.find((x) => x === [...x].reverse().join("")) ?? "";
----------------------------------------------------------------------
var firstPalindrome = function(words) {
    const palindrome = words.filter(item => item == item.split("").reverse().join(""));
    if (palindrome.length > 0){
      return palindrome[0];
    }
    return ""
}; 
----------------------------------------------------------------------
var firstPalindrome = function(words) {
  let reverseArr = []
   for(let i=0; i<words.length; i++){
       reverseArr.push(words[i].split('').reverse().join(''));
       if(reverseArr[i] == words[i]){
           return reverseArr[i]
       }
   }
   return ''
};
//console.log(firstPalindrome(["abc","car","ada","racecar","cool"])) //"ada"
=============================================================================================================================================================================
Count of Smaller Numbers After Self
var countSmaller = function(nums) {
    let newNums = [...nums];
    newNums.sort(function(i1, i2){return i1 - i2});    
    let res = [];
    for(let i = 0; i < nums.length; ++i){
        let seq = newNums.indexOf(nums[i]);
        res.push(seq);
        newNums.splice(seq, 1);
    }   
    return res; 
};
//console.log(countSmaller([5,2,6,1])) //[2,1,1,0]
----------------------------------------------------------
var countSmaller = function(nums) {
    if (nums.length === 0) return nums
    const retVal = []
    for (let i = 0; i < nums.length; i++) { // 1
        for (let j = 0; j < i; j++) { // 0
            if (nums[j] > nums[i]) { // 0 1
                retVal[j] += 1
            }
        }
        retVal.push(0)
    }
    return retVal;
};
===========================================================================================================================================================================
Add Strings:
var addStrings = function(num1, num2) {
    if(num1.length === num2.length){
    var result = (parseInt(num1)+parseInt(num2)).toString();}
    return result;
};
//console.log(addStrings("11", "123")) //"134"
----------------------------------------------------------------------------------
var addStrings = function(num1, num2) {
    var cast1 = num1 * 1
    var cast2 = num2 * 1
    var answer = cast1 + cast2;  
    return ''+answer;
};
----------------------------------------------------------------------------------
var addStrings = function(num1, num2) {
  const sum = BigInt(num1) + BigInt(num2);
  return sum.toString();
};
----------------------------------------------------------------------------------
var addStrings = function(num1, num2) {
    let len = num1.length>num2.length ? num1.length:num2.length;
    let l1 = num1.length-1, l2 = num2.length-1;
    let carry = 0, out = "", sum = 0;
    for(let i = 0; i<len; i++){
        sum = parseInt(num1[l1-i] || 0) + parseInt(num2[l2-i] || 0) + carry;
        out = sum%10 + out;
        carry = Math.floor(sum/10);
    }
    if(carry>0) out = carry+out;
    return out;
};
------------------------------------------------------------------------------------
var addStrings = function(num1, num2) {
    let result = "";
    let carry = 0;
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    while(p1 >= 0 || p2 >= 0) {
        const x1 = p1 >= 0 ? (num1.charCodeAt(p1) - '0'.charCodeAt(0)) : 0;
        const x2 = p2 >= 0 ? (num2.charCodeAt(p2) - '0'.charCodeAt(0)) : 0;
        const value = (x1 + x2 + carry) % 10;
        carry = Math.floor((x1 + x2 + carry) / 10);
        result = value + result;   
        p1--;
        p2--;
    }
    if (!!carry) { result = carry + result}    
    return result;
};
==========================================================================================================================================================================
Find First and Last Position of Element in Sorted Array
function searchRange(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}
---------------------------------------------------------------
const searchRange = function(nums, target) {
	let index = nums.indexOf(target)

	if (index > -1) {
		let start = index
		let end = index
		while(nums[index] === nums[index + 1]) {
			end++
			index++
		}

		return [start, end]
	}

	return [-1, -1]
};
------------------------------------------------------------------
function binarySearch(nums, target, findMaxIndex) {
    let index = -1, start = 0, end = nums.length - 1;
    
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            index = mid;
            if (findMaxIndex) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    
    return index;
}
var searchRange = function(nums, target) {
    const result = [-1, -1];
    
    result[0] = binarySearch(nums, target, false);
    if (result[0] > -1) {
        result[1] = binarySearch(nums, target, true);
    }
    
    return result;
};
---------------------------------------------------
var searchRange = function(nums, target) {
    var result = []
    for(var i=0; i<nums.length; i++){
        if(nums.length ==1 && nums[i]==target){
           return [0,0];
        }
        if(nums[i]===target){
         result.push(i)   
        }
    }
    return result.length ? result : [-1,-1];
};
//console.log(searchRange([5,7,7,8,8,10], 8)) //not worked for all test cases
=======================================================================================================================================================================
 Find the Difference:
 /**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return [...t].sort().find((char, i) => char !== [...s].sort()[i])
}; //s="abc", t="abcd"
/*var findTheDifference = function(s, t) {
    var sChars = s.split('').sort();
    var tChars = t.split('').sort();
    var i;
    for(i = 0; i < sChars.length; i++) {
        if(tChars[i] !== sChars[i]) {
            return tChars[i];
        }
    }
    return tChars[i];
};*/
/*var findTheDifference = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '')
    }
    return t;
};*/
/*var findTheDifference = function(s, t) {
    for (let letter of s)
        t = t.replace(letter, '');
    return t;
};*/
/*var findTheDifference = function(s, t) {
  const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
};*/


/*var findTheDifference = function(s, t) {
  var s = s.split("").sort((a,b)=> a-b).join(""); 
  var t = t.split("").sort((a,b)=> a-b).join("");
 // console.log(s,t)
  for(var i =0; i< t.length || s.length; i++){
      if(s[i] != t[i]){
          return t[i]
      }
  }
};
console.log(findTheDifference( "abcd", "abcde"))*/
====================================================================
String Matching in an Array:
var stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length)
    const result = []
    
    for(let i=0; i<words.length; i++) {
        const currentWord = words[i]
        
        for(let j=i+1; j<words.length; j++) {
            if(words[j].includes(currentWord)) {
                result.push(currentWord)
                break
            }
        }
    }
    
    return result
};
/*var stringMatching = function(words) {
    let arr = []
    for(let i=0; i<words.length; i++){
       for(let j=0; j<words.length; j++){
        if(words[i] != words[j] && words[i].includes(words[j])){
            arr.push(words[j])
        }           
       }
    }
    let newArr = [...new Set(arr)]   // removed duplicate elements
    return newArr
};
/*var stringMatching = function(words) {
    let str = '';
    words.sort((a, b) => a.length - b.length);
    let res = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (str.includes(words[i])) res.push(words[i]);
        else str += words[i];
    } 
    
    return res;
};
/*const stringMatching = words =>
  words.filter(n => words.some(h => h !== n && h.includes(n)));
/*var stringMatching = function(words) {
    let res = [];
    for (let word of words){
        if (words.filter(w => w.includes(word)).length > 1) res.push(word);
    }
    return res;
};*/

//consle.log(stringMatching(["mass","as","hero","superhero"]))
========================================================================================================================================================================
Reorganize String:
var reorganizeString1 = function(S) {
    let hash = {};
    for (let c of S) hash[c] = hash[c] + 1 || 1;

    let sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
    let res = [];
    let index = 0;

    for (let i = 0;i<sort.length;i++) {
        let occur = hash[sort[i]];
        if (occur > parseInt((S.length + 1)/2)) return "";
        for (let j = 0;j < occur;j++) {
            if (index >= S.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    } 
    return res.join('');
};
console.log(reorganizeString("aab")) //"aba"
======================================================================================================================================================================
Longest Substring Without Repeating Characters: 
We can use the Sliding Window technique for this question. Sliding Window is good for analysing subsets within a data structure, to see which subset is the best. 
There are two approaches; fixed sized and dynamic. This solution uses the dynamic approach where the window is not a fixed size and can grow and shrink.
Sliding Window uses two pointers to define the boundary of the subset (this is the window). In this example left and i are the left and right pointers, respectively.
To solve the problem of finding the longest unique substring we use Set to store the characters. Before adding to the Set we first check if it already exists. 
If it does exist, we remove all the characters in the Set from the left (using our left pointer) until the duplicate character has been removed.

const lengthOfLongestSubstring = s => {
 //sliding window approach
 if(!s){return 0}
 let start=0, end=0;
 const uniqueCharacter = new Set();
 let maxLength=0;
 while(end<s.length){
     if(!uniqueCharacter.has(s[end])){
         uniqueCharacter.add(s[end]);
         end++;
         //maxLength = Math.max(maxLength, uniqueCharacter.size)
         maxLength = Math.max(maxLength, end - start )
     }
     else{
         uniqueCharacter.delete(s[start]);
         start++;
     }
 }
 return maxLength;
}
---------------------------------------
USING MAP:
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};
---------------------------------------------------------------
using map:
const lengthOfLongestSubstring = (s) => {
    let tempMax = 0 
    let maxLen = 0;
    const map = new Map();     
    for(let i = 0; i < s.length; i++) { 
        const char = s[i];
        if (map.get(char) >= tempMax) { 
            tempMax = map.get(char) + 1; 
        }
        map.set(char, i); 
        maxLen = Math.max(maxLen, i - tempMax + 1) 
    }
    return maxLen
}
console.log(lengthOfLongestSubstring("abcabcbb"))

OR-----------------------------
const lengthOfLongestSubstring = (s) => {
    // reference to what is needed to update maxLen
    let tempMax = 0 
    // initalize at 0 
    let maxLen = 0;
    // use Map data structure due to ease of .get() and .set() methods 
    const map = new Map();   
  
    for(let i = 0; i < s.length; i++) { 
        const char = s[i]; 
      
        // check to see if character has been encountered before. if so, and the index was equal to or greater than the current tempMax, reset tempMax to index it was seen plus 1. 
        // important because if the index it was last seen is less than tempMax that means tempMax isn't incremented up, making it easier to use it to update our maxLen below
        // if it was encountered at a high index that means it will be harder to increase our maxLen since there is a repeat character pretty close to the current character
        // new characters don't result in tempMax being increased since the lookup returns undefined which will return false for the evaluation
        // this makes it easy for maxLen to be increased since that calculation looks at the index we are currently at which will always be pretty high since the loop always moves right
        if (map.get(char) >= tempMax) { 
            tempMax = map.get(char) + 1; 
        }

        // always update the index number we saw a character in the map 
        map.set(char, i); 
      
        // use tempMax to determine to update maxLen or not. adding 1 here offsets the addition of 1 when tempMax is recalculated
        // its used to determine if adding the current character is to our advantage or not as tempMax holds a reference to how far away our last repeat is
        // subtracting current index from how far away last repeat gives us that difference and the 1 says to update or not. note it has to be greater for it to be worth updating
        maxLen = Math.max(maxLen, i - tempMax + 1) 
    }

    return maxLen
}
=======================================================================================================================================================================

maxLength tracks the largest substring, after each iteration we set maxLength to itself or the size of the Set which ever is largest.
=======================================================================================================================================================================
Longest Palindromic Substring: 
var longestPalindrome = function(s) {
    let maxPal = '';
    
    for(let i = 0; i < s.length; i++) {
        bubble(i, i); // odd palindrome
        bubble(i, i+1); // even palindrome
    }
    
    function bubble(left, right) {

        while(left >= 0 && s[left] === s[right]) {
            left--;
            right++;
        }
        left++;
        right--;
        
        if(maxPal.length < right-left+1) {
            maxPal = s.slice(left, right+1)
        }
    }
    return maxPal;
};
---------------------------------------------------------------
var longestPalindrome = function(s) {
    let maxSub = '';
    
    const bubbleFromCenter = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left+1, right)
    }
    
    for(let i = 0; i < s.length; i++) {
        const sub1 = bubbleFromCenter(i, i);
        const sub2 = bubbleFromCenter(i, i+1);
        const sub = sub1.length > sub2.length ? sub1 : sub2
        if(sub.length > maxSub.length) {
            maxSub = sub
        }
    }
    return maxSub
};
-----------------------------------------------------
var longestPalindrome = function(s) {
    let wonder = "";
    if (s === null || s.length === 0) return wonder;
    for (let i = 0; i < s.length; i++) {
        let tmpOne = calc(s, i, i);
        let tmpTwo = calc(s, i, i + 1);
        wonder = tmpOne.length > wonder.length ? tmpOne : wonder;
        wonder = tmpTwo.length > wonder.length ? tmpTwo : wonder;
    }
    return wonder;
};
    const calc = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);  
};
---------------------------------------------------------------------
var longestPalindrome = function(s) {
    if(s.length<1 || s === null) return '';
    var longest = '';
    for(let i=0; i<s.length; i++){
        var oddCharacters = expandFromMid(s,i,i);
        var evenCharacters = expandFromMid(s,i-1, i);
        if(oddCharacters.length> longest.length){
            longest = oddCharacters
        }
        if(evenCharacters.length> longest.length){
            longest = evenCharacters
        }
    }
    return longest
};

const expandFromMid =(s, left, right)=>{
    var i=0;
    while(s[left-i] && s[left-i]===s[right+i]){
        i++;
    }
    i--;
   return s.slice(left-i, right+i+1)
}
//console.log(longestPalindrome("babad"))*/
=======================================================================================================================================================================
Valid Parentheses: 
var isValid = function(s) {
    if (s.length <=1) return false   
    let stack = []
    let hash = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }  
    
   /* for(let i = 0; i < s.length; i++){
        if (hash[s[i]]) stack.push(hash[s[i]]) //s[i] means { //hash[s[i]] means }
        else if (s[i] !== stack.pop()) return false
    }
    return stack.length===0 ? true : false;*/
 
 
    /*for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);    
    } else if (hash[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length ? false : true;*/


 /*for(const char of s) {
      if (char in hash) {
      stack.push(char);    
    } else if (hash[stack.pop()] !== char) {
      return false;
    }
  }
  return !stack.length */


  for (const c of s) {
    if (c === '{' || c === '[' || c === '(') stack.push(c);
    else {
      const p = stack.pop(); // No need to check for empty before popping (returns undefined)
      if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
    }
  }
  return stack.length === 0;


};
console.log(isValid("{}[]"))
============================================================================================================================================================================
Move Zeroes:
var moveZeroes = function(nums) {
 return  nums.sort((a,b)=> b-a)
};
console.log(moveZeroes([0,1,0,3,12])) //[12,3,1,0,0] //Don't prefer
------------------------------------------------
var moveZeroes = function(nums) {
 const nonEmpty =[], empty=[];
  for(var i=0; i< nums.length; i++){
    if(nums[i]!==0) nonEmpty.push(nums[i]);
    else empty.push(nums[i])
  }
 return nonEmpty.concat(empty); //[...nonEmpty, ...empty]
};
console.log(moveZeroes([0,1,0,3,12]))
-----------------------------------------------------
var moveZeroes = function(nums) {
  let j = 0  // nonzero count
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {	  
      [nums[j], nums[i]] = [nums[i], nums[j]] // swap elements
      j++
    }
  }
  return nums
};
console.log(moveZeroes([0,1,0,3,12]))
------------------------------------------------------
let moveZeroes = function(nums) {
        for(let i= nums.length-1; i>=0; i--){
            if(nums[i]===0){
                nums.push(0) //adding at last
                nums.splice(i,1) //removing that element
            }
        }
        return nums
    };
console.log(moveZeroes([10,1,0,3,12]))
---------------------------------------------------
const moveZeroes = function (numbers) {

   const nonZeroNumbers = numbers.filter(number => number !== 0);

   const amountOfZeros = numbers.length - nonZeroNumbers.length;

   nonZeroNumbers.push(...Array(amountOfZeros).fill(0))

   return nonZeroNumbers;

}
console.log(moveZeroes([0,1,0,3,12]))
====================================================================================================================================================================
Valid Palindrome:
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi,""); //m means	Multiline: Anchor meta characters work on each line.
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    console.log(s);
    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
------------------------------------------------------------
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    //[] means contain characters
    //^ means opposite
    // A-Za-z0-9 means All the characters in a-z, A-z, 0-9
    // g means global modifier 'g' to the regex to get all the matches
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))// true
---------------------------------------------------------------
var isPalindrome = function(s) {
   // \w means	Matches alphanumeric characters: [a-zA-Z0-9_] 
   // \W	Matches non-alphanumeric characters: [^\w]
    s = s.replace(/[\W_]+/g,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
  

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
------------------------------------------------------------------------
var isPalindrome = function(s) {
    // | means Alternation Matches either the characters before or the characters after the symbol.
    var strippedString = s.replace(/\W|_/g, '');
    var reversedString = strippedString.split('').reverse().join('');
    
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};
------------------------------------------------------------------------------
var isPalindrome = function(str) {
    let s = str.toLowerCase().split('')
    for(let i=0;i<s.length;i++){
        if((s[i].charCodeAt(0) < 97 || s[i].charCodeAt(0) > 122) && (s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 57)){
            s[i]=' '
        }
    }
    let newS = ''
    for(let i=0;i<s.length;i++){
        if(s[i] !== ' '){
            newS+=s[i]
        }
    }
    return newS === newS.split('').reverse().join('')
};
===============================================================================================================================================================================
Subsets:    //https://www.youtube.com/watch?v=4paR1cZx9Tg&t=650s
var subsets = function(nums) {
    let res = []
    let subsets = []
	
    const dfs = (i) => {
        if (i >= nums.length) {
           res.push(subsets.slice()) 
           return
        }
        
        //include
        subsets.push(nums[i])
        dfs(i + 1)        
        subsets.pop()
        
        //exclude
        dfs(i + 1)
    }
	
    dfs(0)
    return res
};
-------------------------------------------------------------------------------------------
var subsets = function(nums) {
    let res = [[]];
    for (const num of nums) {
        const newRes = [];
        for (const sol of res) {
           newRes.push([...sol, num])
        }
        res = [...res, ...newRes];
    }
    
    return res;
};
-------------------------------------------------------------------------------------------
const subsets = nums => {
    let res = [[]],
        curr;
    for(let num of nums) {
        curr = res.map(x => [...x, num]);
        res = [...res, ...curr]; //addition of 2 arrays i.e res with curr
    }
    return res;
};
-------------------------------------------------------------------------------------------
var subsets = function (nums) {
	let finalOutput = [];
	const helper = (currentIndex, set) => { //0, []
		if (currentIndex >= nums.length) {
			finalOutput.push(set);
			return; 
		}
		helper(currentIndex + 1, [...set, nums[currentIndex]]);
        helper(currentIndex + 1, set);
	};
	helper(0, []);
	return finalOutput;
};
-------------------------------------------------------------------------------------------
var subsets = function(nums) {
    return nums.reduce((sets, num) => sets.forEach(set => sets.push([...set, num])) || sets, [[]]);
};
-------------------------------------------------------------------------------------------
var subsets = a => a.reduce((s, l) => s.concat(s.map(t => t.concat(l))), [[]]);
-------------------------------------------------------------------------------------------
var subsets = function(nums) {
    let result = [];
    dfs([], 0);    
    function dfs(current, index){
        result.push(current);
        for(let i = index; i < nums.length; i++) {
            dfs(current.concat(nums[i]), i + 1);
        }
    }    
    return result;
};
-------------------------------------------------------------------------------------------
var subsets = function(nums) {
    var res = [[]]
    for (let i = 0; i < nums.length; i++) {
  		let length = res.length;
		for (let j = 0; j < length; j++) {
			res.push([...res[j],nums[i]])
        }  
   }
   return res
 };
//console.log(subsets([1,2,3]))
=======================================================================================================================================================================
Vowels of All Substrings:
var countVowels = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let total = 0;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word[i])) {
            count += i + 1;
        }
        total += count;
    }
    return total;
};
/*function countVowels(word) {
    let len = word.length;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (vowels.includes(word[i])) {
            count += len + (i * (len - i - 1));
        }
    }

    return count;
}*/
//console.log(countVowels("bac"))
/*var countVowels = function(word) {
  let total = 0;  
  for (let i = 0; i < word.length; i++) {
    if (['a','e','i','o','u'].includes(word[i])) {
      total += (i + 1) * (word.length - i);
    }
  }
  return total;
};*/
//console.log(countVowels("aba")) //6

/* The determinant factor of how many times a vowel will be used in the substring is depend on 2 things: the position of the vowel in the word and the remaining length of the word (from 0-indexed position of the vowel to end of the word)

  // So the formula is (0-indexed): `(i + 1) * (world.length - i)`, where `i` is the position of the vowel
  
  // Some example
  // Eg: 'abc'
  // - The letter 'a' in 0 place (0-indexed) is used 3 times, 'a', 'ab', 'abc'
  // Eg: 'bac'
  // - The letter 'a' in 1st place (0-indexed) is used 4 times, 'ba', 'bac', 'a', 'ac'
  // Eg: 'bca'
  // - The letter 'a' in 2nd place (0-indexed) is used 3 times, 'bca', 'ca', 'a'
 */
 ====================================================================================================================================================================
************************************ Permutations ***********************************
  
---------------------------------------- 1st Way ------------------------------------
var permute = function(nums) {
    let res = []
    function help(arr2){
        if (arr2.length==nums.length)
            return res.push(arr2)
        for(let e of nums)
            if (!arr2.includes(e))
                help([...arr2, e])
    }
    help([])
    return res
};
console.log(permute([1,2,3])) //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
---------------------------------------- 2nd Way ------------------------------------
const permute = nums => {
    const arr = [];
    _permute(arr, [], nums);
    return arr;
};
const _permute = (arr, tempArr, nums) => {
    if (tempArr.length === nums.length) {
        //copy
        arr.push(tempArr.slice());
    } else {
        nums.map(n => {
        if (tempArr.indexOf(n) === -1) {
          tempArr.push(n);
          _permute(arr, tempArr, nums);
          tempArr.pop();
        }
      });
    }
};
---------------------------------------- 3rd Way ------------------------------------
var permute = function(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}
function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        // make a shallow copy since otherwise we'd be append the same list over and over
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // skip used letters
        if (used[i]) continue;
        // add letter to permutation, mark letter as used
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}
---------------------------------------- 4th Way ------------------------------------
var permute = function(nums) {
    let res = [];
    dfs(nums, new Set(), res);
    return res;
}
function dfs(nums, curr, res) {
    if (curr.size == nums.length) {
        res.push(Array.from(curr));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (curr.has(nums[i])) continue;
        curr.add(nums[i]);
        dfs(nums, curr, res);
        curr.delete(nums[i]);
    }
}
---------------------------------------- 5th Way ------------------------------------
const permute = (nums) => {
  const res = [];
  const go = (cur, rest) => {
    if (rest.length === 0) {
      res.push(cur);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      // note if using array push and splice here, it will cause mutation
      go(
        [...cur, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)],
      );
    }
  };

  go([], nums);
  return res;
};
---------------------------------------- 6th Way ------------------------------------
var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if(remaining.length <= 0) results.push(current.slice());
    else {
      for(let i = 0; i < remaining.length; i++) { // Loop through remaining elements
        current.push(remaining[i]); // Insert the iTH element onto the end of current
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i+1))); 
        // Recurse with inserted element removed
        current.pop(); // Remove last inserted element for next iteration
      }
    }
  };

  permutations([], nums);
  return results;
};
---------------------------------------- 7th Way ------------------------------------
var permute = function(nums) {
    const result = [];    
    function traverse(nums, storeArr) {
        if(nums.length === 0) {
            result.push([...storeArr]);
            return ;
        }
        for(let num of nums) {
            storeArr.push(num);
            const value = nums.filter(item => item !== num);
            traverse(value, storeArr);
            storeArr.pop();
        }
    }    
    traverse([...nums], [])
    return result;
};
=========================================================================================================================================================================
Group Anagram: 
const groupAnagrams = strs => {
    const map = {};
    
    for (let str of strs) {
        const key = [...str].sort().join(''); //str.split('').sort().join('');

        if (!map[key]) { //creating a new key always for new
            map[key] = [];
        }

        map[key].push(str); //assgning values in the key
    }
    
    return Object.values(map);
}; 
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
-------------------------------------
var groupAnagrams = function(strs) {
    let map = {}
    
    for (let str of strs) {
        let key = [...str].sort()
        map[key] = map[key] ? [...map[key], str] : [str]
    }
    
    return Object.values(map)
};
--------------------------------------
  Time complexity: O(m * n) where m is the total number of strings and n is the average number of char in each string
  Space complexity: O(n)
*/
var groupAnagrams = function(strs) {
  let result = {};
  for (let str of strs) {
    const keys = new Array(26).fill(0);
    for (let char of str) {
      keys[char.charCodeAt(0) - 97] += 1; 
    }
    
    if (!result[keys]) result[keys] = [];
    result[keys].push(str);
  }
  return Object.values(result);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
======================================================================================================================================================================
 Remove All Adjacent Duplicates In String:
const removeDuplicates = s => {
  const stack = [];
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join('');
};
console.log(removeDuplicates("abbaca"))


Since we need to check and remove the previous char by the current char, so it let us think about the stack:

traverse the string s
for every char, we compare it with the top value in stack
if they are same, pop the top value
otherwise, push the current char into stack
finally, return the stack as a string
----------------------------------------------------------
var removeDuplicates = function(S) {
    let res = [];
    for(let i=0; i<S.length; i++){
        if(S[i] !== res[res.length-1]) {
            res.push(S[i]);
        } else {
            res.pop();
        }
    }
    return res.join("");
};
---------------------------------------------------------
var removeDuplicates = function(S) {
  let stack = [];
  stack.push(S[0]);
  for(let i=1; i<S.length; i++){
    if(S[i] != stack[stack.length - 1]){
        stack.push(S[i]);
    } else{
        stack.pop();
    }
  }
return stack.join("");
};
-----------------------------------------------------------
const removeDuplicates = (S) => S.match(/(.)\1/g) ? removeDuplicates(S.replace(/(.)\1/g, '')) : S;
==========================================================================================================================================================================
Reverse Words in a String
var reverseWords = function(s) {
  var arr = s.split(' ') , result = [];
  console.log("arr", arr)
  for(var i=arr.length; i>=0; i--){
     result.push(arr[i])
  }
  return result.filter(Boolean).join(" ");
};
//console.log(reverseWords("the sky is blue")) //"blue is sky the"
---------------------------------------------------------------------------------
const reverseWords = str => str.trim().split(/\s+/).reverse().join(' ');
---------------------------------------------------------------------------------
var reverseWords = function(str) {
    return str
            .split(' ')               //create an array of words separated based by spaces
            .filter(string => string) //remove empty strings to take care of extra whitespace
            .reverse()                //reverse the array of words
            .join(' ');               //join the words back together with spaces inbetween
};
---------------------------------------------------------------------------------
var reverseWords = function(s) {
    return s.split(' ').filter(word => word.length>0).reverse().join(' ')
};
---------------------------------------------------------------------------------
var reverseWords = function(s) {
    let words = s.split(" ").filter( x => x!='' );
    return words.reverse().join(' ');
};
==========================================================================================================================================================================
 Find Common Characters
 var commonChars = function(A) {
    const result = []
    const firstWordArr = [...A[0]]
    
    for(const letter of firstWordArr) {
        if(A.every(word => word.includes(letter))) { // // Every word in array has letter
            result.push(letter)
            A = A.map(word => word.replace(letter, ''))   // Remove the matched letter from the words
        }
    }    
    
    return result
};
console.log(commonChars(["cool","lock","cook"]))
-----------------------------------------------------------------------
var commonChars = function(A) {
    let common = A[0].split('').filter(char => {  //['c','o','o','k'] //c //o //o //k
        for (var i = 1; i < A.length; i++) { //iterate from index =1
            if (A[i].includes(char)) A[i] = A[i].replace(char, '');  
            else return false;
        }
        return true;
    })
	return common
};
//console.log(commonChars(["cool","lock","cook"]))
================================================================================================================================================================================
Remove All Occurrences of a Substring:
var removeOccurrences = function(s, part) {
    const len = part.length;
    while(s.indexOf(part) !== -1) {
        s = s.slice(0, s.indexOf(part)) + s.slice(s.indexOf(part) + len) 
        //first slice to take first part of the string
        //second slice to take last part of the string
    }
    return s;
};
-----------------------------------------------------------------------------
const removeOccurrences = (s, part) =>	s.includes(part) ? removeOccurrences(s.replace(part, ''), part) : s;
-----------------------------------------------------------------------------
var removeOccurrences = function(s, part) {
    while(s.includes(part)){
        s=s.replace(part,'');
    }
    return s;
};
=======================================================================================================================================================================
Sort Characters By Frequency:
var frequencySort = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]] += s[i] : map[s[i]] = s[i];
    }
    return Object.values(map).sort((a, b) => { return b.length - a.length }).join('');
};
//console.log(frequencySort("tree")) //"eert"
------------------------------------------------------------------
var frequencySort = function(s) {
    let map = {};
    for (var item of s){
        map[item] ? map[item] += [item] : map[item] = [item]
    }
    return Object.values(map).sort((a, b) => { return b.length - a.length }).join('');
};
console.log(frequencySort("tree"))
--------------------------------------------------------------------
var frequencySort = function(s) {
    let seen ={}; //{t: 1, r: 1, e: 2}
    for(let char of s){ // store characters Frequency of given string in map
        seen[char] ? seen[char]++ : seen[char]=1;
    }
    
    // sort characters according to characters Frequency in descending order
    let SortedCharactersArray = Object.keys(seen).sort((a,b)=>seen[b]-seen[a]); //[e,t,r]
    
    let result = ""
    // iterate through SortedCharactersArray and append character( character frequency )times to result  
    for(let char of SortedCharactersArray)
        result += char.repeat(seen[char]);
        //// repeat is a method where you input the number of occurrence. We just concatenate to result
    
    return result;
};
--------------------------------------------------------------------
var frequencySort = function(s) {
    return Object.values( s.split('').reduce((h,i) => {h[i] = (h[i]||'') + i; return h}, {}) ).sort((a,b) => b.length - a.length).join('')
};
=======================================================================================================================================================================
Split a String in Balanced Strings:
var balancedStringSplit = function(s) {
	let count = 0,
		balance = 0
	for (let i = 0; i < s.length; i ++) {
		if (s[i] === 'R') {
			balance ++
		} else {
			balance --
		}
		if (balance === 0) {
			count ++
		}
	}
	return count
};
console.log(balancedStringSplit("RLRRLLRLRL"))
-----------------------------------------------------
var balancedStringSplit = function(s) {
    let lcount = 0, rcount = 0;
    let count = 0;
    s.split('').forEach(val => {
        if(val==='R') rcount++;
        else if(val==='L') lcount++;
        if(lcount===rcount){
            count++;
            lcount = 0;
            rcount = 0;
        }
    });
    return count;    
};
------------------------------------------------------
var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;
    s.split('').forEach(val => {
        if(val==='R') balance++;
        else if(val==='L') balance--;
        if(balance===0){
            count++;
        }
    });
    return count; 
};
---------------------------------------------------------
var balancedStringSplit = (s, count=0) => (s.
  split('').
  filter(element => { 
      (element == 'R' ? count += 1 : count -= 1); 
      return count == 0 }).
  length)
=========================================================================================================================================================================
3Sum :
var threeSum = function(nums) {
    let resultArr = [];
    const sortedArr = nums.sort((a, b) => a - b);
    for (i = 0; i < sortedArr.length - 2; i++) {
      if (sortedArr[i] > 0) {
        break;
      }
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
        const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
          while(left < right && sortedArr[left] === sortedArr[left + 1]) {
            left++;
          }
          while(left < right && sortedArr[right] === sortedArr[right - 1]) {
            right--;
          }
          left++;
          right--;  
        }
      }
    }
    return resultArr;
};
/*-------------------------------------------------
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const r = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s < 0) left ++;
      else if (s > 0) right --;
      else {
        r.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left ++;
        while (left < right && nums[right] === nums[right - 1]) right --;
        left ++;
        right --;
      }
    }
  }
  
  return r;
};
---------------------------------------------------
var threeSum = function(nums) {
	nums.sort((a,b) => a-b)
	const result=[]

	if(nums.length < 3) return result

	for(let i=0; i< nums.length; i++){
		let left = i+1
		let right = nums.length-1
		if(i > 0 && nums[i] === nums[i-1]) continue
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]

			if(sum===0){
				let arr=[nums[i], nums[left], nums[right]]
				result.push(arr)
				left++
				while(nums[left] === nums[left-1] && left < right) left++
			}else if(sum > 0){
				right--
			}else{
				left++
			}
		}
	}

	return result
};
console.log(threeSum([-1,0,1,2,-1,-4]))
----------------------------------------------------
var threeSum = function(nums) {
  // First, let's sort the array. 
  // This gives us two benefits: 
  // 1. We can avoid duplicates, because skipping duplicate values in a sorted array is trivial (check if the prior value === current value)
  // 2. We can stop once we hit positive values, because no three positive values can be added to reach 0
  //
  // Finally, it's OK to sort, because we accept a quadratic runtime here,
  // and adding an O(logn) sort operation won't make that any worse
  nums.sort((a, b) => {
    return a - b
  })

  // With a sorted array, let's initialize a result array, which we'll use to hold our triplets
  const result = []

  // Now, loop through the sorted input array
  for (let i = 0; i < nums.length; i++) {

    // And if the number is greater than zero, 
    // that means the only have positive integers left in the sorted array,
    // and three positive integers will never equal 0,
    // so we're done with the input and can break.
    if (nums[i] > 0) {
      break;
    }

    // At each iteration, we want to make sure we skip duplicates,
    // so check that the prior number doesn't equal the current number.
    if (i > 0 && nums[i - 1] === nums[i]) {
      // If they're the same, skip this iteration
      continue;
    }

    // With the prior conditions satisfied, 
    // we can be certain we're looking at negative integers.
    // In which case, we want to find two integers further down the array, such that all three integers added together equals 0.
    //
    // Now we solve this with two pointers, which is how we would solve Two Sum II.
    // We use the sorted nature of the array to hone in on values that will equal zero.
    // 
    // Start the left pointer at the current index + 1, and the right pointer at the end of the array
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      // Calculate the sum
      const sum = nums[i] + nums[left] + nums[right]

      // Check if the sum is equal to 0
      // if so, push nums[i], nums[left], and nums[right] to our top level result array
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Then, increment the left pointer and the right pointer, 
        // to see if there are any additional triplets that satisfy the conditions.
        left++
        right--

        // Also make sure we increment the left pointer past any possible duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        // If the sum is less than zero, we want to see if we can increase it to hit zero. 
        // With a sorted input array, we can attempt this by incrementing the left pointer, 
        // to look at bigger numbers.
        left++
      } else {
        // Otherwise, sum is greater than zero, and we should try decreasing the sum, by decrementing the right pointer
        right--
      }
    }
  }

  return result
};*/
=====================================================================================================================================================================
Maximum Subarray : 
var maxSubArray = function(nums) {
	//Declare a variable for our current overall maximum sum
    let maxSum = nums[0];
	//Declare a temporary sum for comparison
    let tempSum = nums[0];
	//Iterate over nums starting at nums[1] since we set our initial sums to nums[0]
    for (let i = 1; i < nums.length; i++) {
		//The temporary sum is either the current number if the prior tempSum was negative for example
		//Or it is the sum of tempSum and the new sum if that figure is larger 
        tempSum = Math.max(nums[i], tempSum + nums[i]);
		//Every time we have a new tempSum we want to compare it to our running maxSum 
        maxSum = Math.max(tempSum, maxSum);
    };
	//return the max sum
  return maxSum;
};
----------------------------------------------------------
var maxSubArray = function(nums) {
    let max = -Infinity;
    let currentMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);               
    }
    
    return max;
};
------------------------------------------------------------
const maxSubArray = nums =>
  nums.reduce(
    ([localMax, globalMax], curr) => [
      Math.max(curr, localMax + curr),
      Math.max(curr, localMax + curr, globalMax),
    ],
    [-Infinity, -Infinity],
  )[1];
-------------------------------------------------------------
function maxSubArray(nums) {
    let subSum = nums[0]
    let max = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        // if the sum of the subarray is negative we're no longer interested and start summin again starting at the current value
        subSum = Math.max(subSum + nums[i], nums[i])

        // tracks the subarray with the highest sum found
        max = Math.max(subSum, max)
    }
    
    return max
};
-----------------------------------------------------------
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
};
---------------------------------------------------------------
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
=========================================================================================================================================================================
Longest Common Subsequence (LCS):
var longestCommonSubsequence = function(text1, text2) { //using DP
    let dp = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0))
    for (let i=0;i<text1.length; i++) {
        for (let j=0;j<text2.length; j++)
            dp[i+1][j+1] = text1[i] == text2[j]? dp[i][j]+1 : Math.max(dp[i][j+1],dp[i+1][j]);
    }
    return dp[text1.length][text2.length];
};
console.log(longestCommonSubsequence("abcde", "abc"))
-------------------------------------------------------------------------
var longestCommonSubsequence = function(text1, text2) { //using recursion
    const memo = new Map();
    return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;
    
    const key = index1 + '#' + index2;
    
    if (memo.has(key)) return memo.get(key);
    
    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {
        result = Math.max(recursion(text1, text2, index1, index2 - 1, memo), recursion(text1, text2, index1 - 1, index2, memo));
    }
    
    memo.set(key, result);
    return result;
}
------------------------------------------------------------------------
const lcs = (str1, str2, n, m, dp) => { //using recursion
    if (n==0 ||m==0) {
        return 0;
    }
    const key = n + ':' + m;
    if (dp.has(key)) {
        return dp.get(key);
    }
    if (str1[n-1] == str2[m-1]) {
        return 1+lcs(str1, str2, n-1,m-1, dp)
    }
    const lcsMax = Math.max(
        lcs(str1, str2, n-1, m, dp),
        lcs(str1, str2, n, m-1, dp)
    );
    dp.set(key, lcsMax);
    
    return dp.get(key);
    
}
var longestCommonSubsequence = function(text1, text2) {
    return lcs(text1,text2, text1.length, text2.length, new Map());
};
-------------------------------------------------------------------------
/*var longestCommonSubsequence = function(text1, text2) { //avoid to do this
    let count=0;
    var m = text1.split('');
    var n = text2.split('');
    for(var i=0; i< m.length && n.length<m.length; i++){
        for(var j=0; j< n.length ; j++){
            if(m[i]===n[j]){
                count++
            }
        }
    }
    return count
};*/

========================================================================================================================================================================
Generate Parentheses: 
var generateParenthesis = function(n) {
    let result = []

    backtracking('', n, n)

    function backtracking(temp, left, right) {
        if(left == 0 && right == 0) {
           result.push(temp)
        }
    
        if(left > 0) {
            backtracking(temp + '(', left-1, right)
        }
    
        if(right > left) {
            backtracking(temp + ')', left, right-1)
        }
    }
    return result
};
//console.log(generateParenthesis(3))
-----------------------------------------------------
var generateParenthesis = function(n) {
  var arr = [];
  compose(n, n, '');
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) return arr.push(str);
    if (left) compose(left - 1, right, str + '(');
    if (right > left) compose(left, right - 1, str + ')');
  }
};
input:3output:  ["((()))","(()())","(())()","()(())","()()()"]
-------------------------------------------------------------------------
var generateParenthesis = function(n) {
    //Create a list that will store the solution
    const sol = [];
    //Recursively call backtracking function
    generator(0, 0, "", sol, n);
    return sol;
};

function generator(op, cl, str, sol, n) {
        //Check the base case.
        //If number of opening and closing parentheses are equal to n..
        if(op === n && cl === n) {
            //add the string(str) to the list
            sol.push(str);
            return;
        }
        //if no. of opening parentheses(op) is less than n...
        if(op < n) {
            //add '(' to the current string and increment the count of opening parenthesis(op)
            generator(op + 1, cl, str + '(', sol, n);
        }
        //if no. of closing parentheses is less than open parentheses...
        if(cl < n && op > cl) {
            //add ')' to the current string and increment the count of closing parentheses(cl)
            generator(op, cl + 1, str + ')', sol, n);
        }
};
==========================================================================================================================================================================
Intersection of Two Arrays:
var intersection = function(nums1, nums2) {
  var result = nums1.filter((item)=>{
      return nums2.includes(item)
  })    
  return [...new Set(result)];
};
//console.log(intersection([1,2,2,1],[2,2]))
----------------------------------------------------
function intersection(nums1 , nums2){
    let setNum1 = new Set(nums1);
    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}
----------------------------------------------------
var intersection = function(nums1, nums2) {
    let st1 = new Set(nums1);
    let st2 = new Set(nums2);

    let ans = [];
    
    st1.forEach(c => {
        if (st2.has(c)) {
            ans.push(c);
        }
    })
    
    return ans;
};
----------------------------------------------------
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  return [...set1].filter(n => set2.has(n))
};
----------------------------------------------------
var intersection = function(N1, N2) {
    return [...new Set(N1.filter(n => N2.indexOf(n) > -1))];
};
==========================================================================================================================================================================

/*var mySqrt = function(x) {
    let sqrt = 1;
    if(x===0){
        return 0;
    }
    for(let i=1; i*i<=x; i++){
      sqrt = i;
    }
    return sqrt;
};
-----------------------------------------
var mySqrt = function(x) {
    let val = 0;
    while((val * val) <= x) val++;
    return val - 1;
};
-----------------------------------------
var mySqrt = function(x) {
    let l = 0;
    let r = 94906265; // Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        const m2 = m * m;
        if (m2 === x) {
            return m;
        } else if (x < m2) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return r;
};
-----------------------------------------
Sqrt(x):- Input: 4 then output is 2
  var mySqrt = function(x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1; ////Remember that the square root of each X must happen within [1, x/2 + 1]
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2); 

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
============================================================================================================================================================================
Remove Linked List Elements: 
var removeElements = function(head, val) {
        if (head == null) return null;
        head.next = removeElements(head.next, val);
        return head.val == val ? head.next : head;
};
//For someone who finds it difficult to understand:

When the input node is an empty node, then there is nothing to delete, so we just return a null node back. (That's the first line)

When the head of the input node is the target we want to delete, we just return head.next instead of head to skip it. (That's the third line), else we will return head.

We apply the same thing to every other node until it reaches null. (That's the second line).
-------------------------------------------------
//https://www.youtube.com/watch?v=hSY49AuyQ2A
let removeElements = function(head, val) {
    let dummy=new ListNode(-1);
    dummy.next=head;
   let prev = dummy;
   let curr = head;
    while(curr){
        if(curr.val===val){
           prev.next = curr.next;
           curr = curr.next;          
        }
        else{
           prev =curr;
           curr = curr.next;           
        }
    }
    return dummy.next;  
};
console.log(removeElements([1,2,6,3,4,5,6],6)) //[1,2,3,4,5]
=========================================================================================================================================================================
Middle of the Linked List
/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
console.log(middleNode([1,2,3,4,5]) //[3,4,5]
---------------------------------------------------------------------------------
var middleNode = function (head) {
    count = 0
    let copy = head
    while (head) {
        count += 1
        head = head.next
    }
    target = Math.floor(count / 2)
    count = 0
    while (count < target) {
        copy = copy.next
        count += 1
    }
    return copy
};
--------------------------------------------------------------------------
var middleNode = function(head) {
    let hi = head, cnt = 1;
    while (hi.next) {
        hi = hi.next;
        cnt++;
    }
    cnt = parseInt(cnt / 2);
    while (cnt--) {
        head = head.next;
    }
    return head;
};
-----------------------------------------------------------------------
var middleNode = function(head) {
    // Variables
    fast = head;
    slow = head;
    
    // While we have not reached the end of the linked list, have one pointer 'fast' move twice as fast as the slow pointer 'slow'. Once fast has reached the end of the list, 'slow' must therefore be in the middle of the list.
    while (fast?.next)
    {
        fast = fast.next.next;
        slow = slow.next;
    };
    
    //
    return slow;
};
------------------------------------------------------------------
var middleNode = function(head) {
    const values = [];
    
    let node = head;
    
    while (node) {
        values.push(node);
        node = node.next;
    }
    
    const i = Math.floor(values.length / 2);

    return values[i] || null;
};
==================================================================================================================================================================
Sort Array by Increasing Frequency:
var frequencySort = function(nums) {
  const hash={}
    for(let item of nums){
      hash[item] 
          ?hash[item]++
          :hash[item]=1
    }
 return nums.sort((a,b)=>hash[a]-hash[b]||b-a)   
    //or// return nums.sort((a, b) => map[a] === map[b] ? (b - a) : (map[a] - map[b]));
};
//console.log(frequencySort([1,1,2,2,2,3]))
-------------------------------------------------------
var frequencySort = function(nums) {
    let map = {}

    for(let num of nums) {
        if(!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }

    let sortedArray = Object.entries(map).sort((a,b) => {
       if(a[1] == b[1]) { //1==2
           return b[0] - a[0]
       } else {
           return a[1] - b[1]
       }
    })
    console.log(sortedArray) //[["3", 1], ["1", 2], ["2", 3]]

    let result = []

    for(let arr of sortedArray) {
        while(arr[1] > 0) {
            result.push(+arr[0])
            arr[1]--
        }
    }

    return result;
};
console.log(frequencySort([1,1,2,2,2,3]))
--------------------------------------------------------
var frequencySort = function(nums) {
    let map = new Map()
    for (let n of nums) {
        map.set(n, (map.get(n) || 0)+1)
    }
    console.log(map)
    return nums.sort((a,b) => {
        if (map.get(a) === map.get(b)) return b - a
        return map.get(a) - map.get(b)
    })
};
console.log(frequencySort([1,1,2,2,2,3]))
=================================================================================================================================================================
Reverse Linked List: 
/*var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next] //one ack
    }
    return prev
}

prev   --->       curr  ---->     curr.next
   |-----------------------<----------------|
   
-------------------------------------------------

let reverseList = function(head) {
    let prev = null, next = null;
    while (head) {
        next = head.next
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
----------------------------------------------------

var reverseList = function(head) {
    prev= null;
    while(head){
        [head.next, prev, head] = [prev, head, head.next]
    }
    
    return prev
};
----------------------------------------------------
*/
// Recursive solution
var reverseList = function(head, previous = null) {
    if (head === null) return previous;
    let next = head.next;
    head.next = previous;
    return reverseList(next, head);
};
======================================================================================================================================================================
Climbing Stairs:
/*var climbStairs = function(n) {
    let a = 1, b = 2, next;
    
    for(let i = 3; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return n === 1 ? a : b;
};
-----------------------------------------
let climbStairs = function(n) {
    let arr=[];
    arr[1]=1;
    arr[2]=2;
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n]; //the number of ways to reach stair n.
};
--------------------------------------
var climbStairs = function(n) {
    let memo = new Map();   
    let cs = (n) => {
        if(!memo.has(n)) {
            let res = (n < 2) ? 1 : cs(n-2) + cs(n-1);
            memo.set(n,res);      
        }
        return memo.get(n);
    }
    return cs(n)
};
--------------------------------------------
climbStairs = n =>
    Array(n - 1)
	    .fill(0) // Because the reduce function ignores undefined values.
        .reduce(([a, b]) => [b, a + b], [1, 1])
        .pop()
---------------------------------------------
*/
function climbStairs(n) {
    let cache = {};
    
    function helper(n) {
	   // base case
        if (n <=3 ) return n; 
		
		// place value in cache if not there
        if (cache[n] === undefined) {
            cache[n] = helper(n-1) + helper(n-2)
        }
		// always return the cached value to minimize duplicate computation
        return cache[n];
    }
    return helper(n);
};
===================================================================================================================================================================
Palindrome Linked List: Last way of the solution is best
/*var isPalindrome = function(head) {
    let node = head;
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }

    let reversedArr = arr.reverse();
    let index = 0;
    for (let i = reversedArr.length - 1; i >= 0; i--) {
        if (reversedArr[i] !== arr[index]) return false;
        index++;
    }
    
    return true 
};
------------------------------------------------------------
var isPalindrome = function(head) {
    let straight = '';
    let reversed = '';
    while (head) {
        straight = straight + head.val;
        reversed = head.val + reversed;    
        head = head.next;
    };
    return straight === reversed;
};
------------------------------------------------------------
var isPalindrome = function(head) {
    let arr=[];
    while (head){
        arr.push(head.val);
        head=head.next;
        }
    return arr.slice().reverse().join()==arr.join() ? true : false;
};
-------------------------------------------------------------
var isPalindrome = function(head) {
    let node = head
    let arr = []
    
    while(node){
        arr.push(node.val)
        node = node.next
    }
    
    return arr.join('') === arr.reverse().join('')
};
-----------------------------------------------------------
var isPalindrome = function(head) {
    const arr = [];
    while(head && head.val !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.every((e, i) => e === arr[arr.length - i - 1]);
};
--------------------------------------------------------------
var isPalindrome = function(head) {
    let arr=[]
    while(head !=null){
        arr.push(head.val)
        head=head.next
    }
    for(let i=0;i<arr.length/2;i++){
        
        if(arr[i]!==arr[arr.length-1-i] ){
            return false
        }
    }
    return true
    // return  arr.join('')===arr.reverse().join('')
};
----------------------------------------------------------
var isPalindrome = function(head) {
    if(head === null) return true
	
    let node = head
    const arr = []
    
    while(node) {
        arr.push(node.val);
        node = node.next;
        
    }
    
    let low = 0;
    let high = arr.length - 1;
	
    while(low < high) {
        if(arr[low] === arr[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true
};
------------------------------------------------------------
*/
//https://www.youtube.com/watch?v=LBD8rIjVxZI
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  // Set slow at the head of the second half
  while (fast) {
    fast = fast.next ? fast.next.next : fast.next;
    slow = slow.next;
  }

  // Reverse the second half and returning prev
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the two halves in sequence if prev exist
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
}
console.log(isPalindrome([1,2,2,1]))
====================================================================================================================================================================
Remove Duplicates from Sorted List
/*var deleteDuplicates = function(head) {
    var current = head;
    
    while(current) {
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};
----------------------------------------------
var deleteDuplicates = function(head) {
  if (!head) return null;
  // Init prev as 1st node, next as 2nd node
  let prev = head, next = head.next;

  // Iterate until next is null, which is end of list
  while (next) {
    if (prev.val === next.val) {
	  // If next is a duplicate, skip over it by pointing its prev to its next
      prev.next = next.next;
    } else {
	  // Else, just move prev forward to continue through the list
      prev = prev.next;
    }
	// Always move next forward, it moves along with prev
    next = next.next;
  }

  return head;
}
-----------------------------------------------------------------
var deleteDuplicates = function(head) {
    // Special case...
    if(head == null || head.next == null)
        return head;
    // Initialize a pointer curr with the address of head node...
    let curr = head;
    // Traverse all element through a while loop if curr node and the next node of curr node are present...
    while( curr != null && curr.next != null){
        // If the value of curr is equal to the value of prev...
        // It means the value is present in the linked list...
        if(curr.val == curr.next.val){
            // Hence we do not need to include curr again in the linked list...
            // So we increment the value of curr...
            curr.next = curr.next.next;
        }
        // Otherwise, we increment the curr pointer...
        else{
            curr = curr.next; 
        }
    }
    return head;        // Return the sorted linked list without any duplicate element...
};
---------------------------------------------
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  head.next = deleteDuplicates(head.next);
  return head.val == head.next.val ? head.next : head;
};*/
========================================================================================================================================================================
Delete Node in a Linked List:
/*var deleteNode = function(node) { 
//WE DON'T DELETE THE NODE, WE ACTUALLY REPLACE THE VALUE OF THE NODE WITH THE NEXT //NODE VALUE AND THEN SKIP THE NODE
  //node.val is what we want to delete. It's 5 in the case of [4,5,1,9]
    //1. reassign the next nodes value (1) to this node (5). 
        //[4,1,1,9]
    //2. this node (1) will point to next next node (9) otherwise we would have 2 similar values of next node (1).
        //[4,1,1,9] => [4,1,9]
    node.val = node.next.val;
    node.next = node.next.next;  
};
console.log(deleteNode(5))//[4,5,1,9]
*/
=======================================================================================================================================================================
Remove Nth Node From End of List:
/*
https://www.youtube.com/watch?v=Q5AdN4nUuAg
https://www.youtube.com/watch?v=MzhI-u2h0-w
*/
/*var removeNthFromEnd = function(head, n) { //using 2 pointers
    let start = new ListNode()
    start.next = head
    let slow = start, fast = start
    for(let i=0; i<n; i++){
        fast = fast.next
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return start.next
};*/
/**old way*/
let removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    
    while(n--){ //placing the fast pointer so that diff(n) between slow and fast
        fast = fast.next
    }
    while(fast && fast.next ) { //it will go till last node
        fast = fast.next
        slow = slow.next
    }
    
    if(!fast)  head = head.next 
    else slow.next = slow.next.next

    return head
};
================================================================================================================================================================================
Odd Even Linked List:
/**
https://www.youtube.com/watch?v=ErkOfemuEuc
https://www.youtube.com/watch?v=zwr-YbD0D4A
 */
/*var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    
    let odd = head, 
        even = head.next,
        evenhead = even;
    
    while (even !== null && even.next !== null) {
        odd = odd.next = even.next;
        even = even.next = odd.next;
    }
    odd.next = evenhead;
    return head;
};
--------------------------------------------
var oddEvenList = function(head) {
    if(head == null)return null;

    let odd = head;
    let even = head.next;
    let evenHead = even
    while(even?.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next
    }
    odd.next = evenHead
    return head
};
-------------------------------------------
*/
var oddEvenList = function(head) {
    if(head != null){
        
        let odd = head, even = head.next, evenHead = even;
        
        while(even && even.next != null){
            odd.next = even.next;
		    odd = odd.next;
		    even.next = odd.next;
		    even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
};
==========================================================================================================================================================================
Linked List Cycle:
/**
https://www.youtube.com/watch?v=wDgDAOVqhhA
*/

/*var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) { //because it's not have a null. If we have null then give an error
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
}
---------------------------------------------
var hasCycle = function(head) { 
    while (head) {
        if (head.visited) return true; //Mark a visit to a list node directly in the node.


        head.visited = true;
        head = head.next;
    }
    return false;
};
--------------------------------------------
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
};
-------------------------------------------
var hasCycle = function(head) {
    let node = head;
    const stack = [];
    while (node && node.next) {
        if (stack.includes(node)) {
            return true;
        }
        stack.push(node)
        node = node.next;
    }
    return false;
};
-----------------------------------------------
*/
/*This solution iterates through every node, setting the value within the node to null. Since we know the values are integers by default, if we encounter one of these null values, we know that we have cycled back to a value we have already iterated over.*/

const hasCycle = (head) => {
  while (head) {
    if (!head.val) return true;

    head.val = null;
    head = head.next;
  }

  return false;
};
======================================================================================================================================================================
Merge Two Sorted Lists:
/**
https://www.youtube.com/watch?v=g_uxlc8C6HE
https://www.youtube.com/watch?v=W0Mwqk-uPsk
 */
/*var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0, null);
    let currentNode = dummyHead;
    
    while (l1 && l2) {
        if(l1.val < l2.val) 
        {
            currentNode.next = l1;
            l1 = l1.next
        } 
        else 
        {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    // It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    //currentNode.next = l1 || l2;
    if (l1 != null) currentNode.next = l1;
    if (l2 != null) currentNode.next = l2;
    
	// return .next because this first element in the linkedlist is empty
    
    return dummyHead.next;
};
------------------------------------------------------
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(-1);
    if (!l1 && !l2){
        return null;
    }
    else if (!l1 || !l2){
        return l1 || l2;
    }

    if (l1.val <= l2.val){
        node.val = l1.val;
        l1 = l1.next;
    } 
    else {
        node.val = l2.val;
        l2 = l2.next;
    }
    node.next = mergeTwoLists(l1, l2);
    return node;   
};
----------------------------------------------------
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2 ) return l1 || l2
  if (l1.val > l2.val){
    [l1, l2] = [l2, l1]
  }
  l1.next = mergeTwoLists(l1.next, l2)
  return l1
};
----------------------------------------------------
*/
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 || l2
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
        
};
=======================================================================================================================================================================
Intersection of Two Arrays II:
/*const intersect = (nums1, nums2) =>
  nums1.filter(item => (
    nums2.includes(item)
      ? nums2.splice(nums2.indexOf(item), 1)
      : false
  ));
//console.log(intersect([1,2,2,1], [2,2]))
---------------------------------------------
const intersect = (nums1, nums2) => nums1.filter(n => nums2.includes(n) && nums2.splice(nums2.indexOf(n), 1));
----------------------------------------------
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    let arr = []
    let i=0, j=0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]) i++
        else if(nums2[j] < nums1[i])    j++
        else{
            arr.push(nums1[i])
            i++
            j++
        }
    }
    return arr
};
-----------------------------------------------
var intersect = function(nums1, nums2) {
    
    const hash = {}, ar = []
    
    nums2.forEach(num => {
        hash[num] ? hash[num]++ : hash[num] = 1
    })
    
    for (let i = 0; i < nums1.length; i++){
        if (hash[nums1[i]] > 0){
            ar.push(nums1[i])
            hash[nums1[i]]--
        }
    }
    return ar
};
-------------------------------------------------
*/
const intersect = (n1, n2) => {
  const seen = {};
  const res = [];
  for (let n of n1) {
    if (!seen[n]) seen[n] = 0;
    seen[n]++;
  }

  for (let n of n2) {
    if (seen[n] > 0) {
      res.push(n);
      seen[n]--;
    }
  }
  return res;
};
=======================================================================================================================================================================
Best Time to Buy and Sell Stock:
/*var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min); //profit = high-low
    }
    return result;
};
----------------------------------------
var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        max = Math.max(prices[i] - min, max);
        min = Math.min(prices[i], min);
    }
    
    return max;
};
-------------------------------------------
var maxProfit = function(prices) {
    let maxProf = 0, curr = prices[0];
    
    for(let x of prices) {
        if(curr < x) maxProf = Math.max(maxProf, x - curr);
        else curr = x;
    }
    return maxProf;
};
----------------------------------------------
var maxProfit = function (prices) {
    let minBuyPrice = prices[0];
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minBuyPrice) {
            minBuyPrice = price
        } else if (price-minBuyPrice > maxProfit){
            maxProfit = price-minBuyPrice
        }
    }
    return maxProfit
}
-------------------------------------------
function maxProfit(prices) { 
    let max = 0, min = Infinity;
    prices.forEach(price => price < min ? min = price : max = Math.max(max, price - min));
    return max;
};
-----------------------------------------
  var maxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            max = Math.max(max, prices[j] - prices[i]);
        }
     }
     return max;
  };
  --------------------------------------
  */
function maxProfit(prices) {
    let min = Number.MAX_SAFE_INTEGER; 

    return prices.reduce((max, price) => {
        min = Math.min(min, price);
        
        return Math.max(max, price - min);
    }, 0);
}
==========================================================================================================================================================================
Kth Largest Element in an Array:
var findKthLargest = function(nums, k) {
   nums.sort((a,b)=>b-a); //[6,5,4,3,2,1]
   return nums[k-1]
};
//console.log(findKthLargest([3,2,1,5,6,4],3))
==========================================================================================================================================================================
Container With Most Water:
/* https://www.youtube.com/watch?v=ZHQg07n_tbg
var maxArea = function(height) {
    let result = l = 0, r = height.length - 1, temp;
    while (l < r){
        temp = (r - l)   *   Math.min(height[l], height[r]); //breadth x length
        if (temp > result){
            result = temp;
        } 
        height[l] <= height[r] ? l ++: r --; //smaller or equal
    }
    return result;
};
------------------------------------------------------------
*/
const maxArea = heights => {
  let i = 0;
  let j = heights.length - 1;
  let water = 0;
  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(heights[i], heights[j]));
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return water;
};
========================================================================================================================================================================
Pascal's Triangle:
/*var generate = function(numRows) {
  let result = new Array(numRows); //
  
  for(let i=0; i<numRows; i++){
   
      let row = new Array(i+1);
      row[0] =1; row[row.length-1]=1;
    
      for(let j=1; j<row.length-1; j++)
      {
        let rowAbove = result[i-1];
        row[j]=rowAbove[j]+ rowAbove[j-1]
      }
    result[i]= row;
  }
  
  return result;
};
-----------------------------------------------
 //https://www.youtube.com/watch?v=y24nMGNkkPo
var generate = function(numRows) {
  let result =[]  
  for(let i=0; i<numRows; i++){
      let row = new Array(i+1); //0th row having 1 element and so on...
      row[0] =1; 
      row[row.length-1]=1; //always first and last is 1
    
      for(let j=1; j<row.length-1; j++) //inserting between 1 .... 1
      {
        row[j]=result[i-1][j]+ result[i-1][j-1] 
      }
      result[i]= row; //adding an array //result.push(row);
  }
  return result;
};
-----------------------------------------------
var generate = function(numRows) {
  let number=[]
  for(var i=0;i<numRows;i++)
  {
     var temparray=[]
     for(var j=0;j<=i;j++){
        if(j==0||j==i) temparray.push(1)
        else temparray.push(number[i-1][j-1] + number[i-1][j])
     }
     number.push(temparray)
  }
  return number
}
--------------------------------------------------
var generate = function(n) {
    let ans = [];
    for(let i = 0; i < n; i++) {
        ans[i] = new Array(i+1);
        ans[i][0] = 1;
        ans[i][i] = 1;
        for(let j = 1; j < i; j++) {
            ans[i][j] = ans[i-1][j-1]+ans[i-1][j];
        }
    }
    return ans;
};
-----------------------------------------------------
var generate = function(numRows) {
    const p = [];
    for(let i = 0; i < numRows; i++) {
        p[i] = [];
        for(let j = 0; j <= i; j++) {
            p[i][j] = (j === 0 || i === 0 || i === j) 
            ? 1 
            : p[i - 1][j - 1] + p[i - 1][j];
        }
    }   
    return p;
};
------------------------------------------------------
*/
var generate = function(numRows) {
    let resultArray = []

    for(var i=0; i<numRows; i++) {
        const currentArray = []
        var j=0;
    
        while(j<=i) {
            if(j === 0 || j === i) currentArray.push(1);
            else currentArray.push(resultArray[i - 1][j - 1] + resultArray[i - 1][j])
        
            j++;
        }
        resultArray.push(currentArray);
    }
    return resultArray;
};
=========================================================================================================================================================================
Swapping Nodes in a Linked List:
/*var swapNodes = function(head, k) {
    let i, arr = [], w = head
    while (w != null) { arr.push(w); w = w.next }
    let pt1 = k-1, pt2 = arr.length-k
    let a = arr[pt1].val, b = arr[pt2].val
    arr[pt1].val = b
    arr[pt2].val = a
    return head
};
-----------------------------------------------------
var swapNodes = function(head, k) {
    let arr = [], node = head
    
    while(node){
        arr.push(node)
        node = node.next
    }
    
    [arr[k-1].val, arr[arr.length-k].val] = [arr[arr.length-k].val, arr[k-1].val]
    
    return head
};
-----------------------------------------------------
*/
var swapNodes = function(head, k) {
    let fast = head, second = head, first = head
    for(let i=0; i<k-1; i++)    fast = fast.next
    first = fast
    while(fast.next != null){
        fast = fast.next
        second = second.next
    }
    let temp = first.val
    first.val = second.val
    second.val = temp
    return head
};
===========================================================================================================================================================================
First Unique Character in a String:
/*var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};

//console.log(firstUniqChar("leetcodooe"))
---------------------------------------------------
var firstUniqChar = function(s) {
    const count = {};
    for(let i = 0; i < s.length; i++) {
        if(!count[s[i]]) {
            count[s[i]] = 1;
        } else {
            count[s[i]]++
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(count[s[i]] === 1) return i
    }    
    return -1
};
------------------------------------------------
var firstUniqChar = function(s) {
    for(let i of s){
        if(s.lastIndexOf(i) == s.indexOf(i)){
            return s.indexOf(i);
        }
    }
    return -1;
};
------------------------------------------------
var firstUniqChar = function(s) {
    if (!s || !s.length) return -1;
    const cache = new Map();
    
    for (char of s) {
        cache.set(char, cache.get(char) + 1 || 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (cache.get(s[i]) === 1) return i;
    }
    return -1;
};
-----------------------------------------------
*/
var firstUniqChar = function(s) {
    let str = s.split('');
    let dups = str.filter((item, index) => str.indexOf(item) !== index);
    
    for (let i=0; i<str.length; i++) {
        if (!dups.includes(str[i])) {
            return i;
        }
    }
    return -1;
};
=========================================================================================================================================================================
Reverse Integer:
/*
var reverse = function(x) {
    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) {
        return 0
    }

    return x < 0 ? -number : number;
};
---------------------------------------------
var reverse = function(x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2**31) return 0;
  return absReversed * Math.sign(x);
};
---------------------------------------------
var reverse = function(x){
    let res = 0;
    let y = Math.abs(x);
    while(y > 0){
        res = res * 10 + y % 10;
        y = y / 10 | 0;
    }
    if(res > Math.pow(2, 31) + 1 || x < Math.pow(-2, 31)) return 0;
    return x > 0 ? res : -res;
}
---------------------------------------------
var reverse = function(x) {
  const max = Math.pow(2, 31);
  let r = 0;
  while (x !== 0) {
    r = r * 10 + x % 10;
    if (r > max || r < -max) return 0;
    x = (x / 10) << 0;
  }
  
  return r;
};
---------------------------------------------
var reverse = function(x) {
  const reversedAsString = x.toString().split('').reverse().join('').replace('-', '');
  const reversedNumber = x < 0 ? parseInt(reversedAsString) * (-1) : parseInt(reversedAsString);
  return (reversedNumber > (2**31 - 1) || reversedNumber < (-(2**31))) ? 0 : reversedNumber;
};
---------------------------------------------
*/
var reverse = function(x) {
    let ans = x < 0 
        ?parseInt(Math.abs(x).toString().split('').reverse().join('')) * -1
        :parseInt(x.toString().split('').reverse().join(''))
    return Math.abs(ans) < Math.pow(2,31) ? ans : 0;
};
========================================================================================================================================================================
Product of Array Except Self:
/**https://www.youtube.com/watch?v=gREVHiZjXeQ
 */
/*var productExceptSelf = function(nums) {
    const result = []; //1 //1 //2 //[1, 1, 2, 6]
    let productSoFar = 1; //1 //2
    for (let i = 0; i < nums.length; i++) {//0,1,2,3<4
        result[i] = productSoFar //1 //1 //2
        productSoFar *= nums[i] //1*1 //1*2
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};
console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
-----------------------------------------------------------------
const productExceptSelf = function (nums) {
	//initialize an array of the same length as nums full of 1s
	const res = Array(nums.length).fill(1)
	
	//multiply each element by the product of each element to the left 
	let product = 1
	for (let i = 0; i < res.length - 1; i++) {
		product *= nums[i]
		res[i + 1] *= product
	}

	//multiply each element by the product of each element to the right 
	product = 1
	for (let i = res.length - 1; i > 0; i--) {
		product *= nums[i]
		res[i - 1] *= product
	}
	//return the resultant array
	return res
};
-----------------------------------------------------------------
var productExceptSelf = function(nums) {
  const len = nums.length;

  const res = [];

  let product = 1; // Our product acc

  // Pass Right, calculate all values to the right of i
  for (let i = 0; i < len; i++) {
    res.push(product);
    product *= nums[i];
  }
  
  product = 1;

  // Pass Left, calculate the product of res[i] and
  // the product of all items to the left of i
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= product;
    product *= nums[i];
  }


  return res;
};
--------------------------------------------------------------
var productExceptSelf = function(nums) {
    
    
    //so basically if we can calculate the prefix multiplication before the element and postfix multiplication after the element 
	//and then multiply both of them we should get the product without self
    
    
    const res = []
    
    let multiplier = 1;
    
    //first calculate prefix multiplication for all elements
    for(let i=0;i<nums.length;i++){
        res[i] = multiplier;
        multiplier*=nums[i];
    }
    
    multiplier = 1;
    //now calculate postfix multiplication and also multiply with the prefix multiplication present in res array with postfix multiplication
    
    for(let i=nums.length-1;i>=0;i--){
        res[i] *= multiplier;
        multiplier *= nums[i];
    }
    
    return res;
};
--------------------------------------------------------------
*/
var productExceptSelf = function(nums) {
    let res =[];
    nums.reduce((leftP, curr, i) => {
        res[i] = leftP;
        return leftP*curr;
    }, 1)
    nums.reduceRight((rightP, curr, i) => {
        res[i] *= rightP;
        return rightP*curr;
    }, 1)
    return res;
};
===================================================================================================================================================================
Add Two Numbers : 
/*var addTwoNumbers = function(l1, l2) {
    const d = new ListNode();
    let curr = d;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum / 10 | 0; //This is a bitwise or. It effectively truncates numbers from floats to integers, so it's similar to the floor operator for positive numbers.
        curr.next = new ListNode(sum % 10); //value assigning
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        curr = curr.next;//pointer updating
    }
    return d.next;
};
---------------------------------------------------------
var addTwoNumbers = function(list1, list2) {
  return add(list1, list2, 0);
  
  function add(l1, l2, carry) {
    const v1 = (l1 && l1.val) || 0;
    const v2 = (l2 && l2.val) || 0;
    const sum = v1 + v2 + carry;
    const newCarry = Math.floor(sum / 10); //carry
    const val = sum % 10; // sum wihout Carry
    return (l1 || l2 || carry) ? { val, next: add(l1 && l1.next, l2 && l2.next, newCarry) } : null;
  };
};
-------------------------------------------------------
function addTwoNumbers(l1, l2) {
    let head = new ListNode();
    let tail = head;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        
        carry = Math.trunc(sum / 10);
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    return head.next;
};
-----------------------------------------------------------
*/
const addTwoNumbers = (l1, l2) => {
    let result = new ListNode();
    let head = result;
    let carry = 0;
    
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);
        head.val = sum % 10;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (l1 || l2) {
            head.next = new ListNode();
            head = head.next;
        }
    }
    
    if (carry > 0) {
        head.next = new ListNode(carry);
    }
    
    return result;
};
=======================================================================================================================================================================
Longest Consecutive Sequence:
/*var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0;
      while (set.has(count+num)) {
        count++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
};
//Iterate over "nums" and check if it's previous number exist or not.
//If it exist , then sequence can't start from that number , so we will move to next number
//If it doesn't exist , it means sequence can start from that number . So , we will create //a count variable and run a loop until (num+count) exist or until next number exist in our //set.
---------------------------------------------
const longestConsecutive = (nums) => {
  let maxLength = 0;
  for (let num of nums) {
    let length = 1;
    while (nums.includes(num + length)) length++; // Build up the length as we find the next consecutive num
    maxLength = Math.max(maxLength, length); // Update max
  }
  return maxLength;
};
-------------------------------------------------
const longestConsecutive = (nums) => {
  let maxLength = 0;
  let set = new Set(nums); //Intialize set with nums array

  for (let num of nums) {
    if (set.has(num - 1)) continue; // Not the start of a new consecutive list, so skip.
    let length = 1;
    while (set.has(num + length)) length++; // Build up the length as we find the next consecutive num
    maxLength = Math.max(length, maxLength); // Update max
  }
  return maxLength;
};
-------------------------------------------------
*/
var longestConsecutive = function(nums) {
    let set = new Set();
    for(const n of nums) {
        set.add(n);
    }
    let max = 0;
    for(let n of set) {
        if(!set.has(n-1)) {
            let count = 0;
            while(set.has(n++)) {
                count++;
            }
            max = Math.max(count, max);
        }
    }
    return max;
};
console.log(longestConsecutive([100,4,200,1,3,2]))
===========================================================================================================================================================================
Sum of Two Integers:
/*   * Binary operators used:
         * & (AND) - produces a digit of 1 if both numbers have a digit of 1
         * ^ (XOR) - produces a digit of 1 only if one number (not both) have a digit of one
         * << (Left Shift) - adds one binary zero onto the number; increments operand.


var getSum = function(a, b) {
  let res = a^b;
  let carry = (a&b) << 1;
  if(carry!=0){
     return getSum(res,carry);
  }
  return res;
};
console.log(getSum(1,2))
-------------------------------------
var getSum = function(a, b) {
    // get the initial sum without the carry
    var sum = a ^ b;
	// get the carry
    var carry = a & b;
    
	// loop until carry becomes 0;
    while(carry !=0) {
	// apply the carry to the next position by shifting left
        carry = carry << 1; 
		//store the prevSum
        var prevSum = sum;
		// repeat addition
        sum = sum ^ carry;
		// get the carry
        carry = prevSum & carry; 
    }
    
  return sum;  
};
-----------------------------------------
var getSum = function(a, b) {
    while (b !== 0) {
        let temp = a;
        a = a ^ b;
        b = (temp & b) << 1;
    }
    return a; 
};
-----------------------------------------

var getSum = function(a, b) {
    let carry;
    
    while(b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    return a;
};
-------------------------------------------
function getSum(a, b) {
  const sum = a ^ b; // XOR derives the sum bits, without carry
  const carry = (a & b) << 1; // AND derives the carry bits

  if (!carry) {
    return sum;
  }

  return getSum(sum, carry);
};  
-------------------------------------------------
*/
var getSum = function(a, b) {
    return b ? getSum(a ^ b, (a & b) << 1) : a;
};
=============================================================================================================================================================================
Delete the Middle Node of a Linked List;
/*var deleteMiddle = function(head) {
    if(!head.next) return null;
  let slow = head;
  
  // make fast start from 3rd node
  let fast = head.next.next;
  
  // now we loop until fast reaches end of list
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // since we made fast start from 3rd node
  // when we exit the loop, the slow pointer
  // will be at node middle - 1 (not middle)
  // so we can easily delete middle node now
  slow.next = slow.next.next;
  return head;
};
---------------------------------------------------
var deleteMiddle = function(head) {
    if(head.next==null){return null;}
    let slow=head; let fast=head; let pre;
    while(fast && fast.next){
        fast=fast.next.next;
        pre=slow;
        slow=slow.next;
    }
    pre.next=pre.next.next;
    return head;
};
-------------------------------------------------------
 var deleteMiddle = function(head) {
     if( !head || !head.next ) return null;
     if(!head.next) return null;
     let slow = head, fast = head;
     while(fast != null){
         if(fast.next && fast.next.next && fast.next.next.next){
             slow = slow.next;
             fast = fast.next.next;
         }
         else fast = null;
     }
     slow.next = slow.next.next;
     return head    
};
---------------------------------------------------------------
*/
var deleteMiddle = function(head) {
    if(!head) return [];
    if(head.next===null) return null;
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next && fast.next.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    if(slow.next) slow.next = slow.next.next;
    return head;
};
===========================================================================================================================================================================
Find All Duplicates in an Array:
/*var findDuplicates = function(nums) {
  let result = []
  for(let i = 0;i<nums.length;i++) {
	  // mark index as current value negative and if it appears negative again means its a repeatative number. 
      if(nums[Math.abs(nums[i])-1] > 0) nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1]
      else {
	  //store the result if its a negative number
          result.push(Math.abs(nums[i]))
      }
  }
  //returns the result
  return result
};
-----------------------------------------------------
const findDuplicates = nums =>
  nums.reduce((ans, val) => {
    let idx = Math.abs(val) - 1
    if (nums[idx] < 1) ans.push(++idx);
    else nums[idx] *= -1;
    return ans
  }, [])
-----------------------------------------------------
var findDuplicates = function(nums) {
    let ans = [];
    
    for(let i=0; i<nums.length; i++){
        let cur = Math.abs(nums[i])-1;
        if(nums[cur] > 0){
            nums[cur] *= -1;
        }else{
            ans.push(cur+1);
        }
    }

    return ans;
};
-----------------------------------------------------
    */
var findDuplicates = function(arr) {
let map = new Map();
let result = []
for (let i = 0; i < arr.length; i++) {
let count = 0;
if (map.has(arr[i])) {
result.push(arr[i])
} else
map.set(arr[i], ++count);
}
return result
};
=========================================================================================================================================================================
Intersection of Two Linked Lists:
/*There are multiple ways
https://www.youtube.com/watch?v=SvBA4ly1nYo
 */
/*var getIntersectionNode = function(headA, headB) {
    if(!headA ||!headB) return null //if anyone of the linked list not exist
    let a = headA;
    let b = headB;
    
    //if a is not equal to b(i.e, a!==b)
    while(a!==b){
        if(a !== null){
            a= a.next
        }else{
            a = headB;
        }
        if(b !== null){
            b= b.next
        }else{
            b = headA;
        }    
   }    
    //if a is equal to b(i.e, a===b)
    return a; //or return b (both are same)
};
----------------------------------------------------------------------
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }
    
    let p1 = headA;
    let p2 = headB;
    
    while(p1 !== p2){
        p1 = p1.next
        p2 = p2.next
        
        if(p1 === p2){
            return p1
        }
        
        if(p1 === null){
            p1 = headB
        }
        
        if(p2 === null){
            p2 = headA
        }
        
    }
    
    return p1
};
----------------------------------------------------------------------
var getIntersectionNode = function(headA, headB) {
    let P1 = headA;
    let P2 = headB;
    
    while(P1 !== P2){
        P1 = P1 === null ? headB : P1.next;
        P2 = P2 === null ? headA : P2.next;
    }
    
    //P1 would be equal to P2, either NULL if no intersection or pointing to the itersecting node
    return P1;
};
----------------------------------------------------------------------
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)    return null
    let A = headA, B = headB
    while(A != B){
        A = (A)? A.next : headB
        B = (B)? B.next : headA
    }
    return A
};
----------------------------------------------------------------------
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    var p1 = headA;
    var p2 = headB;
    while (p1 && p2 && p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
        
        if (p1 == p2) return p1;
        if (!p1) p1 = headB;
        if (!p2) p2 = headA;
    }
    return p1;
};
----------------------------------------------------------------------
*/
var getIntersectionNode = function(headA, headB) {
    const map = new WeakMap();

    while (headA || headB) {
        if (headA) {
            if (map.has(headA)) {
                return headA;
            }

            map.set(headA, true); //true means 1
            headA = headA.next;
        }
        
        if (headB) {
            if (map.has(headB)) {
                return headB;
            }

            map.set(headB, true);
            headB = headB.next;
        }
    }

    return null;
};
======================================================================================================================================================================
Maximum Depth of Binary Tree: Height of the tree: 
/*https://www.youtube.com/watch?v=u9gLZIlomn4
 */
/*var maxDepth = function(root) {
    if(!root) return 0;
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right)); 
    // one plus because of root should be include
};
-----------------------------------------
var maxDepth = (root => root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0);
------------------------------------------
*/
var maxDepth = function(root) {
    if(!root) return 0;
    // using BFS and counting levels
    // not recommended to use array as queue
    let levels = 0, queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let count = queue.length;
        
        for(let i = 0; i < count; i++){
            const node = queue.shift();
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
            
        }
        levels++;
    }
    return levels;
};
=========================================================================================================================================================================
Minimum Depth of Binary Tree: 
/*var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1;
};
-----------------------------------------------------
var minDepth = function(root) {
  if(!root) return 0;
  const queue = [{ node: root, height: 1 }]
  while(queue.length) {
    const current = queue.shift();
    if (!current.node.left && !current.node.right)  {
		// as soon as we get the first height we break out of loop
      return current.height;
    }
    if(current.node.left) queue.push({ node: current.node.left, height: current.height + 1});
    if(current.node.right) queue.push({ node: current.node.right, height: current.height + 1});
  }
}
--------------------------------------------------------
*/
var minDepth = function(root)  {
	if (!root) return 0;

	const queue = [root];
	let min = 1;

	while (queue.length) {
		const len = queue.length;

		// traverse level by level
		for (let i = 0; i < len; i++) {
			const node = queue.shift();

			// reached end of current path, return min. First edge node reached, must be the min dpeth
			if (!node.left && !node.right) return min; 
			
			// traverse left/right node on to next level
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		min++; // increment depth at each level iteration
	}

	return min;
};
=======================================================================================================================================================================
Sort List:
/*var sortList = function(head) {
    const arr = []; //To store all the numbers
    let node = head; //helper node to iterate the linked list
    
    //Fill the array
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    //Sort the numbers
    arr.sort((a,b) => a - b);
    
    
    head = node; // We want to return the same head, and we already changed its value when filling the array
    
    for(const n of arr) {
        node.val = n; //Change list value
        node = node.next; //Go next
    }
    
    //Finally return the head of the new linked list
    return head;
};
-----------------------------------------------------
var sortList = function(head) {
    let temp = head;
    let arr = [];
    let i = 0;
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    };
    arr.sort( (a,b) => a - b);
    temp = head;
    while (temp) {
        temp.val = arr[i++];
        temp = temp.next;
    };
    return head;
};
----------------------------------------------------
var sortList = function(head) {
    if(!head || !head.next) return head;
    let slow = head;
    let fast = head;
    let temp = head;
    while(fast!==null && fast.next!==null){
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    temp.next=null;
    let left = sortList(head)
    let right = sortList(slow)
    return mergeSort(left,right);
    
    function mergeSort(l1,l2){
        let dummy = new ListNode(-1);
        let current = dummy;
        while(l1!==null && l2!==null){
            if(l1.val < l2.val){
                current.next = l1;
                l1 = l1.next
            } else{
                current.next = l2;
                l2 = l2.next;
            }
            current= current.next;
        }
        current.next = l1 || l2
        return dummy.next;
    }
};
--------------------------------------------
function mergeTwo (one, two) {
   var dummy = new ListNode(-1);
   var head = dummy;
   while(one && two) {
       if (one.val < two.val) {
           head.next = one;
           one = one.next;
       } else {
           head.next = two;
           two = two.next;
       }
       head = head.next;
   }
   if (one) head.next = one;
   if (two) head.next = two;
   return dummy.next;
}
function sortList (head) {
    if (!head || !head.next) return head;
    var fast = head, slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var second = slow.next;
    slow.next = null;
    head = sortList(head);
    second = sortList(second);
    return mergeTwo(head, second);
}
-----------------------------------------------
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let fast = head.next; // 需要先走一步，原因是，对于偶数长度，mid 可以在一半的地方分割
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const mid = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(mid);
    const dummy = new ListNode(0);
    let h = dummy;
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    if (left) {
        h.next = left;
    }
    if (right) {
        h.next = right;
    }
    return dummy.next;
};
------------------------------------------------------
*/
function sortList (head) {
    if(!head || !head.next) return head;
    let fast = head, slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let middle = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(middle));
}
const merge = (o, t) => {
    let d = new ListNode(-1); //dummy and temp
    let tmp = d;
    while(o && t) {
        tmp.next = (o.val < t.val) ? o : t;
        tmp = tmp.next;
        if(o.val < t.val) o = o.next; else t = t.next;
    }
    if(o) tmp.next = o;
    if(t) tmp.next = t;
    return d.next;
}
===========================================================================================================================================================================
First Missing Positive:
/*const firstMissingPositive = (nums) => {
    let set = new Set(nums) , i = 1
    while(i <= nums.length + 1 ){
        if(!set.has(i)) return i
        else i++
    }
}
---------------------------------------------------
const firstMissingPositive = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    return arr.reduce((min, num) => (num == min) ? min + 1 : min, 1);
}
---------------------------------------------------
      */
const firstMissingPositive = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    let min = 1;

    arr.forEach(num => {
        if (num == min) min++;
        if (num > min) return min;
    });

    return min;
}
=======================================================================================================================================================================
Count of Smaller Numbers After Self: 
/*var countSmaller = function(nums) {
    let newNums = [...nums];
    newNums.sort(function(i1, i2){return i1 - i2});
    
    let res = [];
    for(let i = 0; i < nums.length; ++i){
        let seq = newNums.indexOf(nums[i]);
        res.push(seq);
        newNums.splice(seq, 1);
    }
    
    return res;
};
--------------------------------------------
var countSmaller = function(nums) {
    var result = []; var count = 0;
    for(var i =0; i<nums.length; i++){
        for(var j=i+1; j< nums.length; j++){
            if(nums[i]>nums[j]){
                count++
            }
        }
       result.push(count);
       count=0
    }
    return result
};
//console.log(countSmaller([5,2,6,1]))
--------------------------------------------
*/
var countSmaller = function(nums) {
    let sorted = [], result = [];
    for (let i=nums.length-1;i>=0;i--) {
        let left = 0, right = sorted.length;
        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.unshift(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result;
}
==========================================================================================================================================================================
Count and Say:
/*var countAndSay = function(n) {
    var str = '1';
    for (var i=1; i < n; i++) {
        var strArray = str.split('');
        str ='';
        var count = 1;
        for (var j=0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j+1]) {
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};
//console.log(countAndSay("3322251"))
----------------------------------------------
const countAndSay = n => {
  let str = '1';
  while (n > 1) {
    let newStr = '',
      count = 0,
      say = str[0];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === say) {
        count += 1;
      } else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }
    str = newStr + count + say;
    n -= 1;
  }
  return str;
};
-----------------------------------------------
const countAndSay = (n, str = '1') => {
  if (n === 1) {
    return str;
  }
  let newStr = '',
    count = 0,
    say = str[0];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === say) {
      count += 1;
    } else {
      newStr += count + say;
      count = 1;
      say = str[i];
    }
  }
  return countAndSay(n - 1, newStr + count + say);
};
---------------------------------------------------
var countAndSay = function(n) {
    if(n === 1) return "1";
    let prev = countAndSay(n-1), count = 1, res = ""; var i;
    for( i=0; i< prev.length -1;i++){
        if(prev[i] === prev[i+1]){
            count++;
        }else{
            res += count + prev[i];
            count = 1;
        }
    }
    res += count + prev[i];
    return res;
}
---------------------------------------------------
*/
var countAndSay = function(n) {
    var str = '1';
    for (var i=1; i < n; i++) { //because n=interger value
        var strArray = str.split(''); str =''; var count = 1;
        for (var j=0; j < strArray.length; j++) {
            if (strArray[j] === strArray[j+1]) {
               count++;
            }
            else {
                str = str + count + strArray[j];
                count = 1;
            }
        }
    }
    return str;
};
========================================================================================================================================================================
Trapping Rain Water :
/*var trap = function(height) {
    const leftWall = []
    const rightWall = []
    
    let leftMax = 0
    for (let i=0; i<height.length; i++) {
        leftMax = Math.max(height[i], leftMax)
        leftWall[i] = leftMax
    }
    
    let rightMax = 0
    for (let i=height.length-1; i>=0; i--) {
        rightMax = Math.max(height[i], rightMax)
        rightWall[i] = rightMax
    }
    
    return height.reduce((acc, ele, idx) => acc + Math.min(leftWall[idx], rightWall[idx]) - ele, 0)
};
------------------------------------------------
var trap = function(height) {
    let result = 0, left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0;
    while(left < right) {
        if(height[left] < height[right]) { //if left is smaller
            if(height[left] > maxLeft) { // if maxleft is smaller than left
                maxLeft = height[left];
            }
            else {
                result += maxLeft - height[left];
            }
            left++;
        }
        else { //if right is smaller
            if(height[right] > maxRight) {
                maxRight = height[right];
            }
            else {
                result += maxRight - height[right];
            }
            right--;
        }
    }
    return result;
};
------------------------------------------------
var trap = function(height) {
  
    let maxLeftArray = [];
    let maxLeft = 0;
    let maxRightArray = [];
    let maxRight = 0;
    let trappedWater = 0;
    
	//Here we have to get the max left value for each index pre-implementation. This is done to maintain the O(N) time complexity.
    for(let i = 0; i < height.length; i++){
        maxLeftArray[i] = maxLeft;
        maxLeft = Math.max(maxLeft, height[i]);
    }
    
	//Here we have to get the max right value for each index pre-implementation. This is done to maintain the O(N) time complexity.
    for(let j = height.length - 1; j >= 0; j--){
        maxRightArray[j] = maxRight;
        maxRight = Math.max(maxRight, height[j]);
    }
    
	//Since we know the max left and right value for each index. We get the minimum value which would be the water level then subtract from the current index. This would added to the trapped water and also we need to be careful about the negative value so just equated to zero.
    for(let m = 1; m < height.length - 1; m++){
       let waterLevel = Math.min(maxLeftArray[m], maxRightArray[m])
       
       trappedWater = trappedWater + Math.max((waterLevel - height[m]), 0);
       
    }
    
    return trappedWater;
};
-------------------------------------------------
https://www.youtube.com/watch?v=UZG3-vZlFM4
*/
var trap = function(height) {
 let left =new Array(height.length), right=new Array(height.length), result=0
 
 left[0] = height[0]
 for(let i=1; i<height.length; i++){
     left[i] = Math.max(left[i-1], height[i])
 }
    
 right[height.length-1] = height[height.length-1]   
 for(let j=height.length-2; j>=0; j--){
    right[j] = Math.max(right[j+1], height[j])
 }
 
 for(let k=0; k<height.length; k++){
      result = result + Math.min(left[k], right[k]) - height[k]
 }
 return result
}
===========================================================================================================================================================================
Invert Binary Tree: 
/*const invertTree = (root) => {
	const reverse = (node) => {
		if (!node) return;

		let left = node.left;
		let right = node.right;
		node.left = right;
		node.right = left;

		reverse(node.left);
		reverse(node.right);
	};

	reverse(root);
	return root;
};
------------------------------
var invertTree = function(root) {
    if (root == null) 
        return root;
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
-------------------------------
var invertTree = function(root) {    
    const recursiveFn = node => {     
   
        if (node === null) return;  // Exit case for recursion

        [node.right, node.left] = [node.left, node.right]; // Swap
        
        recursiveFn(node.left);
        recursiveFn(node.right);
    }
    
    recursiveFn(root)
    
  return root;
};
----------------------------------
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
----------------------------------
// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}
-----------------------------------
    */ //use pop() then DFS, use shift() BFS
// BFS
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}
==========================================================================================================================================================================
Same Tree:
/*function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
--------------------------------------------------
var isSameTree = function(p, q) {
     return JSON.stringify(p)===JSON.stringify(q)
};
--------------------------------------------------
var isSameTree = function(p, q) {
    const stack1 = [], stack2 = [];
    while (p || q || stack1.length || stack2.length) {
        while (p) {
            stack1.push(p);
            p = p.left
        }
        while (q) {
            stack2.push(q);
            q = q.left;
        }
        p = stack1.pop();
        q = stack2.pop();
        if (!p && !q) {
            continue;
        }
        if (!p || !q || p.val !== q.val) {
            return false;
        }
        stack1.push(null);
        stack2.push(null);
        p = p.right;
        q = q.right;
    }
    return true;
};
-------------------------------------------------------
var isSameTree = function(p, q) { 
    if(!p && !q) return true;
    let s1 = [p], s2 = [q]
    let curr1, curr2
    
    while(s1.length && s2.length){
        curr1 = s1.pop()
        curr2 = s2.pop()
        const val1 = curr1 ? curr1.val : false
        const val2 = curr2 ? curr2.val : false
        if(val1 !== val2){
            return false
        }
        if(curr1.right || curr2.right){
            s1.push(curr1.right)
            s2.push(curr2.right)
        }
        if(curr1.left || curr2.left){
            s1.push(curr1.left)
            s2.push(curr2.left)
        }
    }
    return true
};
---------------------------------------------------
*/
var isSameTree = function(p, q) {
    let stack = [p, q];

    while (stack.length > 0) {
        var q = stack.pop();
        var p = stack.pop();

        if (!p && !q) continue; //We don't return here like in the recursive solution, as we just want the execution to continue with the remaining elements in the stack.

        if (!p || !q) return false;

        if (p.val === q.val) {
            stack.push(p.left);
            stack.push(q.left);
            stack.push(p.right);
            stack.push(q.right);
        } else {
            return false;
        }
    }

    return true;
};
========================================================================================================================================================================
Find Lucky Integer in an Array:
/*var findLucky = function(arr) {
    let max = -1
    
    const map = {}
    
    for(const number of arr) {
        if(map[number]) {
            map[number] += 1
        } else {
            map[number] = 1
        }
    }
    
    for(const key in map) {
        if(Number(key) === map[key] && map[key] > max) {
            max = map[key]
        }
    }
    
    return max
};
-----------------------------------------------------
var findLucky = function(arr) {
    let myMap= new Map()
    let max = 0;
    
    //create a map to store frequency counts
    for(let i of arr){
        if(myMap.has(i)){
            myMap.set(i, myMap.get(i)+1);
        }else{
            myMap.set(i,1);
        }
    }
    
    //loop through map to find lucky numbers and modify the max value
    for(let [index, value] of myMap){
        if(index == value){
            max = Math.max(max,value)
        }
    }
    
    return max > 0 ? max : -1;
};
-------------------------------------------------------
var findLucky = function(arr) {
    const map = {}
    let res = -1
    arr.forEach((e,i) => {
        if (map[e]) {
            map[e]++
        } else {
            map[e] = 1
        }
    })
    for (let key in map) {
        if (map[key] == key) {
            res = key
        }
    }
    return res
};
------------------------------------------------------
*/
var findLucky = function(arr) {
    const map = arr.reduce((map,e) => {
        if (map[e]) {
            map[e]++
        } else {
            map[e] = 1
        }
        return map
    }, {})
    let res = -1
    for (let key in map) {
        if (map[key] == key) {
            res = key
        }
    }
    return res
};
======================================================================================================================================================================
Binary Tree Inorder Traversal:
/*const inorderTraversal = root => root 
? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
----------------------------------------------
var inorderTraversal = function(root) {
    if (!root) {
      return [];
    }
    let left = inorderTraversal(root.left);
    let mid = root.val;
    let right = inorderTraversal(root.right);
    return [...left, mid, ...right];
};
--------------------------------------------
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root); //stack-push
      root = root.left; //root.left
    } else {
      root = stack.pop(); //stack-pop
      res.push(root.val); //res-push
      root = root.right; //root.right
    }
  }

  return res;
}
----------------------------------------
const inorderTraversal = (root) => {
    let curr = root,  res = [], stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};
----------------------------------------
const inorderTraversal = (root) => {
    const res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
};
------------------------------------------
*/
var inorderTraversal = function(root) {
    // Inorder traversal: Left -> Root -> right
    
    // Stack is best the sata structure to use when traversing a tree iteratively. As in recusion as well, we make the use of call stack and stack is LIFO
    let stack = [], result = [];
    let curr = root;
    
    // Traverse the tress
    while(curr !== null || stack.length > 0) {
        // Reach the left most node of the curr subtree
        while(curr != null) {
            // Placing pointer of the curr node on the stack before traversing the node's left subtree
            stack.push(curr);
            curr = curr.left;
        }
        
        // At this point curr is null, so we have reached the end of left subtree, since stack is LIFO, the top element of stack is the left most node in the subtree
        curr = stack.pop();
        // Add the left most node to our result array
        result.push(curr.val);
        // Now we visit the right subtree
        curr = curr.right;
    }
    
    return result;    
};
======================================================================================================================================================================
Next Permutation:
/*
Find the first decreasing index moving from end to start
E.g. [7, 2, 3, 1, 5, 4, 3, 2, 0] num 1 is the first decreasing index going from the end backwards
Swap num 1 with the next large num to its right which is 2
[7, 2, 3, 2, 5, 4, 3, 1, 0]
Reverse/sort nums to the right
[7, 2, 3, 2, 0, 1, 3, 4, 5]
If there is no next permutation reverse the array
---------------------------------
var nextPermutation = function(nums) {
    
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) { //first decreasing
            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }
	
	// If there is no next permutation reverse the arr
    nums.reverse()
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }
};
---------------------------------------------------------
var nextPermutation = function(nums) {
    if (nums === null || nums.length === 0) {
        return nums;
    }
    let index = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }
    if (index >= 0) {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) {
                let temp = nums[i];
                nums[i] = nums[index];
                nums[index] = temp;
                break;
            }
        }
    }
    let start = index + 1;
    let end = nums.length - 1;
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};
--------------------------------------------------
*/var nextPermutation = function(nums) {
    if (nums === null || nums.length === 0) {
        return nums;
    }
    let index = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }
    if (index >= 0) {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) {
               [nums[i], nums[index]] = [nums[index], nums[i]]
                break;
            }
        }
    }
    let start = index + 1;
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
};
=======================================================================================================================================================================
Find the Index of the First Occurrence in a String:
/*var strStr = function(haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let temp = haystack.substring(i, i + needle.length); //0,5
            if (temp === needle) {
                return i;
            }
        }
    }
    return -1;
};
console.log(strStr("leetcode", "leeto"))
---------------------------------------------
var strStr = function(haystack, needle) {
  var needleLength = needle.length
  var haystackLength = haystack.length

  if(needle === '' && haystack === '' ){
    return 0
  }

  for(var i=0; i < haystack.length; i++){
    if (haystack.substr(i, needleLength) === needle){
      return i
    }
  }
  return -1
}
---------------------------------------------
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    for (let i in haystack) if (haystack[i] === needle[0] && haystack.substring(i, Number(i) + needle.length) === needle) return i;
    return -1;
};
-----------------------------------------------
var strStr = function(haystack, needle){
     if(needle.length==""){
         return 0;
     }
     else if(haystack.length==""){
         return -1;
     }
    return haystack.indexOf(needle);
 }
--------------------------------------------------
*/
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && haystack.substr(i, needle.length) === needle) return i;
    }
    
    return -1;
};
===========================================================================================================================================================================
Find the Difference of Two Arrays:
/*var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1.filter(num => !nums2.includes(num)))
    let set2 = new Set(nums2.filter(num => !nums1.includes(num)));
    
    return [[...set1], [...set2]]
};
------------------------------------------------
var findDifference = function(nums1, nums2) {
  var arr1 = [],
    arr2 = [];
  for (var i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) == -1) {
      arr1.push(nums1[i])
    }
  }
  for (var i = 0; i < nums2.length; i++) {
    if (nums1.indexOf(nums2[i]) == -1) {
      arr2.push(nums2[i])
    }
  }
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  return [arr1, arr2]
};
----------------------------------------------
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1),
        set2 = new Set(nums2);
  
  nums1.forEach(set2.delete, set2);
  nums2.forEach(set1.delete, set1);
  
  return [[...set1], [...set2]]
};
-----------------------------------------------
var findDifference = function(nums1, nums2) {
let ans1=new Set(nums1)
nums2.forEach(v=>{ans1.delete(v)});
let ans2=new Set(nums2);
nums1.forEach(v=>{ans2.delete(v)});    

return [[...ans1],[...ans2]];
}
--------------------------------------------------
*/
var findDifference = function (nums1, nums2) {
  return [
    [...new Set(nums1)].filter((x) => !nums2.includes(x)),
    [...new Set(nums2)].filter((x) => !nums1.includes(x)),
  ];
};
==========================================================================================================================================================================
Binary Search : Leetcode 704
/*const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // ! getting out mid val
    if (nums[mid] === target) { // ! if mid val is equal to target we will return the mid 
      return mid;
    } else if (nums[mid] < target) { 

      left = mid + 1; /// ! if mid val is less than target we will move the left pointer to mid+1
    } else {
        right = mid - 1; // ! if mid val is greater than target we will move the right pointer mid-1
    }
  }
  //! if we cant find the target we will return -1
  return -1;
};
---------------------------------------
const calcMid = (l, r) => {
    return l + Math.floor((r - l) / 2);
}

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (right >= left) {
        const mid = calcMid(left, right);
   
        if (nums[mid] == target) {
            return mid;  
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};
--------------------------------------
var search = function(nums, target) {
return nums.indexOf(target);
};
---------------------------------------
    */
var search = function(nums, target) {
    
    const left = 0;
    const right = nums.length - 1;
    
    return binarySearch(nums, left, right, target);
};

function binarySearch(arr, left, right, target) {
    if (left <= right) { //alternative of while loop in iterative approach
        const mid = left + Math.floor(((right-left)/2));
    
        if (arr[mid] === target) return mid;
    
        if (target < arr[mid]) return binarySearch(arr, left, mid - 1, target);
        if (target > arr[mid]) return binarySearch(arr, mid + 1, right, target);
    }
    
    return -1;
}
===========================================================================================================================================================================
Top K Frequent Elements:
/*var topKFrequent = function(nums, k) {
    
    let map = {};
    
    for(let num of nums){
        
        map[num] = (map[num] || 0) + 1;
        
    }

    return Object.entries(map).sort((a,b) => b[1] - a[1]).map(val => Number(val[0])).slice(0, k);
    
};
console.log(topKFrequent([1,1,1,2,2,3]))
------------------------------------------------
const topKFrequent = function (nums, k) {

    let map = new Map();
    nums.forEach(num => {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 0);
    });

    return [...map] 
        .sort((a, b) => { return b[1] - a[1] }) //sorting based on values i.e second element of an array
        .map(tuple => tuple[0]) //taking keys i.e, 0th index
        .slice(0, k); //finding first kth elementa
};
--------------------------------------------------
*/var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const n of nums) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const entries = [...map.entries()].sort((a, b) => b[1] - a[1]);
    console.log(entries);
    const result = [];
    for (let i = 0; i < k && i < entries.length; i++) {
        result.push(entries[i][0]);
    }
    return result;
};
==========================================================================================================================================================================
Maximum Product Subarray:
/*const maxProduct = (nums) => {
	var result = Number.NEGATIVE_INFINITY;

	for (var i = 0; i <= nums.length - 1; i++) {
		let product = 1;
		for (var j = i; j <= nums.length - 1; j++) {
			if (product*nums[j] > result) result = product*nums[j];
		}
	}

	return result;
};
--------------------------------------------
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}
-----------------------------------------------
var maxProduct = function(nums) {
    let max = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
        prevMax = Math.max(...options);
        prevMin = Math.min(...options);
        
        max = Math.max(max, prevMax);
    }
    
    return max;
};
---------------------------------------------
    */
function maxProduct(nums) {
  let res = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;
  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
  }
  return res;
}
==============================================================================================================================================================================
 Subarray Sum Equals K:
/* https://www.youtube.com/watch?v=MHocw0bP1rA
var subarraySum = function(nums, k) {
    let count =0;
    for(let i =0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum += nums[j]
            if(sum===k){
                count++;
            }
        }
    }
    return count;
    
};
console.log(subarraySum([1,2,3],3))
------------------------------------------------
*/
const subarraySum = (nums, k) => {
    const hashmap = {0: 1}
    //making a prefix array sum, where we assuming sum is zero and its freq is 1.
    let count = 0, total = 0
    for(const num of nums) {
        total += num
        if(hashmap[total - k]) count += hashmap[total - k] //prefix-k
        hashmap[total] ? hashmap[total]++ : hashmap[total] = 1
    }
    return count
};
===========================================================================================================================================================================
Lowest Common Ancestor of a Binary Tree:
/*var lowestCommonAncestor = function(root, p, q) {
  if(!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
};
----------------------------------------------
*/
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
};
=====================================================================================================================================================================
Symmetric Tree :
/*var isSymmetric = function(root) {
    const isMirror = (t1, t2) => {
        if (t1 === null && t2 === null) {
            return true;
        }
        if (t1 === null || t2 === null) {
            return false;
        }
        return t1.val === t2.val 
            && isMirror(t1.left, t2.right) 
            && isMirror(t1.right, t2.left);
    };
    return isMirror(root, root);
};
------------------------------------------------
var isSymmetric = function(root) {
  if(!root) return true;
  return dfs(root.left, root.right);
};

function dfs(s, t){
  if(!s && !t) return true;
  if(!s || !t) return false;
  if(s.val !== t.val) return false;
  
  return dfs(s.left, t.right) && dfs(s.right, t.left)
}
---------------------------------------------
    */
var isSymmetric = function(root) {
    const queue = [];
    
    queue.push(root, root);
    
    while (queue.length > 0) {
        const node1 = queue.shift();
        const node2 = queue.shift();
        
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val != node2.val) return false;
        
        queue.push(node1.left, node2.right);            
        queue.push(node1.right, node2.left);
    }
    
    return true;
};
====================================================================================================================================================================
Validate Binary Search Tree:
/*var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
---------------------------------------------------------

function isValidBST(root, min, max) {
  if (!root) { 
    return true;
  }

  if (min !== undefined && root.val <= min) {
    return false;
  }

  if (max !== undefined && root.val >= max) { 
    return false;
  }
 
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max); 
}
---------------------------------------------------------
    */var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;
    
    let val = root.val;
    
    if (val <= lower || val >= upper) return false; 
    
    return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper)
};
========================================================================================================================================================================
Merge Intervals:
var merge = function(intervals) {    
    let i = 0;
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
  console.log(intervals)
    while(i < intervals.length-1) {
        const first = intervals[i];
        const second = intervals[i+1];
        if(second[0]<=first[1]) {
            first[1] = Math.max(first[1],second[1]);
            intervals.splice(i+1,1);
        } else i++;   
    }
    return intervals;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
========================================================================================================================================================================
Subsets II:
var subsetsWithDup = function(nums) {
    nums.sort()
    const result = [];
    
    function permute(arr, index) {
        result.push(arr)
        
        for(let i = index; i < nums.length; i++) {
            if(i !== index && nums[i] === nums[i-1]) continue; //to avoid duplicates
            permute([...arr, nums[i]], i+1)
        }
    }
    permute([], 0);
    return result;
};
========================================================================================================================================================================
Valid Parenthesis String:
/*let checkValidString = S => {
    let N = S.length;
    let go = (i = 0, open = 0) => {
        if (i == N)
            return open == 0;
        if (open < 0)
            return false;
        if (S[i] == '(') return go(i + 1, open + 1);
        if (S[i] == ')') return go(i + 1, open - 1);
        return go(i + 1, open - 1) || go(i + 1, open + 1) || go(i + 1, open); // '*' --> '(' || ')' || ''
    };
    return go();
};
------------------------------------
const checkValidString = s => {
    let lo = 0;
    let hi = 0;
    
    for (const c of s) {
        lo += c === '(' ? 1 : -1;
        hi += c !== ')' ? 1 : -1;
        if (hi < 0) break;
        lo = Math.max(lo, 0);
    }
    
    return lo === 0;
};
------------------------------------
var checkValidString = function (s) {
  let lmin = 0;
  let lmax = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      lmin++;
      lmax++;
    }
    if (s[i] === ")") {
      lmin--;
      lmax--;
    }
    if (s[i] === "*") {
      lmin--;
      lmax++;
    }
    if (lmin < 0) lmin++;
    if (lmax < 0) return false;
  }
  return lmin === 0;
};
console.log(checkValidString((*))))
------------------------------------------
*/
var checkValidString = function(s) {
    
    const openStack = [];
    const starStack = [];
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === '(') {
            openStack.push(i);
        } else if (s[i] === '*') {
            starStack.push(i);
        } else {
            if(openStack.length > 0) {
                openStack.pop();
            } else if(starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = openStack.length - 1;
    let j = starStack.length - 1;
    
    while(openStack[i] < starStack[j]) {
        openStack.pop();
        starStack.pop();
        i--;
        j--;
    }
    
    if(openStack.length === 0) {
        return true;
    } else {
        return false;
    }
};
========================================================================================================================================================================
Merge Sorted Array:
var merge = function(nums1, m, nums2, n) {
  let l1 = m - 1, 
      l2 = n - 1, 
      l3 = m + n - 1;
      
  while (l2 >= 0) {
    nums1[l3--] = nums1[l1] > nums2[l2]
      ? nums1[l1--]
      : nums2[l2--];
  }
};
/*var merge = function(nums1, m, nums2, n) {
  let idx1 = m - 1, 
      idx2 = n - 1, 
      idx3 = m + n - 1;
      
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2]
      ? nums1[idx1--]
      : nums2[idx2--];
  }
};
----------------------------------------------
var merge = function(nums1, m, nums2, n) {
    
   let len = nums1.length - 1
   m--;
   n--;
    
   while (n >= 0) {
       if (nums1[m] > nums2[n]) {
           nums1[len] = nums1[m], m--
       } else {
           nums1[len] = nums2[n], n--
       }
       len--
   
   }
   return nums1
    
};
----------------------------------------------
var merge = function(nums1, m, nums2, n) {    
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    nums1.sort((a, b) => a - b);
};
----------------------------------------------

var merge = function(nums1, m, nums2, n) {
let nums1_part = nums1.slice(0, m);
let nums2_part = nums2.slice(0, n);
let nums3 = nums1_part.concat(nums2_part);
return nums3.sort((a, b) => a > b ? 1: -1);
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
---------------------------------------------------
My own solution:
function mergedTwoArrays(arr1,arr2){
   let mergedArray= [];
   let i = 0, j=0;
   while((i < arr1.length)&&(j< arr2.length)){
     if(arr1[i]<arr2[j]){
         mergedArray.push(arr1[i]);
         i++;  
      }
      else{
         mergedArray.push(arr2[j]);
         j++;
      }   
    }
   if(i<=(arr1.length-1)){    
     arr1.splice(0,i);
     mergedArray=mergedArray.concat(arr1);
   }
   else if(j<=(arr2.length-1)){
     arr2.splice(0,j);
     mergedArray=mergedArray.concat(arr2);  
   }
   return mergedArray;
}
console.log(mergedTwoArrays([1,2,3,4], [2,5,6]))
========================================================================================================================================================================
Sum of Unique Elements:
/*var sumOfUnique = function(nums) {
    let result = []
    nums.forEach((item)=>{
        if(nums.indexOf(item) === nums.lastIndexOf(item)){
            result.push(item)
        } 
    })
    return result.reduce((acc,curr) => acc + curr , 0)
};
--------------------------------------------------------
var sumOfUnique = nums => nums
                   .filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
                   .reduce((acc, curr) => acc + curr, 0)
                   
-------------------------------------------------------
var sumOfUnique = function(nums) {
    let map = {}
    let sum = 0

    for (let num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1
    }

    for (let key in map) {
        if (map[key] === 1) sum = sum + Number(key) // sum += +key;
    } 
    
    return sum
};
--------------------------------------------------------
*/
var sumOfUnique = function(nums) {
    nums = nums.sort()
    let number = {}
    let count = 0
    for (let num of nums) {
        number[num] ? number[num]++ : number[num] = 1
    }
    for (let [key, value] of Object.entries(number)) {
        if (value === 1) {
            count += parseInt(key)
        }
    }
    return count
};
========================================================================================================================================================================
Shuffle the Array:
/*var shuffle = function(nums, n) {
    let res = []
    for(let i=0; i < n; i++){  
        res.push(nums[i])
        res.push(nums[i+n])
    }
    return res 
};
-------------------------------------------
*/
var shuffle = function(nums, n) {
    let res = []
    for(let i=0; i < n; i++){  
      res.push(nums[i],nums[i+n])
    }
    return res 
};
========================================================================================================================================================================
Second Largest Digit in a String :
var secondHighest = function(s) {
    const numbers = new Set('0123456789'); 
    let max = -1, secondMax = -1;
    for (const char of s) {
        if (!numbers.has(char)) {
            continue; //not run for alphabets
        }
        
        const num = Number(char);
        
        if (num === max) {
            continue;
        }
        
        if (num > max) {
            secondMax = max;
            max = num;
            continue;
        }
        
        if (num > secondMax) {
            secondMax = num;
        }
    }
    
    return secondMax;
};
/*------------------------------------------------
var secondHighest = function(s) {
    const res = [...new Set(s.split(""))].filter(x => !isNaN(x)).sort((a, b) => b-a);
    return res.length < 2 ? -1 : res[1];
}; 
------------------------------------------------
var secondHighest = function(s) {
  let number_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  let arr = []
  for(const element of s){
    if(number_arr.includes(element)){
      arr.push(element)
    }
  }
  let sorted_arr = [... new Set(arr)].sort((a,b) => a-b)
  let result = sorted_arr[sorted_arr.length -2]


  return result || -1
};
----------------------------------------------
var secondHighest = function(s) {
    let result = new Set();
    for(let val of s){
      if(!isNaN(val) ){
        result.add(+val)
      }
    }
  let sorted = Array.from(result).sort((a,b) => b-a);
  return sorted.length <= 1 ? -1 : sorted[1];    
};
-----------------------------------------------
var secondHighest = function(s) {
    let result = []
    for(let character of s){
        if(Number(character)){
            result.push(+character)
        }
    }
    
    result.sort((a,b)=>b-a)
    return result.length ? result[1] : -1
};
//console.log(secondHighest("dfa12321afd"))
----------------------------------------------
*/
========================================================================================================================================================================
Rotate String:
/*var rotateString = function(s, goal) {
	return s.length == goal.length &&  (goal + goal).indexOf(s) != -1
}; 
------------------------------------------------
var rotateString = function (s, goal) {
  return  s.length === goal.length && (s + s).includes(goal) ;
};
------------------------------------------------
var rotateString = function(s, goal) {
 let arr1=s.split("");
 let arr2=goal.split("");
   
    let i=1;
    while(i!=arr1.length){
        let a=arr1.pop();
        arr1.unshift(a);
        if(arr1.join("")==arr2.join("")){
            return true;
        }
        i++;
    }
return false;
};
------------------------------------------------
*/
var rotateString = function(A, B) {
    const arr = A.split('')    
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr.shift())
        if (arr.join('') === B) {
            return true
        }
    }
    return false
};
========================================================================================================================================================================
Pow(x, n) :
/*var myPow = function(x, n) {
    return Math.pow(x,n).toFixed(5)
};
---------------------------------------------
var myPow = function(x, n) {
    if (n === 0) return 1
    else if (n === 1) return x;
    else if (n === -1) return 1 / x;
    else if (n % 2 === 0) {
        const m = myPow(x, n/2);
        return m * m
    }
    else return x * myPow(x, n - 1);
};
----------------------------------------------
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) [x, n] = [1/x, -n];
    return (n%2 === 0) ? myPow(x*x, n/2) : x*myPow(x, n-1);
};
-----------------------------------------------
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow(x, -n);
    // n is even : x^n = (x^2)^(n/2);
    if ((n & 1) === 0) return myPow(x * x, n/2);
    // n is odd : x^n = (x^2)^((n-1)/2) * x;
    return x * myPow(x * x, (n - 1)/2);
};
-------------------------------------------------
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return 0;

  if (n > 0) {
    return (n % 2 === 1 ? x : 1) * myPow(x * x, Math.floor(n / 2));
  } else {
    return myPow(1 / x, -n);
  }
};
-------------------------------------------------
var myPow = function(x, n) {
    if (n===0) return 1;
    
    let pow = Math.abs(n);
    
	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    
    return n < 0 ? 1/result : result;
};
-------------------------------------------------
    */
function myPow(x,n) {

    //idea: if x^2n = (x^n)^2 => pow(x,2n) = pow(pow(x,n),2)
    
    if (n<0){
        return myPow(1/x, -1*n);
    }

    if (n===0){
        return 1;
    }

    if (n===1){
        return x;
    }

    if (n === 2){
        return x*x
    }

    let half = Math.floor(n/2);

    if (n%2===0){
        return myPow(myPow(x, half),2);
    }
    else{
        return x * myPow(myPow(x, half),2);
    }


}
========================================================================================================================================================================
Median of Two Sorted Arrays:
/*var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    
    let i = Math.ceil(arr.length/2) - 1
    
    return arr.length % 2 === 0 ? (arr[i] + arr[i+1])/2 : arr[i]
};
--------------------------------------------------------------------
var findMedianSortedArrays = function(arr1, arr2) {
 let mergedArray= [];
   let i = 0, j=0;
   while((i < arr1.length)&&(j< arr2.length)){
     if(arr1[i]<arr2[j]){
         mergedArray.push(arr1[i]);
         i++;  
      }
      else{
         mergedArray.push(arr2[j]);
         j++;
      }   
    }
   if(i<=(arr1.length-1)){    
     arr1.splice(0,i);
     mergedArray=mergedArray.concat(arr1);
   }
   else if(j<=(arr2.length-1)){
     arr2.splice(0,j);
     mergedArray=mergedArray.concat(arr2);  
   }
    let k = Math.ceil(mergedArray.length/2) - 1
    return mergedArray.length % 2 === 0 ? (mergedArray[k] + mergedArray[k+1])/2 : mergedArray[k];
}    
-------------------------------------------------------------------
const findMedianSortedArrays = (nums1, nums2) => {
    const len = nums1.length + nums2.length;
    const mid = len / 2 + 1 | 0;
	
    let i = 0, j = 0, k = 0, last, beforeLast;
    while (i++ < mid) {
        beforeLast = last;
        last = nums1[j] < (nums2[k]??Infinity) ? nums1[j++] : nums2[k++];
    }
    return len % 2 === 1 ? last : (last + beforeLast) / 2;
};
------------------------------------------------------------------
*/
function findMedianSortedArrays(nums1, nums2) {
  const len = nums1.length + nums2.length;
  const nums = [];
  let l = 0, r = 0;
  // Merge arrays
  while (nums.length < len) {
    if (nums1[l] < nums2[r] || r >= nums2.length) {
      nums.push(nums1[l++]);
    }
    else if (nums1[l] >= nums2[r] || l >= nums1.length) {
      nums.push(nums2[r++]);
    }
  }
  // Calculate and return median
  return (len % 2
    ? nums[Math.floor(len / 2)]
    : (nums[len / 2 - 1] + nums[len / 2]) / 2);
};
========================================================================================================================================================================
========================================================================================================================================================================
========================================================================================================================================================================
========================================================================================================================================================================
========================================================================================================================================================================
========================================================================================================================================================================