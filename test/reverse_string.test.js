const { reverseString, reverseString2} = require('../challenges/reverse_string')

test('reverse- string', () =>{
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString2("abcd")).toEqual('dcba');

})