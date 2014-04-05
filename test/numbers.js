var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Number", function( ) {
    it( "should return true when param is a number", function( ) {
        expect(is.Number(13)).to.equal(true);
        expect(is.Number(1.132)).to.equal(true);
        expect(is.Number(-5)).to.equal(true);
        expect(is.Number(0)).to.equal(true);
        expect(is.Number(NaN)).to.equal(true);
        expect(is.Number(-Infinity)).to.equal(true);
    } );

    it( "should return false when param is no number", function( ) {
        expect(is.Number(true)).to.equal(false);
        expect(is.Number(false)).to.equal(false);
        expect(is.Number({})).to.equal(false);
        expect(is.Number("")).to.equal(false);
        expect(is.Number("123")).to.equal(false);
        expect(is.Number([])).to.equal(false);
        expect(is.Number([1])).to.equal(false);
        expect(is.Number(undefined)).to.equal(false);
        expect(is.Number(null)).to.equal(false);
        expect(is.Number(/^/g)).to.equal(false);
        expect(is.Number(new Error())).to.equal(false);
    } );
} );

describe( "is.Integer", function( ) {
    it( "should return true when param is a integer", function( ) {
        expect(is.Integer(13)).to.equal(true);
        expect(is.Integer(-5)).to.equal(true);
        expect(is.Integer(0)).to.equal(true);
    } );

    it( "should return false when param is no number", function( ) {
        expect(is.Integer(-0.01)).to.equal(false);
        expect(is.Integer(-Infinity)).to.equal(false);
        expect(is.Integer(NaN)).to.equal(false);
        expect(is.Integer(1.1)).to.equal(false);
        expect(is.Integer(.0000123)).to.equal(false);
    } );
} );

describe( "is.Negative", function( ) {
    it( "should return true when param is negative", function( ) {
        expect(is.Negative(-0.01)).to.equal(true);
        expect(is.Negative(-5)).to.equal(true);
        expect(is.Negative(-Infinity)).to.equal(true);
    } );

    it( "should return false when param is not negative", function( ) {
        expect(is.Negative(false)).to.equal(false);
        expect(is.Negative(true)).to.equal(false);
        expect(is.Negative(Infinity)).to.equal(false);
        expect(is.Negative(NaN)).to.equal(false);
        expect(is.Negative(1.1)).to.equal(false);
        expect(is.Negative(123)).to.equal(false);
        expect(is.Negative(0)).to.equal(false);
        expect(is.Negative({})).to.equal(false);
        expect(is.Negative("")).to.equal(false);
        expect(is.Negative([])).to.equal(false);
        expect(is.Negative([1])).to.equal(false);
        expect(is.Negative(undefined)).to.equal(false);
        expect(is.Negative(null)).to.equal(false);
        expect(is.Negative(/^/g)).to.equal(false);
        expect(is.Negative(new Error())).to.equal(false);
    } );
} );

describe( "is.Positive", function( ) {
    it( "should return true when param is positive", function( ) {
        expect(is.Positive(true)).to.equal(true);
        expect(is.Positive(0.01)).to.equal(true);
        expect(is.Positive(5)).to.equal(true);
        expect(is.Positive(Infinity)).to.equal(true);
    } );

    it( "should return false when param is not positive", function( ) {
        expect(is.Positive(false)).to.equal(false);
        expect(is.Positive(-Infinity)).to.equal(false);
        expect(is.Positive(NaN)).to.equal(false);
        expect(is.Positive(-1.1)).to.equal(false);
        expect(is.Positive(-123)).to.equal(false);
        expect(is.Positive(0)).to.equal(false);
        expect(is.Positive({})).to.equal(false);
        expect(is.Positive("")).to.equal(false);
        expect(is.Positive([])).to.equal(false);
        expect(is.Positive([""])).to.equal(false);
        expect(is.Positive(undefined)).to.equal(false);
        expect(is.Positive(null)).to.equal(false);
        expect(is.Positive(/^/g)).to.equal(false);
        expect(is.Positive(new Error())).to.equal(false);
    } );
} );

