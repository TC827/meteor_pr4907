if (Meteor.isClient) {
  Template.mytempl.helpers({
    getMessage: function () {
      return '3 + 1 = ' + MyExport.aCommonMethod(3) +
        '; 3 + 2 = ' + MyExport.aClientMethod(3);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup( function () {
    console.log('3 + 1 = ' + MyExport.aCommonMethod(3));
    console.log('3 + 3 = ' + MyExport.aServerMethod(3));
  });
}
