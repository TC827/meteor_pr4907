# Tests for [PR 4907](https://github.com/meteor/meteor/pull/4907)

_Package-scoped variables, new instruction api.pckgscope(), consequent update of
the coffeescript package #4907_

## **test1** coffeescript with strict mode

```bash
meteor create test1
cd test1
meteor add coffeescript
meteor create --package my:testpckg
meteor test-packages packages/testpckg
meteor add my:testpckg
```

## **test2** coffeescript without strict mode

## **test3** javascript with strict mode

## **test4** javascript without strict mode
