// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(arr) {
    let count = 1
    let starts = arr[0]

    while (count < arr.length){
        if (!arr[count].startsWith(starts)){
            starts = starts.slice(0, -1)
        }else count++
    }
    return starts
};