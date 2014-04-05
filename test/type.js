var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.type.of", function( ) {
    describe( "#equal()", function( ) {
        it( "should return true, when 1 equals Number and Integer", function() {
            expect(is.type.of(1).equal("Number", "Integer")).to.equal(true);
        } );
    } );

    describe( "#either()", function( ) {
        it( "should return true, when Math.random is either Integer or Float", function() {
            expect(is.type.of(Math.random()).either("Float", "Integer")).to.equal(true);
        } );
    } );
} );
