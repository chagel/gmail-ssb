module.exports = function(grunt) {
    grunt.initConfig({
        nodewebkit: {
            options: {
                buildDir: './build',
                credits: './src/credits.html',
                macIcns: './src/icon.icns',
                platforms: ['osx']
            },
            src: './src/**/*'
        },
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('default', ['nodewebkit']);
};
