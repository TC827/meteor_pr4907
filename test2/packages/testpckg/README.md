# Test 2 for [PR 4907](https://github.com/meteor/meteor/pull/4907)

_Package-scoped variables, new instruction api.pckgscope(), consequent update of
the coffeescript package #4907_

## Test

Test: coffeescript without strict mode

## Checks

- _MyExport_ is accessible
- _MyClassCommon_, _MyClassClient_, _MyClassServer_ are not accessible
