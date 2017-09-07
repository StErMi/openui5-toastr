sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"it/designfuture/toastr/Toastr"
], function(Controller, JSONModel, Toastr) {
	"use strict";

	return Controller.extend("Demo.controller.Home", {

		/////////////////////////////////////////////
		//  ATTRIBUTES
		/////////////////////////////////////////////

		messageIndex: 0,
		
		/////////////////////////////////////////////
		//  LIFECYCLE
		/////////////////////////////////////////////
		
		onInit: function() {

		},
		
		/////////////////////////////////////////////
		//  METHODS
		/////////////////////////////////////////////

		getToastModel: function(oEvent) {
			return this.getView().getModel("temp").getProperty("/toast");
		},

		updateGeneratedToastCode: function(type, title, message, config) {
			var input = this.getView().byId("generated_toast_code");
			input.setValue("Toastr." + type + "('" + message + "', '" + title + "', " + JSON.stringify(config) + ");");
		},

		getMessage: function (message) {
			if( message !== undefined && message !== null && message.length > 0 ) {
				return message;
			}
            var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
                '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                'Are you the six fingered man?',
                'Inconceivable!',
                'I do not think that means what you think it means.',
                'Have fun storming the castle!'
            ];
        	this.messageIndex++;
            if (this.messageIndex === msgs.length) {
                this.messageIndex = 0;
            }

            return msgs[this.messageIndex];
		},
		
		getConfig: function(config) {
			config.onclick = this.isOnClickFlagged() ? function () { alert('Custom onclick callback'); } : null;
			config.onShown = this.isOnShowFlagged() ? function () { alert('Custom onShown callback'); } : null;
			config.onHidden = this.isOnHiddenFlagged() ? function () { alert('Custom onHidden callback'); } : null;
			config.onCloseClick = this.isOnCloseFlagged() ? function () { alert('Custom onCloseClick callback'); } : null;
			return config;
		},
		
		isOnClickFlagged: function() {
			return this.getView().getModel("temp").getProperty("/onclick_flagged");
		},
		
		isOnShowFlagged: function() {
			return this.getView().getModel("temp").getProperty("/onshow_flagged");
		},
		
		isOnHiddenFlagged: function() {
			return this.getView().getModel("temp").getProperty("/onhidden_flagged");
		},
		
		isOnCloseFlagged: function() {
			return this.getView().getModel("temp").getProperty("/oncloseclick_flagged");
		},

		/////////////////////////////////////////////
		//  EVENTS
		/////////////////////////////////////////////

		onCloseButtonSelected: function(oEvent) {
			var selected = oEvent.getParameter("selected");
			if( !selected ) {
				this.getView().getModel("temp").setProperty("/oncloseclick_flagged", false);
			}
		},

		onToastPositionSelect: function(oEvent) {
			var positionClass = oEvent.getSource().getButtons()[oEvent.getParameter("selectedIndex")].data("positionClass");
			this.getView().getModel("temp").setProperty("/toast/config/positionClass", positionClass);
		},

		onToastInfoClick: function(oEvent) {
			var toast = this.getToastModel();
			var message = this.getMessage(toast.message);
			var config = this.getConfig(toast.config);
			Toastr.info(message, toast.title, config);
			this.updateGeneratedToastCode('info', message, toast.title, config);
		},
		
		onToastSuccessClick: function(oEvent) {
			var toast = this.getToastModel();
			var message = this.getMessage(toast.message);
			var config = this.getConfig(toast.config);
			Toastr.success(message, toast.title, config);
			this.updateGeneratedToastCode('success', message, toast.title, config);
		},
		
		onToastWarningClick: function(oEvent) {
			var toast = this.getToastModel();
			var message = this.getMessage(toast.message);
			var config = this.getConfig(toast.config);
			Toastr.warning(message, toast.title, config);
			this.updateGeneratedToastCode('warning', message, toast.title, config);
		},
		
		onToastErrorClick: function(oEvent) {
			var toast = this.getToastModel();
			var message = this.getMessage(toast.message);
			var config = this.getConfig(toast.config);
			Toastr.error(message, toast.title, config);
			this.updateGeneratedToastCode('error', message, toast.title, config);
		},
		
		onClearAllToastClick: function(oEvent) {
			Toastr.clearAllToast();
		},

		onClearLastToastClick: function(oEvent) {
			Toastr.clearLastToast();
		},
		

	});
});