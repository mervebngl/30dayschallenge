/* most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. If there are ties,
return the character that appears earlier in the string.

You can assume that the input string is non-empty. */

function mostFrequentChar(str){
    const charCount ={};
    let maxChar = '';
    let maxCount = 0;

    for(const char of str){
        charCount[char] = (charCount[char]|| 0) +1;

        if(charCount[char] > maxCount || (charCount[char] === maxCount && str.indexOf(char) < str.indexOf(maxChar))){
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}