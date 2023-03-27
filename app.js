const LinkedList = require('./LinkedList')

const list = new LinkedList()
console.log('Add 18')
list.addFront(18)
console.log(list)
console.log('-----------     ')

console.log('Add 5')
list.addFront(5)
console.log(list)
console.log('-----------     ')

console.log('Add 73')
list.addFront(73)
console.log(list)
console.log('-----------     ')

console.log('Remove Front')
list.removeFront()
console.log(list)
console.log('-----------     ')

console.log('Remove Front')
list.removeFront()
console.log(list)
console.log('-----------     ')

console.log('Front')
console.log(list.front())
console.log('-----------     ')

console.log('Remove Front')
list.removeFront()
console.log('-----------     ')

console.log('Front')
console.log(list.front())
console.log('-----------     ')
