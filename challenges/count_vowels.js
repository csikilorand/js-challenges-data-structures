const countVowels = (str) =>{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    str = str.toLowerCase();
    let countVowels = 0;
    for(let i of str){
        //console.log(i)
        if(vowels.includes(i))
            countVowels ++;
    }
    return countVowels;
}
//console.log(countVowels('hello'));
module.exports = countVowels;