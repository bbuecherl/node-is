var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Object", function( ) {
    it( "should return true when param is a object", function( ) {
        expect(is.Object({})).to.equal(true);
        expect(is.Object(null)).to.equal(true);
        expect(is.Object([])).to.equal(true);
        expect(is.Object([1])).to.equal(true);
        expect(is.Object(new Error())).to.equal(true);
    } );

    it( "should return false when param is no object", function( ) {
        expect(is.Object(true)).to.equal(false);
        expect(is.Object(false)).to.equal(false);
        expect(is.Object(function() {})).to.equal(false);
        expect(is.Object("123")).to.equal(false);
        expect(is.Object(undefined)).to.equal(false);
        expect(is.Object(1)).to.equal(false);
    } );
} );

describe( "is.Array", function( ) {
    it( "should return true when param is a array", function( ) {
        expect(is.Array([])).to.equal(true);
        expect(is.Array([1])).to.equal(true);
    } );

    it( "should return false when param is no array", function( ) {
        expect(is.Array(new Error())).to.equal(false);
        expect(is.Array({})).to.equal(false);
        expect(is.Array(null)).to.equal(false);
        expect(is.Array(true)).to.equal(false);
        expect(is.Array(false)).to.equal(false);
        expect(is.Array(function() {})).to.equal(false);
        expect(is.Array("123")).to.equal(false);
        expect(is.Array(undefined)).to.equal(false);
        expect(is.Array(1)).to.equal(false);
    } );
} );

describe( "is.RegExp", function( ) {
    it( "should return true when param is a RegExp", function( ) {
        expect(is.RegExp(/^/g)).to.equal(true);
        expect(is.RegExp(new RegExp("str"))).to.equal(true);
    } );

    it( "should return false when param is no RegExp", function( ) {
        expect(is.RegExp(new Error())).to.equal(false);
        expect(is.RegExp({})).to.equal(false);
        expect(is.RegExp(null)).to.equal(false);
        expect(is.RegExp(true)).to.equal(false);
        expect(is.RegExp([])).to.equal(false);
        expect(is.RegExp(function() {})).to.equal(false);
        expect(is.RegExp("123")).to.equal(false);
        expect(is.RegExp(undefined)).to.equal(false);
        expect(is.RegExp(1)).to.equal(false);
    } );
} );

describe( "is.RealObject", function( ) {
    it( "should return true when param is a real object", function( ) {
        expect(is.RealObject({})).to.equal(true);
    } );

    it( "should return false when param is no real object", function( ) {
        expect(is.RealObject(null)).to.equal(false);
        expect(is.RealObject([])).to.equal(false);
        expect(is.RealObject([1])).to.equal(false);
        expect(is.RealObject(new Error())).to.equal(false);
    } );
} );