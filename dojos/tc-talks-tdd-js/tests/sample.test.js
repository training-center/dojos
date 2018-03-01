var assert = require('assert');
var fizzbuzz = require('../index.js');

describe('Implementação do FizzBuzz', function() {
  describe('Fizz', function() {
    const ary = [];
    before(function() {
      for (let i = 1; i <= 100; i++) {
        ary.push(i);
      }
    })   
    
    it('should return Fizz when number is divisible by 3', function() {
      var result = fizzbuzz(ary);
      assert.equal(result[2], 'Fizz');
    });
    it('should return Buzz when number is divisible by 5', function() {
      var result = fizzbuzz(ary);
      assert.equal(result[4], 'Buzz');
    });
    it('should return FizzBuzz when number is divisible by 3 and 5', function() {
      var result = fizzbuzz(ary);
      assert.equal(result[14], 'FizzBuzz');
    });
    it('should return the number', function() {
      var result = fizzbuzz(ary);
      assert.equal(result[3], 4);
    });
  });
});
