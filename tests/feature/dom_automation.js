var React = require('react/addons'),
    _ = require('underscore');

var Simulate = React.addons.TestUtils.Simulate;

var click = function($el){
  expect($el).to.exist;
  Simulate.click($el[0]);
}

var fillIn = function($el,text){
  expect($el).to.exist;
  Simulate.change($el[0], {target: {value: text}});
}

var find = function($el,selector){
  return $el.find(selector);
}

var expectTo = function($el){
  return expect($el);
}

function domAutomation($el){
  return {
    //$el: _.constant($el),
    expectTo: _.partial(expectTo,$el),
    click: _.partial(click,$el),
    fillIn: _.partial(fillIn,$el),
    find: _.compose( domAutomation, _.partial(find,$el) )
  };
}

module.exports = domAutomation; 
