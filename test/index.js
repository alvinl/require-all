
var should = require('should'),
    reqAll = require('../');

describe('require-all', function () {

  it('should require all .js and .json files', function (done) {

    var modules = reqAll(__dirname + '/test-modules');

    Object.keys(modules).length.should.be.exactly(3);
    modules.should.have.property('config');
    modules.should.have.property('controllers');
    modules.should.have.property('routes');
    modules.routes.should.have.property('home');
    modules.routes.should.have.property('views');

    return done();

  });

  it('should throw an error if the folder doesn\'t exist', function (done) {

    var modules;

    try {

      modules = reqAll(__dirname + '/404');

    } catch (err) {

      should.exist(err);
      return done();

    }

  });

});
