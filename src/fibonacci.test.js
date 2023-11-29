const { createSandbox } = require("sinon");
const assert = require("assert");
const Fibonacci = require("./fibonacci");

const sinon = createSandbox();


(() => {
    {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const mockInput = 30;
    const expectedCallCount = mockInput + 1;

    for(const sequence of fibonacci.execute(mockInput)) {
        // console.log({sequence})
    }

    assert.strictEqual(spy.callCount, expectedCallCount);
    
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const mockInput = 5;

    for(const sequence of fibonacci.execute(mockInput)) {
        // console.log({sequence})
    }

    const { args } = spy.getCall(2)

    const expectedParams = [3, 1, 2]

    assert.deepStrictEqual(args, expectedParams, );
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const mockInput = 5;

    const results = [...fibonacci.execute(mockInput)]

    const expectedResults = [0, 1, 1, 2, 3]

    assert.deepStrictEqual(results, expectedResults);
  }
})();
