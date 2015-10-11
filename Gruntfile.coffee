module.exports = (grunt) ->
  # config
  grunt.initConfig
    coffee:
      compile:
        files: [
          expand: true
          flatten: false
          cwd: 'src/coffee'
          src: ['**/*.coffee']
          dest: 'src/js/'
          ext: '.js'
        ]

  # load plugin
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # tasks
  grunt.registerTask 'default', ['coffee']
