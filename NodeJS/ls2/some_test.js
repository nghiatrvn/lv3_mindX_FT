
//class in JS
/* class Course{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const item1 = new Course('hat', 1000);
const item2 = new Course('shose', 2000);

console.log(item1);
console.log(item2); */


//structure set in ES6
//vd1:
/* const mySet = new Set(['a', 'a', 'b', 1, 2, 1])
console.log(mySet)
mySet.add('c').add({'a': 1})
console.log(mySet)
console.log(mySet.size) 

mySet.has(1) // true */


//vd2:
/* const set = new Set(['a', 'b', 'c'])

for (let item of set.keys()) {
  console.log(item)
}

for (let item of set.entries()) {
    console.log(item)
  }

for (let i of set) {
    console.log(i)
  }

set.forEach((value, key) => console.log(key + ' : ' + value)) */

////structure map in ES6
/* const m1 = new Map([['a', 111], ['b', 222]])
console.log(m1) // {"a" => 111, "b" => 222}
m1.get('a')  // 111

const m2 = new Map([['c', 3]])
const m3 = new Map(m2)
m3.get('c') // 3
m3.has('c') // true
m3.set('d', 555)
m3.get('d') // 555 */


//structure QUEUE
/* class Queue {
  constructor() {
  this.queue = []
  }
  
  enqueue(element) {
  this.queue.push(element)
  }
  
  dequeue() {
  if (this.isEmpty()) return 'Queue is empty' 
  return this.queue.shift()
  }
  
  peek() {
  if (this.isEmpty()) return 'Queue is empty'
  return this.queue[0]
  }
  
  // helper method
  isEmpty() {
  return !this.queue.length
  }
  } */