class MyClassClient extends MyClassCommon
  constructor: ->
    super
    console.log 'MyClassClient constructor'

  aClientMethod: (input) ->
    return input + 2


MyExport = new MyClassClient
