var assert = require('assert')
  , Hello = require('../hello.js');

var hello = new Hello();

describe('Hello class', function() {
  describe("Hello.ninja()", function() {
    it ('レスポンスが「Hello Node Ninja」かチェックする', function(){
      assert.equal(hello.ninja(), 'Hello Node Ninja');
    });
  });
});