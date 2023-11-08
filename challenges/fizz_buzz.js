/*
if divisible by 3 than fizz
if divisible by 5 than buzz
if divisible by both fizzbuzz
*/
const fizzBuzz = (loop_until) =>{
    const array = [];
    for(let i =1; i<=loop_until; i++){
        if(i%3 ===0 && i%5 ===0){
            array.push('FizzBuzz')
        }
        else if(i %3 === 0){
            array.push('Fizz')
        }
        else if(i%5===0)
            array.push('Buzz')
        else
            array.push(i) 
    }
    return array;
}
module.exports = fizzBuzz; 