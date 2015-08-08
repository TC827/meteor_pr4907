MyClassCommon = (function() {
  function MyClassCommon() {
    console.log('MyClassCommon constructor');
  }

  MyClassCommon.prototype.aCommonMethod = function(input) {
    return input + 1;
  };

  return MyClassCommon;

})();
