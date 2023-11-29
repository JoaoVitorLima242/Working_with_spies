# Spies
We use spies to test a function in addition to its return. With spies we can see how many times the function was triggered, its arguments and a lot more. 

## Our example
In our example, we create a Fibonacci (Fibonacci is a sequence in which each number is the sum of the two preceding ones) class using function generators (I am talking about that in the next topic) that receive a number of calls in the param and make a loop taking the last number and adding to the next. For example:

```
Number of calls: 5
[0, 1, 1, 2, 3]

The next number is the sum ot the precious ones.
```

## Generators
Generator is a special type of function that can be paused and resumed. It is defined using a asterisk in front the function expression like `function* myGeneratorFunction`, and it allows us to use the `yield` keyword to produce a sequence of values on-demand.

**Generators are iterators, and they are part of the ECMAScript 6 (ES6) standard.**

```
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Using the generator
const generator = numberGenerator();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined
console.log([...numberGenerator()]) // Output: [1, 2 ,3]

```