Package.describe({
  name: 'my:testpckg',
  version: '0.0.1',
  summary: 'Test for meteor PR 4907, javascript with strict mode',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');

  api.pckgscope('MyClassCommon')
  api.export('MyExport');

  api.addFiles('testpckg_common.js');
  api.addFiles('testpckg_client.js','client');
  api.addFiles('testpckg_server.js','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('my:testpckg');

  api.addFiles('testpckg_common-tests.js');
  api.addFiles('testpckg_client-tests.js','client');
  api.addFiles('testpckg_server-tests.js','server');

});
