/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library it.designfuture.toastr.
 */
sap.ui.define([
	'jquery.sap.global', 
	'sap/ui/core/library' // library dependency
	],  function(jQuery, library) {

		"use strict";

		/**
		 * Suite controls library.
		 *
		 * @namespace
		 * @name it.designfuture.toastr
		 * @author Emanuele Ricci <stermi@gmail.com>
		 * @version ${version}
		 * @public
		 */
		
		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name : "it.designfuture.toastr",
			noLibraryCSS: false,
			version: "${version}",
			dependencies : ["sap.ui.core", "sap.m"],
			types: [],
			interfaces: [],
			controls: [ 
				"it.designfuture.toastr.Toastr"
			],
			elements: []
		});

		return it.designfuture.toastr;

}, /* bExport= */ false);