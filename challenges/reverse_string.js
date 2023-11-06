const reverseString = (str) => {
        return str.split('').reverse().join('')
}
const reverseString2 = (str) =>{
    let reversedString = '';
    for(const char of str){
        reversedString = char + reversedString;
    }
    return reversedString;
}
module.exports = {
    reverseString2,
    reverseString
}
//console.log(reverseString2('hello'))