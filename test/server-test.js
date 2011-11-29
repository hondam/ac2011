var request = require('request')
  , vows = require('vows')
  , assert = require('assert');

vows
  .describe('server')
  .addBatch({
    'GET http://localhost:8080/' : {
      topic: function() {
        request({uri:'http://localhost:8080/'}, this.callback)
      },
      'レスポンスが「こんにちはNode Ninja」かチェックする': function(err, res, body) {
        assert.equal(body, 'こんにちはNode Ninja');
      }
    }
  })
  .export(module);