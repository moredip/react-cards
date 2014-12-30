var mocha = require('mocha'),
    chai = require('chai');

(function(global){
  global.expect = chai.expect;
  global.appRequire = function(path){
    return require('../js/'+path);
  };
})(global||window);
