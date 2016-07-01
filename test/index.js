var should = require('chai').should(),
    roots = require('../index'),
    computer = roots.computer,
    promise = require('es6-promise');
promise.polyfill();


describe('#computer', function() {
    it('Math.pow(t, 2) - 9', function() {


        roots.computer(1, -100, 100, function(t) {
                var res = Math.pow(t, 2) - 9;
                return res;
            })
            .then(function(res) {
                res.min.should.equal(-3);
            });

    });

});