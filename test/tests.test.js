var test = require('tape')
var tryCatch = require('../')

test('returns value from "tryFn" when "tryFn" does not throw', function (t) {
  t.plan(1)
  var result = tryCatch(
    function() { return 123 },
    function() { return 'abc' }
  )
  t.equal(result, 123)
})

test('returns value from "catchFn" value when "tryFn" throws', function (t) {
  t.plan(1)
  var result = tryCatch(
    function() {
      throw new Error('ded')
      return 123
    },
    function() { return 'abc' }
  )
  t.equal(result, 'abc')
})

test('works without "catchFn" if "tryFn" does not throw', function (t) {
  t.plan(1)
  var result = tryCatch(function() { return 456 })
  t.equal(result, 456)
})

test('throws error if "tryFn" throws and no "catchFn" given', function (t) {
  t.plan(1)
  try {
    var result = tryCatch(function() { throw 789 })
  } catch (err) {
    t.equal(err, 789, 'error from "tryFn()" was not caught')
  }
})

