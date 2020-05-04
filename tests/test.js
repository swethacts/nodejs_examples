var expect = require('chai').expect;
var maths = require('./addNumbers');

describe('maths()', function() {
    it ('should add numbers', function() {
        var x = 2;
        var y = 5;
        var expectedv = x + y;
        var actualv = maths(x, y);
        expect(actualv).to.be.equal(expectedv);
    });
});