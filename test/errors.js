var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Error", function( ) {
    it( "should return true when param is a error", function( ) {
        expect(is.Error(new Error())).to.equal(true);
        expect(is.Error(new ReferenceError())).to.equal(true);
        expect(is.Error(new SyntaxError())).to.equal(true);
        expect(is.Error(new TypeError())).to.equal(true);
        expect(is.Error(new URIError())).to.equal(true);
        expect(is.Error(new EvalError())).to.equal(true);
        expect(is.Error(new RangeError())).to.equal(true);
    } );

    it( "should return false when param is no error", function( ) {
        expect(is.Error({})).to.equal(false);
        expect(is.Error(null)).to.equal(false);
        expect(is.Error([])).to.equal(false);
        expect(is.Error([1])).to.equal(false);
        expect(is.Error(true)).to.equal(false);
        expect(is.Error(false)).to.equal(false);
        expect(is.Error(function() {})).to.equal(false);
        expect(is.Error("123")).to.equal(false);
        expect(is.Error(undefined)).to.equal(false);
        expect(is.Error(1)).to.equal(false);
    } );
} );

describe( "is.ReferenceError", function( ) {
    it( "should return true when param is a reference error", function( ) {
        expect(is.ReferenceError(new ReferenceError())).to.equal(true);
    } );

    it( "should return false when param is no reference error", function( ) {
        expect(is.ReferenceError(new Error())).to.equal(false);
        expect(is.ReferenceError(new SyntaxError())).to.equal(false);
        expect(is.ReferenceError(new TypeError())).to.equal(false);
        expect(is.ReferenceError(new URIError())).to.equal(false);
        expect(is.ReferenceError(new EvalError())).to.equal(false);
        expect(is.ReferenceError(new RangeError())).to.equal(false);
    } );
} );

describe( "is.SyntaxError", function( ) {
    it( "should return true when param is a syntax error", function( ) {
        expect(is.SyntaxError(new SyntaxError())).to.equal(true);
    } );

    it( "should return false when param is no syntax error", function( ) {
        expect(is.SyntaxError(new Error())).to.equal(false);
        expect(is.SyntaxError(new ReferenceError())).to.equal(false);
        expect(is.SyntaxError(new TypeError())).to.equal(false);
        expect(is.SyntaxError(new URIError())).to.equal(false);
        expect(is.SyntaxError(new EvalError())).to.equal(false);
        expect(is.SyntaxError(new RangeError())).to.equal(false);
    } );
} );

describe( "is.TypeError", function( ) {
    it( "should return true when param is a type error", function( ) {
        expect(is.TypeError(new TypeError())).to.equal(true);
    } );

    it( "should return false when param is no type error", function( ) {
        expect(is.TypeError(new Error())).to.equal(false);
        expect(is.TypeError(new SyntaxError())).to.equal(false);
        expect(is.TypeError(new ReferenceError())).to.equal(false);
        expect(is.TypeError(new URIError())).to.equal(false);
        expect(is.TypeError(new EvalError())).to.equal(false);
        expect(is.TypeError(new RangeError())).to.equal(false);
    } );
} );

describe( "is.URIError", function( ) {
    it( "should return true when param is a uri error", function( ) {
        expect(is.URIError(new URIError())).to.equal(true);
    } );

    it( "should return false when param is no uri error", function( ) {
        expect(is.URIError(new Error())).to.equal(false);
        expect(is.URIError(new SyntaxError())).to.equal(false);
        expect(is.URIError(new TypeError())).to.equal(false);
        expect(is.URIError(new ReferenceError())).to.equal(false);
        expect(is.URIError(new EvalError())).to.equal(false);
        expect(is.URIError(new RangeError())).to.equal(false);
    } );
} );

describe( "is.EvalError", function( ) {
    it( "should return true when param is a eval error", function( ) {
        expect(is.EvalError(new EvalError())).to.equal(true);
    } );

    it( "should return false when param is no eval error", function( ) {
        expect(is.EvalError(new Error())).to.equal(false);
        expect(is.EvalError(new SyntaxError())).to.equal(false);
        expect(is.EvalError(new TypeError())).to.equal(false);
        expect(is.EvalError(new URIError())).to.equal(false);
        expect(is.EvalError(new ReferenceError())).to.equal(false);
        expect(is.EvalError(new RangeError())).to.equal(false);
    } );
} );

describe( "is.RangeError", function( ) {
    it( "should return true when param is a range error", function( ) {
        expect(is.RangeError(new RangeError())).to.equal(true);
    } );

    it( "should return false when param is no range error", function( ) {
        expect(is.RangeError(new Error())).to.equal(false);
        expect(is.RangeError(new SyntaxError())).to.equal(false);
        expect(is.RangeError(new TypeError())).to.equal(false);
        expect(is.RangeError(new URIError())).to.equal(false);
        expect(is.RangeError(new EvalError())).to.equal(false);
        expect(is.RangeError(new ReferenceError())).to.equal(false);
    } );
} );

describe( "is.RealError", function( ) {
    it( "should return true when param is a real error", function( ) {
        expect(is.RealError(new Error())).to.equal(true);
    } );

    it( "should return false when param is no real error", function( ) {
        expect(is.RealError(new ReferenceError())).to.equal(false);
        expect(is.RealError(new SyntaxError())).to.equal(false);
        expect(is.RealError(new TypeError())).to.equal(false);
        expect(is.RealError(new URIError())).to.equal(false);
        expect(is.RealError(new EvalError())).to.equal(false);
        expect(is.RealError(new RangeError())).to.equal(false);
    } );
} );
