var vows = require('vows')
  , assert = require('assert')
  , Hello = require('../hello.js');

var hello = new Hello();

vows
  .describe('Hello class')
  .addBatch({
    'ninja() method' : {
      topic: function() {
        return hello.ninja();
      },
      'レスポンスが「Hello Node Ninja」かチェックする': function(topic) {
        assert.equal(topic, 'Hello Node Ninja');
      }
    }
  })
  .export(module);