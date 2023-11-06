const titleCase = require('../challenges/title_case')

test('title-case', () => {
    expect(titleCase("hello world")).toBe("Hello World");
    expect(titleCase("HALLO WAS du")).toBe("Hallo Was Du");
})