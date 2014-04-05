module.exports = function( grunt ) {

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),

        jshint: {
            src: "is.js"
        },

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %>.js v<%= pkg.version %>-<%= grunt.template.today('yymmddhhMM') %>\n"
                    + " * by @bbuecherl\n"
                    + " * License: MIT\n */\n"
            },
            build: {
                src: "is.js",
                dest: "is.min.js"
            }
        }
    } );

    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );

    grunt.registerTask( "default", [ "jshint", "uglify" ] );
};
