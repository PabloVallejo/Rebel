/**
* Controller: OBJECT_NAME
*/
( function( $, window, document, view, model, utilities ) {

	var OBJECT_NAME = Gillie.Controller.extend({

		// Called on instantiation
		initialize: function() {

		}

	});

	// Global Exposition
	window.App.Controllers.OBJECT_NAME = new OBJECT_NAME();


})( this.jQuery, this, this.document, this.App.Views.OBJECT_NAME, this.App.Models.OBJECT_NAME, this.App.Helpers.Utilities );
