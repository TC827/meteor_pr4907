Tinytest.add('aCommonMethod', function(test) {
  test.equal(MyExport.aCommonMethod(3), 4);
  test.equal(typeof MyClassCommon, 'undefined', 'MyClassCommon is undefined');
  test.equal(typeof MyClassClient, 'undefined', 'MyClassClient is undefined');
  test.equal(typeof MyClassServer, 'undefined', 'MyClassServer is undefined');
  test.notEqual(typeof MyExport, 'undefined', 'MyExport is defined');
});
