const { reverseString} = require('../challenges/reverse_string')
const isPalindrome = (str) =>{
    str = removeAplhanumeric(str.toLowerCase());
    const reversedString = reverseString(str);
    return  str === reversedString;
}

function removeAplhanumeric(str){
    let newStr = '';
    for(let i = 0 ; i < str.length ; i++){
        if(isAlphaNumeric(str[i]))
            newStr += str[i]
    }
    return newStr;
}
function isAlphaNumeric(char){
    const code = char.charCodeAt()
    return (
        (code>= 48 && code <=57) || //numbers[0-9]
        (code >= 97 && code <123) //lowercase letters[a-z]
    )
}
const a = 'as$%^dsa';
console.log(isPalindrome(a))

module.exports = isPalindrome;