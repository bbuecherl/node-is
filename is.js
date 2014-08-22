/*! is.js v0.5.0-1408231206
 * by @bbuecherl
 * License: MIT
 */
"use strict";
(function(factory) {
  if (typeof module === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(["is"], factory);
  } else {
    window.is = factory();
  }
}(function() {
  "use strict";
  String.prototype.startsWith = String.prototype.startsWith || function(str, offset) {
    offset = offset || 0;
    return this.substring(offset, offset + str.length) === str;
  };
  var _number = "number",
      _bool = "boolean",
      _funct = "function",
      _object = "object",
      _string = "string",
      _undef = "undefined",
      _not = "!",
      _iterator = "@@iterator",
      _obj = {},
      _array = [],
      _regexp = new RegExp(_not),
      _isRegExpObject = (typeof _regexp === _object),
      _toString = (function(o) {
        return _obj.toString.call(o);
      }),
      _arr = _toString(_array),
      _regex = _toString(_regexp),
      _err = _toString(new Error()),
      _errorTypes = ["TypeError", "ReferenceError", "SyntaxError", "URIError", "EvalError", "RangeError"];
  if (typeof Symbol === _undef) {
    (this || (typeof global !== _undef ? global : false) || window).Symbol = {};
  }
  if (typeof Symbol.iterator === _undef) {
    Symbol.iterator = _iterator;
  }
  if (typeof Array.prototype[Symbol.iterator] === _undef) {
    Array.prototype[Symbol.iterator] = function() {
      var index = 0,
          array = this;
      return {next: (function() {
          return (index < array.length ? {
            value: array[index++],
            done: false
          } : {
            value: undefined,
            done: true
          });
        })};
    };
  }
  var is = {
    Number: (function(val) {
      return typeof val === _number;
    }),
    Integer: (function(val) {
      return is.Number(val) && is.Finite(val) && Math.floor(val) === val;
    }),
    Float: (function(val) {
      return is.Number(val) && is.Finite(val) && Math.floor(val) !== val;
    }),
    Negative: (function(val) {
      return val < 0;
    }),
    Positive: (function(val) {
      return val > 0;
    }),
    NaN: (function(val) {
      return isNaN(val);
    }),
    Infinity: (function(val) {
      return val === Infinity || val === -Infinity;
    }),
    Finite: (function(val) {
      return !is.NaN(val) && !is.Infinity(val);
    }),
    Boolean: (function(val) {
      return typeof val === _bool;
    }),
    True: (function(val) {
      return is.Boolean(val) && true === val;
    }),
    False: (function(val) {
      return is.Boolean(val) && true !== val;
    }),
    String: (function(val) {
      return typeof val === _string;
    }),
    EmptyString: (function(val) {
      return is.String(val) && val.length === 0;
    }),
    Undefined: (function(val) {
      return typeof val === _undef;
    }),
    Defined: (function(val) {
      return !is.Undefined(val);
    }),
    Null: (function(val) {
      return val === null;
    }),
    Object: (function(val) {
      return typeof val === _object || (_isRegExpObject ? false : is.RegExp(val));
    }),
    Function: (function(val) {
      return typeof val === _funct && (_isRegExpObject ? true : !is.RegExp(val));
    }),
    Array: (function(val) {
      return _toString(val) === _arr;
    }),
    RegExp: (function(val) {
      return _toString(val) === _regex;
    }),
    RealObject: (function(val) {
      return is.Object(val) && !is.Function(val) && !is.Null(val) && !is.Array(val) && !is.RegExp(val) && !is.Error(val);
    }),
    Error: (function(val) {
      return _toString(val) === _err;
    }),
    RealError: (function(val) {
      for (var $__0 = _errorTypes[Symbol.iterator](),
          $__1; !($__1 = $__0.next()).done; ) {
        var e = $__1.value;
        {
          if (is[e](val)) {
            return false;
          }
        }
      }
      return is.Error(val);
    }),
    type: {of: (function() {
        for (var values = [],
            $__4 = 0; $__4 < arguments.length; $__4++)
          values[$__4] = arguments[$__4];
        return {
          equal: (function() {
            for (var args = [],
                $__5 = 0; $__5 < arguments.length; $__5++)
              args[$__5] = arguments[$__5];
            for (var $__2 = args[Symbol.iterator](),
                $__3; !($__3 = $__2.next()).done; ) {
              var test = $__3.value;
              {
                for (var $__0 = values[Symbol.iterator](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  var val = $__1.value;
                  {
                    if (is.Function(test) && !test(val)) {
                      return false;
                    } else if (is.String(test) && (test[0] === _not ? is[test.substring(1, test.length)](val) : !is[test](val))) {
                      return false;
                    } else if (!is.Function(test) && !is.String(test)) {
                      return false;
                    }
                  }
                }
              }
            }
            return true;
          }),
          either: (function() {
            for (var args = [],
                $__6 = 0; $__6 < arguments.length; $__6++)
              args[$__6] = arguments[$__6];
            for (var $__2 = args[Symbol.iterator](),
                $__3; !($__3 = $__2.next()).done; ) {
              var test = $__3.value;
              {
                for (var $__0 = values[Symbol.iterator](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  var val = $__1.value;
                  {
                    if (is.Function(test) && test(val)) {
                      return true;
                    } else if (is.String(test) && (test[0] === _not ? !is[test.substring(1, test.length)](val) : is[test](val))) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          })
        };
      })},
    expect: (function() {
      var toArray = (function(args) {
        return _array.slice.call(args, 0);
      }),
          listExpected = (function(args, lastSeperator) {
            var str = "";
            for (var ownFunct = 0,
                sep = "",
                i = 0; i < args.length; ++i) {
              if (i === args.length - 1) {
                str += " " + lastSeperator + " ";
              } else if (i !== 0) {
                str += ", ";
              }
              if (is.Function(arg)) {
                str += is.Defined(arg.name) ? arg.name : ("custom$" + ownFunct++);
              } else if (is.String(arg)) {
                str += arg;
              } else {
                return "unknown test statement";
              }
            }
            return str;
          });
      return {type: {of: (function() {
            for (var values = [],
                $__5 = 0; $__5 < arguments.length; $__5++)
              values[$__5] = arguments[$__5];
            var ref = is.type.of.apply(_array, values);
            return {to: {be: {
                  equal: (function() {
                    for (var args = [],
                        $__6 = 0; $__6 < arguments.length; $__6++)
                      args[$__6] = arguments[$__6];
                    if (!ref.equal.apply(_array, args)) {
                      var exp = listExpected(args, "and"),
                          arr = toArray(args),
                          err = new Error("expected " + arr + " to be " + exp);
                      err.name = "AssertionError";
                      err.actual = arr;
                      err.expected = exp;
                      err.showDiff = true;
                      throw err;
                    }
                  }),
                  either: (function() {
                    for (var args = [],
                        $__7 = 0; $__7 < arguments.length; $__7++)
                      args[$__7] = arguments[$__7];
                    if (!ref.either.apply(_array, args)) {
                      var exp = listExpected(args, "or"),
                          arr = toArray(args),
                          err = new Error("expected " + arr + " to be " + exp);
                      err.name = "AssertionError";
                      err.actual = arr;
                      err.expected = exp;
                      err.showDiff = true;
                      throw err;
                    }
                  })
                }}};
          })}};
    }()),
    extend: (function(name, fn) {
      if (is.String(name) && is.Function(fn) && !is.hasOwnProperty(name)) {
        is[name] = fn;
      }
    })
  };
  var errorTest = function(err) {
    return (function(val) {
      return val.toString().startsWith(err);
    });
  };
  for (var $__0 = _errorTypes[Symbol.iterator](),
      $__1; !($__1 = $__0.next()).done; ) {
    var e = $__1.value;
    {
      is[e] = errorTest(e);
    }
  }
  return is;
}));

//# sourceMappingURL=is.js.map
