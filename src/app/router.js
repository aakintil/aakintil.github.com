/*
	# Defines the main router
*/

window.Router = Backbone.Marionette.AppRouter.extend( {

	initialize: function( options ) {

		var containerView = options.containerView;
		
	},

	appRoutes: {
		"(/)"								: "handleRouteIndex",
		//		"(/):page"					: "renderPage"
		// "section/:id" 					: "handleRouteSection",
	}

});