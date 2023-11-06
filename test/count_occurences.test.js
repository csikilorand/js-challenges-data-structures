const occurence = require('../challenges/count_occurences')

test('count_occurences', ()=>{
    expect(occurence('hello', 'l')).toEqual(2)
    expect(occurence('hello', 'z')).toBe(0)
    expect(occurence('babel', 'g')).toBe(0)
})