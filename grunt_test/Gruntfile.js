module.exports = function(grunt) {

    grunt.initConfig({
    //   jshint: {
    //     files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //     options: {
    //       globals: {
    //         jQuery: true
    //       }
    //     }
    //   },
    //   watch: {
    //     files: ['<%= jshint.files %>'],
    //     tasks: ['jshint']
    //   }
    concat: {
        options: {
          separator: ';',
        },
        dist: {
        //   src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        src: ['src/js/*.js'],
        //   dest: 'dist/built.js',
        dest:'build/js/build.js',
        },
      },
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        my_target: {
          files: {
            //'dest/output.min.js': ['src/input.js']
            'build/js/build.min.js': ['build/js/build.js']
          }
        }
      },
      jshint: {
        options:{
            jshintrc:'.jshintrc',
           
        },
        build: ['Gruntfile.js', 'src/js/*.js']
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'build/css/build.min.css': ['src/css/*.css']
          }
        }
      },
      watch: {
        scripts: {
          files: ['src/js/*.js','src/css/*.css'],
          tasks: ['concat','uglify','jshint','cssmin'],
          options: {
            spawn: false,
          },
        },
      },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
  
    // grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['concat','uglify','jshint','cssmin']);
    grunt.registerTask('mywatch', ['default','watch']);
  
  };