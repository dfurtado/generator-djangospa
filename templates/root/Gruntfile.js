module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',        
        copy: {
            scripts: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/angular/angular.min.js', 
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-resource/angular-resource.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/jquery/dist/jquery.min.js'
                ],
                dest: 'static/scripts/',
                filter: 'isFile'
            },
            styles: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css'
                ],
                dest: 'static/styles/css',
                filter: 'isFile'  
            },
            fonts: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/bootstrap/dist/fonts/**'
                ],
                dest: 'static/styles/fonts',
                filter: 'isFile'        
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};