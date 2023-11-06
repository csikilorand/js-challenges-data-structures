const maxNum = require('../challenges/max_number')
const array1 =[]
for(let i=0; i<50; i++){
    array1.push(i)
    }
const array2 = [];
for(let i=0; i < (array1.length)/2; i++){
    array2.push(i);
}
test('maxNumber', () =>{
    expect(maxNum(array1)).toBe(49);
    expect(maxNum(array2)).toBe(24);
})