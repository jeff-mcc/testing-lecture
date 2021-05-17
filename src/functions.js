module.exports = {
  sum(a, b) {
    return a + b
  },
  sayHello() {
    return 'hello'
  },
  returnSomeObject: ()=>{
    const data = {one: 1}
    data['two'] = 2
    return data
  },
  returnsTrue: ()=>{
    return true
  },
  returnsArray:()=>{
    return ['John','Ariel','Zach']
  }
}