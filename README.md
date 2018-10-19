## Prime Factors
Made popular by [Uncle Bob](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata).

This kata demonstrates the [`transformation priority premise`](https://en.wikipedia.org/wiki/Transformation_Priority_Premise).

Write a function `generate` under a module `PrimeFactors` that, given an integer, returns the list
containing the prime factors in numerical sequence.

* 1 should return `[]`
* 2 should return `[2]`
* 3 should return `[3]`
* 4 should return `[2,2]`
* 5 should return `[5]`
* 6 should return `[2,3]`
* 7 should return `[7]`
* 8 should return `[2,2,2]`
* 9 should return `[3,3]`
* 4620 should return `[2,2,3,5,7,11]`