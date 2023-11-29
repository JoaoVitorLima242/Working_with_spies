class Fibonacci  {
    * execute (input, current = 0, next = 1) {
        if (!input) return
        
        yield current
        yield *this.execute(--input, next, current + next)
    }
}

module.exports = Fibonacci 