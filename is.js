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
            return ( that.Number( obj ) && isFinite ( obj ) && Math.floor( obj ) !== obj );
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
            return ( that.Boolean( obj ) && !obj );
        },
        True: function( obj ) {
            return ( that.Boolean( obj ) && obj );
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
            return ( typeof obj === "function" && !that.RegExp( obj ) );
        },
        Array: function( obj ) {
            return ( Object.prototype.toString.apply( obj ) === "[object Array]" );
        },
        RegExp: function( obj ) {
            return ( Object.prototype.toString.apply( obj ) === "[object RegExp]" );
        },
        Object: function( obj ) {
            return ( typeof obj === "object" );
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

        type: {
            of: function( obj ) {
                var match = [];

                for( var prop in that ) {
                    if( prop !== "type" && that[prop]( obj ) )
                        match.push( prop );
                }

                return {
                    equal: function( ) {
                        for( var i = 0; i < arguments.length; ++i ) {
                            if( arguments[i][0] === "!" ) {
                                if( match.indexOf( arguments[i].slice(1) ) > -1 ) {
                                    return false;
                                }
                            } else {
                                if( match.indexOf( arguments[i] ) === -1 ) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    },
                    either: function( ) {
                        for( var i = 0; i < arguments.length; ++i ) {
                            if( arguments[i][0] === "!" ) {
                                if( match.indexOf( arguments[i].slice(1) ) === -1 ) {
                                    return true;
                                }
                            } else {
                                if( match.indexOf( arguments[i] ) > -1 ) {
                                    return true;
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
