



/**
 * Dependencies
 */

var assert = require('component-assert');
var parseTime = require('parse-time');


describe('parseTime(time [, unit])', function(){

  it('should default to seconds', function() {
    assert(parseTime('20sec') === 20);
  });

  it('should accept format', function () {
    assert(parseTime('1h', 'min') === 60);
  });

  describe('seconds', function() {

    it('should parse 60s', function() {
      assert(parseTime('60s') === 60);
    })

    it('should parse 60 s', function() {
      assert(parseTime('60 s') === 60);
    })

    it('should parse 60sec', function() {
      assert(parseTime('60sec') === 60);
    })

    it('should parse 60 sec', function() {
      assert(parseTime('60 sec') === 60);
    })

    it('should parse 60seconds', function() {
      assert(parseTime('60seconds') === 60);
    })

    it('should parse 60 seconds', function() {
      assert(parseTime('60 seconds') === 60);
    })

  });

  describe('minutes', function() {

    it('should parse 10m', function() {
      assert(parseTime('10m') === 600);
    })

    it('should parse 10 m', function() {
      assert(parseTime('10 m') === 600);
    })

    it('should parse 10min', function() {
      assert(parseTime('10min') === 600);
    })

    it('should parse 10 min', function() {
      assert(parseTime('10 min') === 600);
    })

    it('should parse 10minutes', function() {
      assert(parseTime('10minutes') === 600);
    })

    it('should parse 10 minutes', function() {
      assert(parseTime('10 minutes') === 600);
    })

  });
  
  describe('hours', function(){

    it('should parse 10h', function() {
      assert(parseTime('10 h') === 36000);
    })

    it('should parse 10 h', function() {
      assert(parseTime('10 h') === 36000);
    })

    it('should parse 10hrs', function() {
      assert(parseTime('10hrs') === 36000);
    })

    it('should parse 10 hrs', function() {
      assert(parseTime('10 hrs') === 36000);
    })

    it('should parse 10hours', function() {
      assert(parseTime('10hours') === 36000);
    })

    it('should parse 10 hours', function() {
      assert(parseTime('10 hours') === 36000);
    })

  })
  
})
