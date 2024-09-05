const reverse = require('./reverseString')

test('reverse function exixts',()=>{
    expect(reverse).toBeDefined()
})
test('returns a reverse string', ()=>{
    expect(reverse('abcd')).toEqual('dcba')
})
test('returns a reverse string with a space', ()=>{
    expect(reverse(' abcd')).toEqual('dcba ')
})