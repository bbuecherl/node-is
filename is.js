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
        try {
          throw undefined;
        } catch (e) {
          e = $__1.value;
          {
            if (is[e](val)) {
              return false;
            }
          }
        }
      }
      return is.Error(val);
    }),
    type: {of: (function() {
        for (var values = [],
            $__6 = 0; $__6 < arguments.length; $__6++)
          values[$__6] = arguments[$__6];
        return {
          equal: (function() {
            for (var args = [],
                $__7 = 0; $__7 < arguments.length; $__7++)
              args[$__7] = arguments[$__7];
            for (var $__4 = args[Symbol.iterator](),
                $__5; !($__5 = $__4.next()).done; ) {
              try {
                throw undefined;
              } catch (test) {
                test = $__5.value;
                {
                  if (is.Function(test)) {
                    for (var $__0 = values[Symbol.iterator](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      try {
                        throw undefined;
                      } catch (val) {
                        val = $__1.value;
                        {
                          if (!test(val))
                            return false;
                        }
                      }
                    }
                  } else if (is.String(test)) {
                    for (var $__2 = values[Symbol.iterator](),
                        $__3; !($__3 = $__2.next()).done; ) {
                      try {
                        throw undefined;
                      } catch (val) {
                        val = $__3.value;
                        {
                          if (test[0] === _not ? is[test.substring(1, test.length)](val) : !is[test](val)) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }
                }
              }
            }
            return true;
          }),
          either: (function() {
            for (var args = [],
                $__8 = 0; $__8 < arguments.length; $__8++)
              args[$__8] = arguments[$__8];
            for (var $__4 = args[Symbol.iterator](),
                $__5; !($__5 = $__4.next()).done; ) {
              try {
                throw undefined;
              } catch (test) {
                test = $__5.value;
                {
                  if (is.Function(test)) {
                    for (var $__0 = values[Symbol.iterator](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      try {
                        throw undefined;
                      } catch (val) {
                        val = $__1.value;
                        {
                          if (test(val))
                            return true;
                        }
                      }
                    }
                  } else if (is.String(test)) {
                    for (var $__2 = values[Symbol.iterator](),
                        $__3; !($__3 = $__2.next()).done; ) {
                      try {
                        throw undefined;
                      } catch (val) {
                        val = $__3.value;
                        {
                          if (test[0] === _not ? !is[test.substring(1, test.length)](val) : is[test](val)) {
                            return true;
                          }
                        }
                      }
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
                $__7 = 0; $__7 < arguments.length; $__7++)
              values[$__7] = arguments[$__7];
            var ref = is.type.of.apply(_array, values);
            return {to: {be: {
                  equal: (function() {
                    for (var args = [],
                        $__8 = 0; $__8 < arguments.length; $__8++)
                      args[$__8] = arguments[$__8];
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
                        $__9 = 0; $__9 < arguments.length; $__9++)
                      args[$__9] = arguments[$__9];
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
    }())
  };
  for (var $__0 = _errorTypes[Symbol.iterator](),
      $__1; !($__1 = $__0.next()).done; ) {
    try {
      throw undefined;
    } catch (e) {
      e = $__1.value;
      {
        is[e] = (function(val) {
          return val.toString().startsWith(e);
        });
      }
    }
  }
  return is;
}));

//# sourceMappingURL=is.js.map
