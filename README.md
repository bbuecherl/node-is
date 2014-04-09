is
====
simplified descriptive type testing library
-------------------------------------------
[![Build Status](https://travis-ci.org/bbuecherl/node-is.png)](https://travis-ci.org/bbuecherl/node-is)

Supporting Node, AMDs and the browsers

Test functions, returning true, when type is matching:
-----------------------------------------
- `is.Number(1)` test for numbers
- `is.Integer(1)` test for integers
- `is.Float(.001)` test for floating points
- `is.Negative(-1.5)` test for negative values
- `is.Positive(1.5)` test for positive values
- `is.NaN(NaN)` test for NaN (`isNaN` link)
- `is.Finite(1)` test for finite values (`isFinite` link)
- `is.Infinity(Infinity)` test for `Infinity` and `-Infinity`
- `is.Boolean(false)` test for boolans
- `is.True(true)` test for true booleans
- `is.False(false)` test for false booleans
- `is.String("is")` test for strings
- `is.EmptyString("")` test for empty strings
- `is.Undefined(undefined)` test for undefined
- `is.Defined({})` (`!is.Undefined`)
- `is.Null(null)` test for `null`
- `is.Function(function() {})` test for functions
- `is.Array([])` test for arrays
- `is.RegExp(/^/g)` test for regular expressions
- `is.Object({})` test for objects
- `is.RealObject({})` tests for *real* objects, `null`, arrays, regular expressions and errors will return **`false`**
- `is.Error(new Error())` test for errors
- `is.ReferenceError(new ReferenceError())` test for reference errors
- `is.TypeError(new TypeError())` test for type errors
- `is.SyntaxError(new SyntaxError())` test for syntax errors
- `is.URIError(new URIError())` test for uri errors
- `is.EvalError(new EvalError())` test for eval errors
- `is.RangeError(new RangeError())` test for range errors
- `is.RealError(new Error())` test for *real* `Error`-objects only, will not match `RangeError`, `EvalError`, `URIError`, `SyntaxError`, `TypeError`, `ReferenceError`


Multitest function `is.type.of(obj)`
------------------------------------
returns two testing functions:

-`equal()` which can be used to test for various types that have to match all, e.g.: `is.type.of(1).equal("Number","Integer","Positive"); // returns true`
- `either()` to test for various types, where at least one has to match, e.g.: `is.type.of(1).either("Float","Integer"); //returns true`


Changelog:
----------

- 0.1.1 Added travis test
- 0.1.0 initial version

Note:
-----
This library is currently under development


License:
--------
[MIT][1]


  [1]: http://bbuecherl.mit-license.org/
