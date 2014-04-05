var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Undefined", function( ) {
    it( "should return true when param is undefined", function( ) {
        expect(is.Undefined(undefined)).to.equal(true);
        expect(is.Undefined(this.anundefinedproperty)).to.equal(true);
    } );

    it( "should return false when param is not undefined", function( ) {
        expect(is.Undefined(true)).to.equal(false);
        expect(is.Undefined(false)).to.equal(false);
        expect(is.Undefined(1)).to.equal(false);
        expect(is.Undefined("")).to.equal(false);
        expect(is.Undefined("a")).to.equal(false);
        expect(is.Undefined(0)).to.equal(false);
        expect(is.Undefined({})).to.equal(false);
        expect(is.Undefined([])).to.equal(false);
        expect(is.Undefined([1])).to.equal(false);
        expect(is.Undefined(null)).to.equal(false);
        expect(is.Undefined(/^/g)).to.equal(false);
        expect(is.Undefined(new Error())).to.equal(false);
    } );
} );

describe( "is.Defined", function( ) {
    it( "should return true when param is defined", function( ) {
        expect(is.Defined(true)).to.equal(true);
        expect(is.Defined(false)).to.equal(true);
        expect(is.Defined(1)).to.equal(true);
        expect(is.Defined("")).to.equal(true);
        expect(is.Defined("a")).to.equal(true);
        expect(is.Defined(0)).to.equal(true);
        expect(is.Defined({})).to.equal(true);
        expect(is.Defined([])).to.equal(true);
        expect(is.Defined([1])).to.equal(true);
        expect(is.Defined(null)).to.equal(true);
        expect(is.Defined(/^/g)).to.equal(true);
        expect(is.Defined(new Error())).to.equal(true);
    } );

    it( "should return false when param is not defined", function( ) {
        expect(is.Defined(this.anundefinedproperty)).to.equal(false);
    } );
} );

describe( "is.Null", function( ) {
    it( "should return true when param is null", function( ) {
        expect(is.Null(null)).to.equal(true);
    } );

    it( "should return false when param is not null", function( ) {
        expect(is.Null(true)).to.equal(false);
        expect(is.Null(false)).to.equal(false);
        expect(is.Null(1)).to.equal(false);
        expect(is.Null("")).to.equal(false);
        expect(is.Null("a")).to.equal(false);
        expect(is.Null(0)).to.equal(false);
        expect(is.Null({})).to.equal(false);
        expect(is.Null([])).to.equal(false);
        expect(is.Null([1])).to.equal(false);
        expect(is.Null(/^/g)).to.equal(false);
        expect(is.Null(new Error())).to.equal(false);
    } );
} );
