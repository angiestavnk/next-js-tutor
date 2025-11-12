
// // Create a function createCounter that returns two functions: one to increment the counter and one to reset it. Ensure the counter value is not directly accessible from outside.
// let i = 9

// const createCounter = () => {
//   let count = 0

//   console.log(i)

//   var x = 'test'

//   if(true) {
//     console.log(acc, i)
//     var acc = 0;
//   }

//   console.log(x)
//   const increment = () => {
//     count++

//     return count
//   }

//   function reset() {
//     count = 0
//     return count
//   }

//   return { increment, reset }
// }

// const counterCall = createCounter()
// counter = counterCall.increment()
// decrement = counterCall.reset()

// console.log(counter, decrement)
// console.log(x)

// Write a loop that schedules logs of numbers from 1 to 5 with a delay. 
// The output must log 1, 2, 3, 4, 5 correctly after each second. 
// You must explain why a naive solution doesn’t work and fix it.
// const logNumbers = () => {
//   for(let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
// }

// logNumbers()

// Implement a function once(fn) that ensures the passed function 
// can only be executed once — further calls should return the first result.

// function once(fn) {
//   let called = false
//   let result

//   return function(...args) {
//     if(!called) {
//       result = fn(...args)
//       called = true
//     }
//     return result
//   }
// }

// const innerFun = (i) => {
//   return i++
// }
// const funcRes = once(innerFun)
// console.log(funcRes(12))

// Given an object with a method, extract the method into a variable and call it. 
// Make it work so that this inside the method still refers to the original object.
const model = 12

const anotherCar = {
  model: 'Benz',
  year: 1998,
  showModel: (model, year) => {
  console.log(this.model);
  }
};

anotherCar.showModel()

const arrowFn = () => console.log(this);
arrowFn();