/* anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams.
 Anagrams are strings that contain the same characters, but in any order. */

 function anagrams(str1,str2){
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}