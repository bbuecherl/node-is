var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.type.of", function( ) {
    describe( "#equal()", function( ) {
        it( "should return true, when 1 equals Number and Integer and not negative", function() {
            expect(is.type.of(1).equal("Number", "Integer","!Negative")).to.equal(true);
        } );

        it( "sould return true, when 1, 2, 4 equal Number and Integer and not negative", function() {
            expect(is.type.of(1,2,4).equal("Number", "Integer","!Negative")).to.equal(true);
        } );

        it( "sould be able to test with own functions", function() {
            expect(is.type.of("hello").equal(function(elm) {
                return elm === "hello";
            })).to.equal(true);
            expect(is.type.of("hello", "world").equal("String", "!EmptyString", function(elm) {
                return elm[3]==="l";
            })).to.equal(true);
        } );

    } );

    describe( "#either()", function( ) {
        it( "should return true, when Math.random is either Integer or Float", function() {
            expect(is.type.of(Math.random()).either("Float", "Integer")).to.equal(true);
        } );
    } );
} );
