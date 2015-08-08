var MyClassServer = function ()  {
  MyClassCommon.call(this);
  console.log('MyClassServer constructor');
};

Meteor._inherits(MyClassServer,MyClassCommon);
MyClassServer.prototype.aServerMethod = function(input) {
  return input + 3;
};

MyExport = new MyClassServer;
