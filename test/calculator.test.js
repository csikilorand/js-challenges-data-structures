const calc = require('../challenges/calculator')
const num1 = 5;
const num2 = 9;
test('addition', ()=> {
    let result = calc(num1, num2, '+');
    expect(result).toBe(14);
    expect(calc(num1, num2, '*')).toBe(45)
    expect(calc(num1, num2, '/')).toBeCloseTo(0.55, 1);
    expect(calc(num1, num2, '-')).toBe(-4);
})

