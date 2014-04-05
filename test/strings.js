var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.String", function( ) {
    it( "should return true when param is a string", function( ) {
        expect(is.String("")).to.equal(true);
        expect(is.String("str")).to.equal(true);
        expect(is.String("long string")).to.equal(true);
    } );

    it( "should return false when param is no string", function( ) {
        expect(is.String(1)).to.equal(false);
        expect(is.String(0)).to.equal(false);
        expect(is.String({})).to.equal(false);
        expect(is.String([])).to.equal(false);
        expect(is.String([1])).to.equal(false);
        expect(is.String(undefined)).to.equal(false);
        expect(is.String(null)).to.equal(false);
        expect(is.String(/^/g)).to.equal(false);
        expect(is.String(new Error())).to.equal(false);
    } );
} );

describe( "is.EmptyString", function( ) {
    it( "should return true when param is true", function( ) {
        expect(is.EmptyString("")).to.equal(true);
    } );

    it( "should return false when param is not true", function( ) {
        expect(is.EmptyString("asd")).to.equal(false);
        expect(is.EmptyString([""])).to.equal(false);
        expect(is.EmptyString(" ")).to.equal(false);
        expect(is.EmptyString("/uFFEF")).to.equal(false);
    } );
} );
