'use strict';

var MyClassClient = function ()  {
  MyClassCommon.call(this);
  console.log('MyClassClient constructor');
};

Meteor._inherits(MyClassClient,MyClassCommon);
MyClassClient.prototype.aClientMethod = function(input) {
  return input + 2;
};

MyExport = new MyClassClient;
