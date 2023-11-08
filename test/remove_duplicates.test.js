const removeDuplicates = require('../challenges/remove_duplicates')

test('remove-duplicates', ()=>{
    expect(removeDuplicates([1,2,3,4,3,4])).toEqual([1,2,3,4])
    expect(removeDuplicates([true, false, true, false, true, true])).toEqual([true, false])
})
