module.exports = function( grunt ) {

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),

        jshint: {
            options: {
                "esnext": true
            },
            src: "is.es6.js"
        },

        traceur: {
            options: {
                blockBinding: true
            },
            custom: {
                files: {
                    "is.js": ["is.es6.js"]
                }
            }
        },

        uglify: {
            options: {
                banner: "/*! is.js v<%= pkg.version %>-<%= grunt.template.today('yymmddhhMM') %>\n"
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
    grunt.loadNpmTasks( "grunt-traceur" );

    grunt.registerTask( "default", [ "jshint", "traceur", "uglify" ] );
};
