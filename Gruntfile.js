module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: { //"app" target
                files: [{
                    expand: true,
                    src: ['./scripts/**/*.js', '!app.js', '!app.constants.js'],
                    dest: './tmp/annotated',
                    ext: '.annotated.js',
                    extDot: 'last'
                }]
            }
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            build: {
                // the files to concatenate
                src: ['./tmp/annotated/scripts/**/*.annotated.js'],
                // the location of the resulting JS file
                dest: './tmp/build/<%= pkg.name %>.js'
            }
        },
        bower_concat: {
            build_dep: {
                dest: {
                    'js': './tmp/build/<%= pkg.name %>_deps.js'
                },
                exclude: [
                    'jquery',
                    'modernizr'
                ],
                /*
                 dependencies: {
                 'underscore': 'jquery',
                 'backbone': 'underscore',
                 'jquery-mousewheel': 'jquery'
                 },*/
                bowerOptions: {
                    relative: false
                }
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: true,
                    // the banner is inserted at the top of the output
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'target/web/build/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>'],
                    'target/mobile/build/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>']
                }
            },
            build_dep:{
                options: {
                    mangle: true,
                    // the banner is inserted at the top of the output
                    banner: '/*! <%= pkg.name %>_deps <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'target/web/build/<%= pkg.name %>_deps.min.js': ['<%= bower_concat.build_dep.dest.js %>'],
                    'target/mobile/build/<%= pkg.name %>_deps.min.js': ['<%= bower_concat.build_dep.dest.js %>']
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'scripts/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        copy: {
            build: {
                files: [
                    /*NORMAL*/
                    {expand: true, src: ['api/**'], dest: 'target/web/'},
                    {expand: true, src: ['i18n/**'], dest: 'target/web/'},
                    {expand: true, src: ['server/**'], dest: 'target/web/'},
                    {expand: true, cwd: 'tmp/htmlmin/', src: ['**/*html', '!**/*.m.html', '!**/prod*html'], dest: 'target/web/'},
                    {expand: true, src: ['scripts/**/app.js'], dest: 'target/web/'},
                    {expand: true, src: ['scripts/**/app.constants.js'], dest: 'target/web/'},
                    {src: 'favicon.ico', dest: 'target/web/'},
                    {src: '.htaccess', dest: 'target/web/'},
                    {src: 'robots.txt', dest: 'target/web/'},
                    {src: 'sitemap.xml', dest: 'target/web/'},
                    {src: 'tmp/htmlmin/index_prod.html', dest: 'target/web/index.html'},

                    /*MOBILE*/
                    {expand: true, src: ['api/**'], dest: 'target/mobile/'},
                    {expand: true, src: ['i18n/**'], dest: 'target/mobile/'},
                    {expand: true, src: ['server/**'], dest: 'target/mobile/'},
                    {expand: true, cwd: 'tmp/htmlmin/', src: ['**/*html', '!**/*.m.html', '!**/prod*html'], dest: 'target/mobile/'},
                    {expand: true, cwd: 'tmp/htmlmin/', src: ['**/*.m.html'], dest: 'target/mobile/',
                        rename: function(dest, src) {
                            return dest + src.substring(0, src.lastIndexOf('/')) + '/' + src.substring(src.lastIndexOf('/'), src.lastIndexOf('.m.html')) + '.html';
                        }
                    },
                    {expand: true, src: ['scripts/**/app.js'], dest: 'target/mobile/'},
                    {expand: true, src: ['scripts/**/app.constants.js'], dest: 'target/mobile/'},
                    {src: 'favicon.ico', dest: 'target/mobile/'},
                    {src: '.htaccess', dest: 'target/mobile/'},
                    {src: 'robots.txt', dest: 'target/mobile/'},
                    {src: 'sitemap.xml', dest: 'target/mobile/'},
                    {src: 'tmp/htmlmin/index_prod.m.html', dest: 'target/mobile/index.html'},

                    /*STATIC*/
                    {expand: true, src: ['assets/**', '!*.css'], dest: 'static/'},
                    {expand: true, src: ['images/**'], dest: 'static/'}
                ]
            }
        },
        watch: {
            scripts: {
                files: ['scripts/**/*.js', 'scripts/**/*.html', '*.html', 'assets/**/*.css', 'i18n/**/*.json'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        },
        clean: {
            clean: ['target'],
            clean: ['static'],
            build: ['tmp']
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {expand: true, cwd: 'scripts', src: ['**/*.html'], dest: 'tmp/htmlmin/scripts'},
                    {expand: true, cwd: '.', src: ['*.html'], dest: 'tmp/htmlmin/'}
                ]
            }
        },
        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'static/assets/css',
                        ext: '.css'
                    }]
            }
        }

        //grunt task configuration will go here
    });
    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //register grunt default task
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['clean:clean', 'bower_concat:build_dep', 'uglify:build_dep', 'ngAnnotate:build', 'concat:build', 'uglify:build', 'htmlmin:build', 'copy:build', 'cssmin:build', 'clean:build']);
    grunt.registerTask('build', ['ngAnnotate:build', 'concat:build', 'uglify:build', 'copy:build']);
    grunt.registerTask('min', ['htmlmin:build']);

};