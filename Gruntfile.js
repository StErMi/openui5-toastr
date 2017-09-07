module.exports = function(grunt) {
	
		grunt.initConfig({
			dir: {
				src: 'src',
				dest: 'dist',
				demo: 'test/demo',
				src_toastr: 'node_modules/toastr',
				bower_components: 'bower_components',
				node_modules: 'node_modules',
				css: 'it/designfuture/toastr/themes/',
				css_base: 'it/designfuture/toastr/themes/base/library.source.less',
				css_belize: 'it/designfuture/toastr/themes/sap_belize/library.source.less',
				sap_bluecrystal: 'it/designfuture/toastr/themes/sap_bluecrystal/library.source.less'
			},
	
			watch: {
				options: {
					livereload: true
				},
				css: {
					files: ['<%= dir.src %>/**/*.less', '<%= dir.src %>/**/*.css'],
					tasks: ['build']
				},
				js: {
					files: ['<%= dir.src %>/**/*.js', '<%= dir.src %>/**/*.xml', '<%= dir.src %>/**/*.json', '<%= dir.src %>/**/*.html', '<%= dir.src %>/**/*.properties'],
					tasks: ['build']
				}
			},
	
			copy: {
				main: {
					expand: true,
					cwd: '<%= dir.dest %>/',
					src: ['**'],
					dest: '<%= dir.demo %>/thirdparty/',
				},
			},
	
			clean: {
				dist: '<%= dir.dest %>/**'
			},
	
			eslint: {
				options: {
					configFile: './.eslintrc'
				},
	
				demo: ['<%= dir.demo %>']
			},
	
			connect: {
				options: {
					port: 8080,
					hostname: '*',
					livereload: true
				},
				src: {},
				dist: {}
			},
	
			openui5_connect: {
				options: {
					resources: [
						'<%= dir.bower_components %>/openui5-sap.ui.core/resources',
						'<%= dir.bower_components %>/openui5-sap.m/resources',
						'<%= dir.bower_components %>/openui5-sap.ui.layout/resources',
						'<%= dir.bower_components %>/openui5-themelib_sap_belize/resources',
					],
					testresources: [
						'<%= dir.bower_components %>/openui5-sap.ui.core/test-resources',
						'<%= dir.bower_components %>/openui5-sap.m/test-resources',
						'<%= dir.bower_components %>/openui5-sap.ui.layout/test-resources',
						'<%= dir.bower_components %>/openui5-themelib_sap_belize/test-resources'
					],
				},
				src: {
					options: {
						appresources: '<%= dir.demo %>'
					}
				},
				dist: {
					options: {
						appresources: '<%= dir.demo %>'
					}
				}
			},
	
			openui5_preload: {
				library: {
					options: {
						resources: [
							{ cwd: '<%= dir.src %>' },
							{ cwd: '<%= dir.src_toastr %>', src: 'toastr.js', prefix: 'it/designfuture/toastr/3rdparty' }
						],
						dest: '<%= dir.dest %>',
						compatVersion: '1.44',
						compress: false
					},
					libraries: 'it/designfuture/toastr'
				}
			},
	
			openui5_theme: {
				library: {
					files: [
						{
							expand: true,
							cwd: '<%= dir.src %>',
							src: '**/themes/*/library.source.less',
							dest: '<%= dir.dest %>'
						}
					],
					options: {
						compiler: {
							compress: false
						},
						rootPaths: [
							'<%= dir.src %>',
							'<%= dir.node_modules %>'
						],
						library: {
							name: 'it.designfuture.toastr'
						}
					}
				}
			}
		});
	
		// These publins provide necessary tasks
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-openui5');
		grunt.loadNpmTasks('grunt-eslint');
		grunt.loadNpmTasks("grunt-contrib-watch");
	
		// Server task
		grunt.registerTask('serve', function(target) {
			grunt.task.run('openui5_connect:' + (target || 'src') );
			grunt.task.run('watch');
		});
	
		// Linting task
		grunt.registerTask('lint', ['eslint']);
	
		// Build task
		grunt.registerTask('build_theme', ['clean', 'openui5_theme']);
	
		// Build task
		grunt.registerTask('build', ['clean','openui5_theme', 'openui5_preload', 'copy']);
	
		// Default task
		grunt.registerTask('default', [
			'clean',
			'build',
			'serve'
		]);
	
	};