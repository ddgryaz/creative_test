const stringAlgorithms = require("string-algorithms");
let stringA = 'aababba';
let stringB = 'abbaabcd';


function substrings(str1, str2) {
    const arr = [];
    let result;
    arr.push(str1, str2);
    result = (stringAlgorithms.longestCommonSubstring(arr)).join()
    console.log(`Входные данные - ${str1}, ${str2}. На выходе - ${result}`);
}

substrings(stringA, stringB);