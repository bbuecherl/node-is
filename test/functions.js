var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.Function", function( ) {
    it( "should return true when param is a function", function( ) {
        expect(is.Function(function() {})).to.equal(true);
        expect(is.Function(require)).to.equal(true);
    } );

    it( "should return false when param is no function", function( ) {
        expect(is.Function(true)).to.equal(false);
        expect(is.Function(false)).to.equal(false);
        expect(is.Function({})).to.equal(false);
        expect(is.Function("")).to.equal(false);
        expect(is.Function("123")).to.equal(false);
        expect(is.Function([])).to.equal(false);
        expect(is.Function([1])).to.equal(false);
        expect(is.Function(undefined)).to.equal(false);
        expect(is.Function(null)).to.equal(false);
        expect(is.Function(/^/g)).to.equal(false);
        expect(is.Function(new Error())).to.equal(false);
    } );
} );
