const helloWorld = require('../challenges/hello_world');


test('return string Hello World!', () =>{
    const result = helloWorld();
    expect(result).toBe('Hello World!');
})