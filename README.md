# is.js v0.5.2 [![Build Status](https://travis-ci.org/bbuecherl/node-is.png)](https://travis-ci.org/bbuecherl/node-is) #

### simplified descriptive type testing library ###

[![NPM](https://nodei.co/npm/node-is.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-is/)

Supporting Node, AMDs and the browsers ( IE 6+, Chrome 1+, Firefox 3.6+, Opera 12.1+, Safari 5.1+ )

-----
## Usage ##

### node.js ###
Install node-is as dependency using npm in the command line
```
> npm install node-js --save
```

Include the module in your projects javascript file
```
var is = require("node-is");
```

### Browser ###
Download the code from Github: [is.min.js][3]

Include it in your project
```
<script src="path/to/is.min.js" type="text/Javascript"></script>
```

-----
## Test functions, returning true, when type is matching ##
- `is.Number(1)` test for numbers
- `is.Integer(1)` test for integers
- `is.Float(.001)` test for floating point numbers
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
- `is.EmptyArray([])` test for empty arrays
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

-----
## Multitest function `is.type.of(obj1[, obj2[, obj3[, ...]]])` ##
returns two testing functions:

- `equal()` which can be used to test for various types that have to match all, e.g.: `is.type.of(1,0).equal("Number","Integer","!Negative"); // returns true`
- `either()` to test for various types, where at least one has to match, e.g.: `is.type.of(1,0,2).either("Float","Integer"); //returns true`

`equal()` and `either()` can be used to test with custom functions too:
`is.type.of("hello", "world").equal("String", "!EmptyString", function(elm) { return elm[3]==="l"; }); //returns true`

-----
## Use with [mocha][2] `is.expect` ##
You can now check types for your tests with mocha.
Example:

```
var expect = require("node-is").expect;

describe("moche with node-is example", function() {
    it("is easy and awesome", function() {
            expect.type.of(1).to.be.equal("Integer", "Positive");
            expect.type.of(-1).to.be.either("Positive", "Negative");
    });
});
```

-----
## Extend is.js using custom test functions `is.extend(name, fn)` ##
Parameters:
 - `name` {`String`} test name, the function will be registered to `is.<name>`
 - `fn` {`Function`} test function, should accept one argument and return a `Boolean`

Example:

```
// register
is.extend("HelloWorld", function(value) {
    return is.String(value) && value === "Hello, World!";
});

// use
is.HelloWorld("Hello, World!"); // returns true
is.HelloWorld("Hello, Earth!"); // returns false
```

-----
## Changelog: ##
- 0.5.2 Bower release
- 0.5.1 Bug fix on global object (browser), added `is.EmptyArray`, some small improvements
- 0.5.0 Added `is.extend`
- 0.4.1 Bug fix on error type testing, and some small fixes
- 0.4.0 Rewrote library in ES6, compiled using grunt-traceur
- 0.3.2 Performance optimization, added usage section to README, added detailed support information
- 0.3.1 bug fix [#1][4]
- 0.3.0 Added mocha support `is.expect`
- 0.2.0 `is.type.of` can now test an unlimited amount of arguments `is.type.of(..).equal()` and `is.type.of(..).either()` can now test custom functions too
- 0.1.1 Added travis test
- 0.1.0 initial version

-----
## License: ##
[MIT][1]


  [1]: http://bbuecherl.mit-license.org/
  [2]: http://mochajs.org/
  [3]: https://github.com/bbuecherl/node-is/blob/master/is.min.js
  [4]: https://github.com/bbuecherl/node-is/issues/1
