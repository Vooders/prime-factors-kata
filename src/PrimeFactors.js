class PrimeFactors {
  
  generate (number) {
    if (number > 1) {
      if (this.isPrime(number)) {
        return [number]
      } else {
        return this.factor(number)
      }
    }
    return []
  }

  factor (n, divider = 2) {
    let factors = []
    
    if (n % divider === 0) {
      factors.push(divider)
      const remainder = n/divider

      if (remainder > 1) {
        if (remainder % divider === 0) {
          factors = factors.concat(this.factor(remainder))
        } else if (this.isPrime(remainder)) {
          factors.push(remainder)
        } else {
          factors = factors.concat(this.factor(remainder, ++divider))
        }
      }
    }

    if (factors.length < 1) {
      return this.factor(n, ++divider)
    } else {
      return factors
    }
  }

  isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }
}

module.exports = PrimeFactors

