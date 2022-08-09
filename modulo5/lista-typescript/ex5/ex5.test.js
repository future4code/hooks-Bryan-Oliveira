const Export = require('./ex5.js')
const { users, returnAdminUsers} = Export
describe('it should return only admin users',()=>{
    test('it should return [	"ademir@email.com", "carina@email.com" ]', ()=>{
        const expectedReturn = [	"ademir@email.com", "carina@email.com" ]
        expect(returnAdminUsers(users)).toEqual(expect.arrayContaining(expectedReturn))
    })
})