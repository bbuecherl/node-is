/*! is.js
 * by @bbuecherl
 * https://github.com/bbuecherl/node-is
 * License: MIT
 */
( function( factory ) {
    if( typeof module === "object" ) {
        module.exports = factory( );
    } else if( typeof define === "function" && define.amd ) {
        define( ["is"], factory );
    } else {
        window.is = factory( );
    }
}( function( ) {
"use strict";
    // references for frequently used stuff
    // global object
    var _global = this || ( function( ) {
            try {
                return ( typeof global !== _undef ? global : false );
            } catch( e ) {
                return false;
            }
        }( ) ) || window,

    //  typeof strings
        _number = "number",
        _bool = "boolean",
        _funct = "function",
        _object = "object",
        _string = "string",
        _undef = "undefined",
    // not identifier
        _not = "!",
    // default iterator
        _iterator = "@@iterator",
    // object references
        _obj = {},
        _array = [],
        _regexp = new RegExp( _not ),
    // are RegExp objects? ( fixing Chrome <13 )
        _isRegExpObject = ( typeof _regexp === _object ),
    // Object.prototype.toString.call(...) reference
        _toString = o => _obj.toString.call( o ),
    // toString values for array, regexp and error
        _arr = _toString( _array ),
        _regex = _toString( _regexp ),
        _args = _toString( arguments ),
        _err = _toString( new Error( ) ),
    // javascript error types
        _errorTypes = [ "TypeError", "ReferenceError",
            "SyntaxError", "URIError", "EvalError", "RangeError" ],
    // helper function
        _removeFirst = str => {
            return str.substring( 1 );
        };

    // polyfill startsWith
    String.prototype.startsWith = String.prototype.startsWith || function( str, offset ) {
        offset = offset || 0;
        return this.substring( offset, offset + str.length ) === str;
    };

    // polyfill es6 array iterator
    if( typeof _global.Symbol === _undef ) {
        _global.Symbol = { };
    }
    if( typeof Symbol.iterator === _undef ) {
        Symbol.iterator = _iterator;
    }
    if( typeof Array.prototype[Symbol.iterator] === _undef ) {
        Array.prototype[Symbol.iterator] = function( ) {
            var index = 0,
                array = this;
            return {
                next: ( ) => {
                    return ( index < array.length ?
                        { value: array[index++], done: false } :
                        { value: undefined, done: true } );
                }
            };
        };
    }

    // AssertionError constructor
    var assertionError = ( expected, actual ) => {
        var tmp = new Error( "expected " + actual + " to be " + expected );
        tmp.name = "AssertionError";
        tmp.actual = actual;
        tmp.expected = expected;
        tmp.showDiff = true;

        return tmp;
    };

    // is-object
    var is = {
        // numeric types
        Number: val => typeof val === _number,
        Integer: val => is.Number( val ) && is.Finite( val ) && Math.floor( val ) === val,
        Float: val => is.Number( val ) && is.Finite( val ) && Math.floor( val ) !== val,
        Negative: val => val < 0,
        Positive: val => val > 0,
        NaN: val => isNaN( val ),
        Infinity: val => val === Infinity || val === -Infinity,
        Finite: val => !is.NaN( val ) && !is.Infinity( val ),

        // boolean types
        Boolean: val => typeof val === _bool,
        True: val => is.Boolean( val ) && true === val,
        False: val => is.Boolean( val ) && true !== val,

        // strings
        String: val => typeof val === _string,
        EmptyString: val => is.String( val ) && val.length === 0,

        // definitions
        Undefined: val => typeof val === _undef,
        Defined: val => !is.Undefined( val ),

        //objects
        Null: val => val === null,
        Object: val => typeof val === _object || ( _isRegExpObject ? false : is.RegExp( val ) ),
        Function: val => typeof val === _funct && ( _isRegExpObject ? true : !is.RegExp( val ) ),
        Array: val => _toString( val ) === _arr,
        EmptyArray: val => is.Array( val ) && val.length === 0,
        RegExp: val => _toString( val ) === _regex,
        RealObject: val => is.Object( val ) && !is.Function( val ) && !is.Null( val ) &&
                !is.Array( val ) && !is.RegExp( val ) && !is.Error( val ),
        Arguments: val => _toString( val ) == _args,

        //errors
        Error: val => _toString( val ) === _err,
        RealError: val => {
            for( var e of _errorTypes ) {
                if( is[e]( val ) ) {
                    return false;
                }
            }
            return is.Error( val );
        },

        //type.of multitests
        type: {
            of: ( ...values ) => {
                return {
                    equal: ( ...args ) => {
                        for( var test of args ) {
                            for( var val of values ) {
                                if( is.Function( test ) && !test( val ) ) {
                                    return false;
                                } else if( is.String( test ) && ( test[0] === _not ?
                                        is[test.substring( 1, test.length )]( val ) : !is[test]( val ) ) ) {
                                    return false;
                                } else if( !is.Function( test ) && !is.String( test ) ) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    },
                    either: ( ...args ) => {
                        for( var test of args ) {
                            for( var val of values ) {
                                if( is.Function( test ) && test( val ) ) {
                                    return true;
                                } else if( is.String( test ) && ( test[0] === _not ?
                                        !is[test.substring( 1, test.length )]( val ) : is[test]( val ) ) ) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
                };
            }
        },

        // expect.type.of functional test function
        expect: ( function( ) {
            var toArray = args => _array.slice.call( args, 0 ),
                listExpected = ( args, lastSeperator ) => {
                    var str = "";

                    for( var ownFunct = 0, sep = "", i = 0, arg; i < args.length; ++i ) {
                        arg = args[i];

                        if( i !== 0 && i === args.length - 1 ) {
                            str += " " + lastSeperator + " ";
                        } else if( i !== 0 ) {
                            str += ", ";
                        }

                        if( is.Function( arg ) ) {
                            str += is.Defined( arg.name ) ? arg.name : ( "custom$" + ownFunct++ );
                        } else if( is.String( arg ) && is.hasOwnProperty( arg ) || is.String( arg ) && is.hasOwnProperty( _removeFirst( arg ) ) ) {
                            str += arg;
                        } else {
                            str += "<unknown test statement '" + arg + "'>";
                        }
                    }

                    return str;
                };

            return {
                type: {
                    of: ( ...values ) => {
                        var ref = is.type.of.apply( _array, values );

                        return {
                            to: {
                                be: {
                                    equal: ( ...args ) => {
                                        if( !ref.equal.apply( _array, args ) ) {
                                            var exp = listExpected( args, "and" ),
                                                arr = toArray( values );

                                            throw assertionError( exp, arr );
                                        }
                                        return true;
                                    },

                                    either: ( ...args ) => {
                                        if( !ref.either.apply( _array, args ) ) {
                                            var exp = listExpected( args, "or" ),
                                                arr = toArray( values );

                                            throw assertionError( exp, arr );
                                        }
                                        return true;
                                    }
                                }
                            }
                        };
                    }
                }
            };
        }( ) ),

        // extend is.js by custom Tests
        extend: ( name, fn ) => {
            if( is.String( name ) && is.Function( fn ) && !is.hasOwnProperty( name ) ) {
                is[name] = fn;
            } // currently fails silently
        }
    };

    var errorTest = err => {
        return val => val.toString( ).startsWith( err );
    };
    for( var e of _errorTypes ) {
        is[e] = errorTest( e );
    }

    return is;
} ) );
