const countVowels = require('../challenges/count_vowels');

test('count vowels', ()=>{
    expect(countVowels('hello')).toBe(2)
    expect(countVowels('alma fa')).toBe(3)
    expect(countVowels('lenovo')).toBe(3)
})