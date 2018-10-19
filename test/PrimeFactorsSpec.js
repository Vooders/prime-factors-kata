const PrimeFactors = require('../src/PrimeFactors')
const Gen = require('verify-it').Gen

describe('MyClass', () => {
  verify.it('1 should return []', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(1).should.eql([])
  })

  verify.it('2 should return [2]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(2).should.eql([2])
  })

  verify.it('3 should return [3]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(3).should.eql([3])
  })

  verify.it('4 should return [2,2]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(4).should.eql([2,2])
  })

  verify.it('5 should return [5]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(5).should.eql([5])
  })

  verify.it('6 should return [2,3]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(6).should.eql([2,3])
  })

  verify.it('7 should return [7]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(7).should.eql([7])
  })

  verify.it('8 should return [2,2,2]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(8).should.eql([2,2,2])
  })

  verify.it('9 should return [3,3]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(9).should.eql([3,3])
  })

  verify.it('4620 should return [2,2,3,5,7,11]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(4620).should.eql([2,2,3,5,7,11])
  })

  verify.it('should work for any random input', Gen.array(Gen.integerBetween(2000, 20000), 20), (testArray) => {
    const primeFactors = new PrimeFactors()
    testArray.forEach((n) => {
      console.log(`factoring ${n}`)
      const factors = primeFactors.generate(n)
      checkPrimes(factors).length.should.eql(0)
      multiply(factors).should.eql(n)
    })
  })

  const multiply = (factors) => {
    return factors.reduce((total, factor) => factor * total)
  }

  const checkPrimes = (factors) => {
    return factors.filter((factor) => !isPrime(factor))
  }

  const isPrime = (num) => {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

})
