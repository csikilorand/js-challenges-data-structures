
const calculator = (num1, num2, operator) =>{
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':{
            if(num2 === 0){
                throw new Error('Cannot divide by zero');
            }
            else
                return num1 / num2;
        }
        default:
            throw new Error('Invalid operator');
    }
}
module.exports = calculator;