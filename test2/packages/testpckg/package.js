Package.describe({
  name: 'my:testpckg',
  version: '0.0.1',
  summary: 'Test for meteor PR 4907, coffeescript with strict mode',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.use('coffeescript');

  api.pckgscope('MyClassCommon')
  api.export('MyExport');

  api.addFiles('testpckg_common.coffee');
  api.addFiles('testpckg_client.coffee','client');
  api.addFiles('testpckg_server.coffee','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('my:testpckg');
  api.use('coffeescript');

  api.addFiles('testpckg_common-tests.coffee');
  api.addFiles('testpckg_client-tests.coffee','client');
  api.addFiles('testpckg_server-tests.coffee','server');

});