describe( "is.Float", function( ) {
    it( "should return true when param is a float", function( ) {
        expect(is.Float(0.01)).to.equal(true);
        expect(is.Float(5.03)).to.equal(true);
        expect(is.Float(-0.1)).to.equal(true);
        expect(is.Float(Math.PI)).to.equal(true);
    } );

    it( "should return false when param is not a float", function( ) {
        expect(is.Float(true)).to.equal(false);
        expect(is.Float(false)).to.equal(false);
        expect(is.Float(Infinity)).to.equal(false);
        expect(is.Float(-Infinity)).to.equal(false);
        expect(is.Float(NaN)).to.equal(false);
        expect(is.Float({})).to.equal(false);
        expect(is.Float("")).to.equal(false);
        expect(is.Float([])).to.equal(false);
        expect(is.Float([""])).to.equal(false);
        expect(is.Float(undefined)).to.equal(false);
        expect(is.Float(null)).to.equal(false);
        expect(is.Float(/^/g)).to.equal(false);
        expect(is.Float(new Error())).to.equal(false);
    } );
} );

describe( "is.NaN", function( ) {
    it( "should return true when param is NaN", function( ) {
        expect(is.NaN(NaN)).to.equal(true);
        expect(is.NaN({})).to.equal(true);
        expect(is.NaN(undefined)).to.equal(true);
    } );

    it( "should return false when param is not NaN", function( ) {
        expect(is.NaN(true)).to.equal(false);
        expect(is.NaN(false)).to.equal(false);
        expect(is.NaN(13)).to.equal(false);
        expect(is.NaN(1.132)).to.equal(false);
        expect(is.NaN(-5)).to.equal(false);
        expect(is.NaN(0)).to.equal(false);
        expect(is.NaN(Infinity)).to.equal(false);
        expect(is.NaN(-Infinity)).to.equal(false);
        expect(is.NaN("")).to.equal(false);
        expect(is.NaN([])).to.equal(false);
        expect(is.NaN([""])).to.equal(false);
        expect(is.NaN(null)).to.equal(false);
    } );
} );

describe( "is.Finite", function( ) {
    it( "should return true when param is finite", function( ) {
        expect(is.Finite(13)).to.equal(true);
        expect(is.Finite(1.132)).to.equal(true);
        expect(is.Finite(-5)).to.equal(true);
        expect(is.Finite(0)).to.equal(true);
        expect(is.Finite(true)).to.equal(true);
        expect(is.Finite(false)).to.equal(true);
        expect(is.Finite("")).to.equal(true);
        expect(is.Finite([])).to.equal(true);
        expect(is.Finite([""])).to.equal(true);
        expect(is.Finite(null)).to.equal(true);
    } );

    it( "should return false when param is not finite", function( ) {
        expect(is.Finite(NaN)).to.equal(false);
        expect(is.Finite({})).to.equal(false);
        expect(is.Finite(undefined)).to.equal(false);
        expect(is.Finite(Infinity)).to.equal(false);
        expect(is.Finite(-Infinity)).to.equal(false);
    } );
} );

describe( "is.Infinity", function( ) {
    it( "should return true when param is infinite", function( ) {
        expect(is.Infinity(-Infinity)).to.equal(true);
        expect(is.Infinity(Infinity)).to.equal(true);
    } );

    it( "should return false when param is finite", function( ) {
        expect(is.Infinity(13)).to.equal(false);
        expect(is.Infinity(1.132)).to.equal(false);
        expect(is.Infinity(-5)).to.equal(false);
        expect(is.Infinity(0)).to.equal(false);
        expect(is.Infinity(true)).to.equal(false);
        expect(is.Infinity(false)).to.equal(false);
        expect(is.Infinity("")).to.equal(false);
        expect(is.Infinity([])).to.equal(false);
        expect(is.Infinity([""])).to.equal(false);
        expect(is.Infinity(null)).to.equal(false);
        expect(is.Infinity(NaN)).to.equal(false);
        expect(is.Infinity({})).to.equal(false);
        expect(is.Infinity(undefined)).to.equal(false);
    } );
} );
