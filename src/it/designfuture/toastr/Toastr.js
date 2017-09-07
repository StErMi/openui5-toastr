/*!
 * ${copyright}
 */


// Provides control it.designfuture.toastr.Toastr
sap.ui.define([
	"./3rdparty/toastr"
], function (toastrjs) {
	"use strict";
	
	/**
	 * @class
	 * A message toast notification offers simple feedback about an operation in a pop-up.
	 * Toasts automatically disappear after a timeout unless the user moves the mouse over
	 * the toast or taps on it. In this case the toast will remain on the screen and can
	 * be closed when the user moves the mouse out or taps out of the toast.
	 * Toasts appears close the bottom of the screen, centered horizontally, but you can change
	 * this position which is not dependent on the default values of the position settings.
	 * The default position applies as long as the application does not do any position setting.
	 * Position settings are "toast-top-right", "toast-bottom-right", "toast-bottom-left", "toast-top-left",
	 * "toast-top-full-width", "toast-bottom-full-width", "toast-top-center" and "toast-bottom-center".
	 *
	 * This positioning needs to be handled in the application logic.
	 *
	 * Message toast example:
	 *
	 * <pre>
	 * it.designfuture.toastr.Toastr.info("Cool message!", "Cool title" {
	 *     closeButton: 		false,		// default
	 *     debug: 				false,		// default
	 *     progressBar: 		false,		// default
	 *     preventDuplicates: 	false,		// default
	 *     tapToDismiss: 		true,		// default
	 *     newestOnTop: 		true,		// default
	 *     showEasing: 			"swing",	// default
	 *     hideEasing: 			"linear",	// default
	 *     showMethod: 			"fadeIn",	// default
	 *     hideMethod: 			"fadeOut",	// default
	 *     showDuration: 		300,		// default
	 *     hideDuration: 		1000,		// default
	 *     timeOut: 			5000,		// default
	 *     extendedTimeOut: 	1000,		// default
	 *     rtl: 				false,		// default
	 *     onShown: 			null		// default
	 *     onHidden: 			null		// default
	 *     onclick: 			null		// default
	 *     onCloseClick: 		null		// default
	 * });
	 * </pre>
	 *
	 * @author Emanuele Ricci <stermi@gmail.com>
	 * @since 1.40
	 *
	 * @namespace
	 * @public
	 * @alias it.designfuture.toastr.Toastr
	 */
	var Toastr =  {};

	Toastr.__lastToast = null,
	
	Toastr.info = function(message, title, optionsOverride) {
		return this.__lastToast = toastr.info(message, title, optionsOverride);
	};
	
	Toastr.success = function(message, title, optionsOverride) {
		return this.__lastToast = toastr.success(message, title, optionsOverride);
	};
	
	Toastr.warning = function(message, title, optionsOverride) {
		return this.__lastToast = toastr.warning(message, title, optionsOverride);
	};
		
	Toastr.error = function(message, title, optionsOverride) {
		return this.__lastToast = toastr.error(message, title, optionsOverride);
	};
	
	Toastr.clearToast = function(toastObj) {
		toastr.clear(toastObj);
	};
	
	Toastr.clearLastToast = function() {
		this.clearToast(this.__lastToast);
	};
	
	Toastr.clearAllToast = function() {
		toastr.clear();
	};
	
	return Toastr;

}, /* bExport= */ true);