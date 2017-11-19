let assert = require('assert');
let {minMaxSum, minSum, maxSum} = require('../index');

describe('Array', function() {
  describe('#minMaxSum', function() {
    it('should print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers.', function() {
      let numbers = [1,2,3,4,5];
      let result = minMaxSum(numbers);
      assert.equal("10 14", result);
    });
  });

  describe('#minSum', function(){
    it('should return the min sum', function(){
      let numbers = [2,4,5,-2,1];
      let result = minSum(numbers);
      assert.equal(5, result);
    });

  });

  describe('#maxSum', function(){
    it('should return the max sum', function(){
      let numbers = [3,5,-2,3,5];
      let result = maxSum(numbers);
      assert.equal(16, result);
    });

  });
});
