const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/css/styles.css': 'sass/styles.scss'
				}
			}
		},
		browserSync: {
			bsFiles: {
				src: 'dist/css/styles.css'
			},
			options: {
				server: {
					baseDir: './'
				}
			}
		},
		imagemin: {
            options: {
                use: [mozjpeg({quality: 50})] // Example plugin usage
            },
	        dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'dist/media/',
	                src: ['media/*.{png,jpg,gif}'],
	            }]
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default',['sass', 'imagemin', 'browserSync']);
}