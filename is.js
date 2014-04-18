( function( global, factory ) {
    if( typeof module === "object" ) {
        module.exports = factory( );
    } else if( typeof define === "function" && define.amd ) {
        define( ["is"], factory );
    } else {
        global.is = factory( );
    }
}( this, function( ) {
    var that = {
        Number: function( obj ) {
            return ( typeof obj === "number" );
        },
        Integer: function( obj ) {
            return ( that.Number( obj ) && isFinite( obj ) && Math.floor( obj ) === obj  );
        },
        Negative: function( obj ) {
            return ( obj < 0 );
        },
        Positive: function( obj ) {
            return ( obj > 0 );
        },
        Float: function( obj ) {
            return ( that.Number( obj ) && isFinite( obj ) && Math.floor( obj ) !== obj );
        },
        NaN: isNaN,
        Finite: isFinite,
        Infinity: function( obj ) {
            return ( !isFinite( obj ) && !isNaN( obj ) );
        },
        Boolean: function( obj ) {
            return ( typeof obj === "boolean" );
        },
        False: function( obj ) {
            return ( that.Boolean( obj ) && true !== obj );
        },
        True: function( obj ) {
            return ( that.Boolean( obj ) && true === obj );
        },
        String: function( obj ) {
            return ( typeof obj === "string" );
        },
        EmptyString: function( obj ) {
            return ( that.String( obj ) && obj.length === 0 );
        },
        Undefined: function( obj ) {
            return ( typeof obj === "undefined" );
        },
        Defined: function( obj ) {
            return !that.Undefined( obj );
        },
        Null: function( obj ) {
            return ( obj === null );
        },
        Function: function( obj ) {
            // Chrome 1-12: RegExp are functions, ES5.1: RegExp is object
            return ( typeof obj === "function" && !that.RegExp( obj ) );
        },
        Array: function( obj ) {
            return ( Object.prototype.toString.apply( obj ) === "[object Array]" );
        },
        RegExp: function( obj ) {
            return ( Object.prototype.toString.apply( obj ) === "[object RegExp]" );
        },
        Object: function( obj ) {
            // Chrome 1-12: RegExp are functions, ES5.1: RegExp is object
            return ( typeof obj === "object" || that.RegExp( obj ) );
        },
        RealObject: function( obj ) {
            return ( that.Object( obj ) && !that.Null( obj ) && !that.Array( obj ) && !that.RegExp( obj ) && !that.Error( obj ) );
        },
        Error: function( obj ) {
            return ( Object.prototype.toString.apply( obj ) === "[object Error]" );
        },
        TypeError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 9 ) === "TypeError" );
        },
        ReferenceError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 14 ) === "ReferenceError" );
        },
        SyntaxError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 11 ) === "SyntaxError" );
        },
        URIError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 8 ) === "URIError" );
        },
        EvalError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 9 ) === "EvalError" );
        },
        RangeError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 10 ) === "RangeError" );
        },
        RealError: function( obj ) {
            return ( that.Error( obj ) && obj.toString( ).substr( 0, 5 ) === "Error" );
        },

        expect: ( function( ) {
            var toArr = function( args ) {
                    return Array.prototype.slice.call( args, 0 );
                },
                listExpected = function( args, lastSep ) {
                    var str = "", ownFunct = 0, sep = "";

                    for( var i = 0; i < args.length; ++i ) {
                        if( i == 1 ) {
                            str += ", ";
                        }
                        if( i == args.length -1 ) {
                            str += " " + lastSep + " ";
                        }

                        if( that.Function( args[i] ) ) {
                            if( that.Defined( args[i].name ) ) {
                                str += args[i].name;
                            } else {
                                str += "ownFunction_" + ( ownFunct++ );
                            }
                        } else if( that.String( args[i] ) ) {
                            str += args[i];
                        } else {
                            return "unkown test statement";
                        }
                    }

                    return str;
                };

            return {
                type: {
                    of: function( ) {
                        var args = arguments,
                            ref = that.type.of.apply( 0, args );

                        return {
                            to: {
                                be: {
                                    equal: function( ) {
                                        var ok = ref.equal.apply( 0, arguments );

                                        if( !ok ) {
                                            var exp = listExpected( arguments, "and" ),
                                                err = new Error( "expected " + toArr( args ) + " to be " + exp );
                                            err.name = "AssertionError";
                                            err.actual = toArr( args );
                                            err.expected = exp;
                                            err.showDiff = true;

                                            throw err;
                                        }
                                    },
                                    either: function( ) {
                                        var ok = ref.either.apply( 0, arguments );

                                        if( !ok ) {
                                            var exp = listExpected( arguments, "or" ),
                                                err = new Error( "expected " + toArr( args ) + " to be " + exp );
                                            err.name = "AssertionError";
                                            err.actual = toArr( args );
                                            err.expected = exp;
                                            err.showDiff = true;

                                            throw err;
                                        }
                                    }
                                }
                            }
                        };
                    }
                }
            };
        }( ) ),

        type: {
            of: function( ) {
                var args = arguments, i, j;
                return {
                    equal: function( ) {
                        for( var i = 0; i < arguments.length; ++i ) {
                            if( that.Function( arguments[i] ) ) {
                                for( j = 0; j < args.length; ++j ) {
                                    if( !arguments[i]( args[j] ) )
                                        return false;
                                }
                            } else if( that.String( arguments[i] ) ) {
                                for( j = 0; j < args.length; ++j ) {
                                    if( arguments[i][0] === "!" ) {
                                        if( that[arguments[i].slice(1)]( args[j] ) ) {
                                            return false;
                                        }
                                    } else {
                                        if( !that[arguments[i]]( args[j] ) ) {
                                            return false;
                                        }
                                    }
                                }
                            } else {
                                return false;
                            }
                        }
                        return true;
                    },
                    either: function( ) {
                        for( i = 0; i < arguments.length; ++i ) {
                            if( that.Function( arguments[i] ) ) {
                                for( j = 0; j < args.length; ++j ) {
                                    if( arguments[i]( args[j] ) )
                                        return true;
                                }
                            } else if( that.String( arguments[i] ) ) {
                                for( j = 0; j < args.length; ++j ) {
                                    if( arguments[i][0] === "!" ) {
                                        if( !that[arguments[i].slice(1)]( args[j] ) ) {
                                            return true;
                                        }
                                    } else {
                                        if( that[arguments[i]]( args[j] ) ) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        return false;
                    }
                };
            }
        }
    };
    return that;
} ) );
