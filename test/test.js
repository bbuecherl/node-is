var chaiExpect = require("chai").expect,
    expect = require( "../is.min.js" ).expect;

describe( "[is.]expect.type.of", function( ) {
    describe( "#equal()", function( ) {
        it( "should not throw an error, when 1 is tested to equal to Number and Integer", function() {
            expect.type.of(1).to.be.equal("Number", "Integer");
        } );

        it( "sould not throw an error, when 1, 2, 4 are tested to equal Number and Integer and not negative", function() {
            expect.type.of(1,2,4).to.be.equal("Number", "Integer", "!Negative");
        } );

        it( "sould throw an error, when 1 is tested to equal not positive and Integer", function() {
            chaiExpect(function() {
                expect.type.of(1).to.be.equal("!Positive", "Integer");
            }).to.throw(Error);
            try {
                expect.type.of(1).to.be.equal("!Positive", "Integer");
            } catch( e ) {
                chaiExpect(e.message).to.be.equal("expected 1 to be !Positive and Integer");
            }
        } );
    } );

    describe( "#either()", function( ) {
        it( "should not throw an error, when 1 is tested to be either a Number or Integer", function() {
            expect.type.of(1).to.be.either("Number", "Integer");
        } );

        it( "sould not throw an error, when 1, 2, 4 are tested to be either a Number, Integer or not negative", function() {
            expect.type.of(1,2,4).to.be.either("Number", "Integer", "!Negative");
        } );

        it( "sould throw an error, when 1 is tested to be either not positive or a string", function() {
            chaiExpect(function() {
                expect.type.of(1).to.be.either("!Positive", "String")
            }).to.throw(Error);
            try {
                expect.type.of(1).to.be.either("!Positive", "String");
            } catch( e ) {
                chaiExpect(e.message).to.be.equal("expected 1 to be !Positive or String");
            }
        } );
    } );
} );
