class MyClassServer extends MyClassCommon
  constructor: ->
    super
    console.log 'MyClassServer constructor'

  aServerMethod: (input) ->
    return input + 3


MyExport = new MyClassServer
