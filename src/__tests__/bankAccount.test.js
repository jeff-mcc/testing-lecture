import bankAccount from '../bankAccount'
// const {depositMoney,withdrawMoney} = require('../bankAccount')

describe('Bank account methods and properties',()=>{
    beforeEach(()=>{
        bankAccount.balance = 1000;
    })
    test('Initial balance is 1000',()=>{
        expect(bankAccount.balance).toBe(1000)
    })
    test('depositMoney should correctly alter balance by amount entered +50',()=>{
        bankAccount.depositMoney(50)
        expect(bankAccount.balance).toBe(1050)
    })
    test('widthdrawMoney should correctly alter balance by amount entered -50',()=>{
        bankAccount.withdrawMoney(50)
        expect(bankAccount.balance).toBe(950)
    })
})