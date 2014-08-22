var expect = require( "chai" ).expect,
    is = require( "../is.min.js" );


describe( "is.extend", function( ) {
    it( "should fail when registering with wrong arguments", function( ) {
        is.extend( );
        is.extend( "a" );
        expect( is.a ).to.be.undefined;
        is.extend( 1, function( ) { } );
        expect( is[1] ).to.be.undefined;
    } );

    it( "should register a valid function", function( ) {
        is.extend( "Zero", function( arg ) {
            return is.Number( arg ) && arg === 0;
        } );

        expect( is.Zero ).to.be.a.instanceof( Function );
        expect( is.Zero( 0 ) ).to.be.true;
        expect( is.Zero( "" ) ).to.be.false;
        expect( is.Zero( 1 ) ).to.be.false;
    } );
} );
