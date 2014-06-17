module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
          build_dir: './webkitbuilds',
          mac: true, 
          win: false,
          linux32: false,
          linux64: false,
          mac_icns: './src/icon.icns',
          zip: true,
          credits: './src/credits.html'
      },
      src: ['./src/**/*'] 
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};