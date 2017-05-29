/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {

		this.containerView = options.containerView;
		this.prismicURL = 'https://aderinsola.prismic.io/api';
		this.getContentFromPrismic();
	},

	handleRouteIndex: function (routeData) {

		// Clear the region
		//		this.containerView.content.empty();
		// Init view
		// var view = new window.View();
		// Show  view
		// this.containerView.main.show( view );
	},

	// getter functions

	getContentFromPrismic: function () {
		//		console.log("getting content from prismic \n", Prismic);

		Prismic.api(this.prismicURL, function (error, api) {
			api.query("", {}, function (error, response) {
				// Log error
				if (error) console.log("Prismic error: ", error);
				else {
					// console.log("Prismic success, fetching data...", response)
					// Create the model from the Prismic response

					// TODO 
					// ------------------
					// have to figure out how to render the content view from here
					// ------------------

					// create the pages collection with each page inside the object
					var pages = new window.PagesCollection([], response.results);

					// create the content layout view. pass the pages object so content know's what each attribute is
					var content = new window.ContentLayout({
						'pages': pages
					});

					// let content render itself information 
					content.render();
					//
					// var pages = new window.ModelArticlesCollection([], response.results);
					// Init view
					//					var view = new window.ViewHome({
					//						"articles": articles
					//					});
					// Show  view
					// _this.containerView.main.show(view);
				}
			});
		});

	},

	renderPage: function (pageName) {
		console.log('calling renderPage function');
	},
	// handleRouteSection : function( section_id ) {

	// 	// Clear the region
	// 	this.containerView.main.empty();
	// 	// Init view
	// 	var view = new window.ViewSection( { "id" : section_id } );
	// 	// Show  view
	// 	this.containerView.main.show( view );
	// },



});