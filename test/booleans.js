var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Boolean", function( ) {
    it( "should return true when param is a boolean", function( ) {
        expect(is.Boolean(true)).to.equal(true);
        expect(is.Boolean(false)).to.equal(true);
        expect(is.Boolean(!0)).to.equal(true);
        expect(is.Boolean(!!0)).to.equal(true);
    } );

    it( "should return false when param is no boolean", function( ) {
        expect(is.Boolean(1)).to.equal(false);
        expect(is.Boolean(0)).to.equal(false);
        expect(is.Boolean({})).to.equal(false);
        expect(is.Boolean("")).to.equal(false);
        expect(is.Boolean("123")).to.equal(false);
        expect(is.Boolean([])).to.equal(false);
        expect(is.Boolean([1])).to.equal(false);
        expect(is.Boolean(undefined)).to.equal(false);
        expect(is.Boolean(null)).to.equal(false);
        expect(is.Boolean(/^/g)).to.equal(false);
        expect(is.Boolean(new Error())).to.equal(false);
    } );
} );

describe( "is.True", function( ) {
    it( "should return true when param is true", function( ) {
        expect(is.True(true)).to.equal(true);
    } );

    it( "should return false when param is not true", function( ) {
        expect(is.True(1)).to.equal(false);
        expect(is.True(false)).to.equal(false);
        expect(is.True(0)).to.equal(false);
        expect(is.True({})).to.equal(false);
        expect(is.True("")).to.equal(false);
        expect(is.True("123")).to.equal(false);
        expect(is.True([])).to.equal(false);
        expect(is.True([1])).to.equal(false);
        expect(is.True(undefined)).to.equal(false);
        expect(is.True(null)).to.equal(false);
        expect(is.True(/^/g)).to.equal(false);
        expect(is.True(new Error())).to.equal(false);
    } );
} );

describe( "is.False", function( ) {
    it( "should return true when param is false", function( ) {
        expect(is.False(false)).to.equal(true);
    } );

    it( "should return false when param is not false", function( ) {
        expect(is.False(1)).to.equal(false);
        expect(is.False(true)).to.equal(false);
        expect(is.False(0)).to.equal(false);
        expect(is.False({})).to.equal(false);
        expect(is.False("")).to.equal(false);
        expect(is.False("123")).to.equal(false);
        expect(is.False([])).to.equal(false);
        expect(is.False([1])).to.equal(false);
        expect(is.False(undefined)).to.equal(false);
        expect(is.False(null)).to.equal(false);
        expect(is.False(/^/g)).to.equal(false);
        expect(is.False(new Error())).to.equal(false);
    } );
} );
