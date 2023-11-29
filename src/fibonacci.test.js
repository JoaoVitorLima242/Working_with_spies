// The next number is always the sum of the last numbers
// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,3

const {createSandbox} = require('sinon')
const Fibonacci = require('./fibonacci')
const sinon = createSandbox()

const fibonacci = new Fibonacci()

;(() => {
    {
        for(sequence of fibonacci.execute(5)) {
            console.log(sequence)
        }
    }
})()