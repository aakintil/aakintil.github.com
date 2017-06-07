/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend({

  initialize: function (options) {},

  start: function (options) {

    // Assign data
    // window.DataModel = new window.ModelData( options.data );

    // Render the main view
    this.rootView.render();

    // Start the history keeping
    Backbone.history.start();
  }

});

/*
	# The main entry point of the app
*/

// Init an app instance
var App = new window.Application();

$(document).ready(function () {

  // Load Data\
  this.prismicURL = 'https://aderinsola.prismic.io/api';
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

        //					console.log(_this)
        // _this.options.containerView.pages = pages;
        //					 console.error(_this.containerView)
        //
        // var pages = new window.ModelArticlesCollection([], response.results);
        // Init view
        //					var view = new window.ViewHome({
        //						"articles": articles
        //					});
        // Show  view
        // _this.containerView.main.show(view);
        //    });


        // Init the main view
        App.rootView = new window.MainLayout({
          pages: pages
        });

        // Init router
        var Controller = new window.Controller({
          containerView: App.rootView
        });
        var Router = new window.Router({
          controller: Controller,
          containerView: App.rootView
        });

        // Start the app
        // App.start( { "data": data } );
        App.start({
          'pages': pages
        });
      }

    });
  });

});
/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {
		console.log( options )
		//		this.mainLayout = options.containerView;
		//		this.prismicURL = 'https://aderinsola.prismic.io/api';
		//		this.getContentFromPrismic();
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
		var _this = this;
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

					//					console.log(_this)
					_this.options.containerView.pages = pages;
					//					 console.error(_this.containerView)
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
/*
	# Defines the data model for
*/

// CREATE A PAGE MODEL THAT INHERITS MOST OF THE PRISMIC INFO
window.PageModel = Backbone.Model.extend({

	defaults: {
		"title": "",
		"header": "",
		"brief": "",
		"skills": "",
		"hero-images": {
			"hero-image-1": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"hero-image-2": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"hero-image-3": {
				"url": "/img/default-image.jpg",
				"caption": null
			}
		},
		"process-block": {
			"process-image": {
				"url": "/img/default-image.jpg",
				"caption": null
			},
			"process-type": "",
			"process-title": "",
			"process-copy": ""
		},
		"url": "",
	}, // come back to and reset. if there aren't any values, then give them custom defaults

	initialize: function ({}, PrismicDocument) {
		this.document = PrismicDocument;
		this.createModelSchema(PrismicDocument);
	},

	createModelSchema(PrismicDocument) {
		// console.log(PrismicDocument) 
		// Set the ID
		// console.log(PrismicDocument.get('project-pages.description').asText())
		this.set("model_id", PrismicDocument.id);

		// setting the title
		this.set("title", PrismicDocument.get('project-pages.title') === null ? '' : PrismicDocument.get('project-pages.title').asText());

		// setting the page callout
		this.set("callout", PrismicDocument.get('project-pages.callout') === null ? '' : PrismicDocument.get('project-pages.callout').asText());

		// TODO 
		// --- this is an example of when you use this.defaults['something'] for values that should appear if prismic isn't working
		// setting the page callout
		this.set("description", PrismicDocument.get('project-pages.description') === null ? '' : PrismicDocument.get('project-pages.description').asText());


		// setting the skills section
		let skillsArray = PrismicDocument.get('project-pages.skills') === null ? '' : PrismicDocument.get('project-pages.skills').asText().split("\n") || '';
		this.set("skills", skillsArray);

		// setting the process section 
		// console.log(PrismicDocument.get('project-pages.process-block').value);
		let processBlocks = PrismicDocument.get('project-pages.process-block') === null ? '' : PrismicDocument.get('project-pages.process-block').toArray().map(function (process) {
			// store the original object
			let p = process.data;

			// new process obj
			let newProcessObj = {};

			// setting the copy 
			newProcessObj.copy = p['process-copy'].value[0].text;

			// setting the image 
			// console.log( p )
			newProcessObj.image = p['process-image'] === undefined ? '' : p['process-image'].value.main.url;

			// setting the title
			newProcessObj.title = p['process-title'].value[0].text;

			// setting the type
			newProcessObj.type = p['process-type'].value;

			return newProcessObj;
		})
		this.set('process', processBlocks)

		//		console.log(PrismicDocument.get('project-pages.process-block').toArray());

		//		this.set("url", "/#page/" + Document.id);
		//		console.log(this.attributes)
		// Get the title
		//		if (Document.get("article.title"))
		//			this.set("title", Document.get("article.title").asText());

		// PrismicDocument.fragments['project-pages.brief'].asHtml() works

		//		console.log("trying \n", PrismicDocument.getStructuredText('project-pages.title').asHtml());
		//		console.log("trying \n", PrismicDocument.get('project-pages.title').asHtml());
		//		console.log("in here \n", Prismic.get('Document')); 
		//		console.log("in here \n", PrismicDocument['data']['project-pages.title'].value[0].text); 
		/*
		// Set the url to this Article
		this.set("url", "/#article/" + Document.id);

		// Get the title
		if (Document.get("article.title"))
			this.set("title", Document.get("article.title").asText());

		// Create an array of Prismic ImageView objects
		var images;
		if (Document.fragments["article.images"]) {
			images = Document.fragments["article.images"].toArray().map(function (image) {
				// Get the image
				var img = image.getFirstImage().main;
				// Add the caption if it exists
				img.caption = (image.fragments["caption"]) ? image.fragments["caption"].asText() : null;
				return img;
			});
		} else {
			// TODO: Handle if no images
			images = [{
				"url": "/img/default-image.jpg",
				"caption": null
			}];
		}
		this.set("images", images);

		// Get the body
		if (Document.get("article.body"))
			this.set("body", Document.get("article.body").asHtml());

		// Get the blurb
		if (Document.get("article.blurb")) {
			// Use the blurb field
			this.set("blurb", Document.get("article.blurb").asText());
		} else if (Document.get("article.body")) {
			// Create a blurb by truncating the body
			this.set("blurb", Document.get("article.body").asText());
		}
		// Truncate the blurb
		var truncLength = 100;
		var blurb = this.get("blurb");
		var blurbTruncated = (blurb.length > truncLength) ? blurb.substring(0, truncLength) + "..." : blurb;
		this.set("blurb", blurbTruncated);


		// Get the author
		if (Document.get("article.article_author"))
			this.set("author", Document.get("article.article_author").asText());

		// Get the submitter
		if (Document.get("article.submitter"))
			this.set("submitter", Document.get("article.submitter").asText());

		// Set the publication date
		var date = new moment(Document.lastPublicationDate);
		this.set("date", date.format("YYYY.MM.DD"));

		// Set the tags
		this.set("tags", Document.tags);
*/
	},


	/*
		#	Methods
	*/



});
/*
	# Defines the collection for models
*/

window.PagesCollection = Backbone.Collection.extend({
    model: window.PageModel,

    initialize: function (array, PrismicDataArray) {
        // 
        this.prismicDataArray = PrismicDataArray;
        // For each Document
        _.each(this.prismicDataArray, function (document) {
            // Create a new Document Model
            var a = new window.PageModel({}, document);

            // Add it to this collection
            array.push(a);

        }.bind(this));
    },

    /*
    	#	Methods
    */




});
/*
	# Defines the view for the main layout
*/

window.ContentLayout = Backbone.Marionette.LayoutView.extend({

	el: ".layout--content",

	template: JST["views/content/contentLayout"],

	regions: {
		"mainContent": ".content-top-container",
		"supportingContent": ".content-bottom-container",
	},

	initialize: function (options) {
		this.pagesCollection = options.pages;
		this.selectedModel = options.selectedModel;
		let _pagesCollection = this.pagesCollection.models;
		//		_.each(_pagesCollection, function (i) {
		//			console.log(i.collection.prismicDataArray)
		//		});
		this.contentView = new window.ExecutiveSummaryView({
			'model': this.selectedModel,
			'collection': this.pagesCollection.prismicDataArray
		});
		this.processView = new window.ProcessView({
			'model': this.selectedModel,
			'collection': this.pagesCollection.prismicDataArray
		})
	},

	/*
		# View 
	*/

	onRender: function () {

		// apparently you're supposed to call this first? investigate
		// http://stackoverflow.com/questions/10946392/hiding-a-view-in-region-manager-when-another-view-is-shown
		// HACK
		this.supportingContent._ensureElement();
		this.regionManager._regions.mainContent.show(this.contentView)
		this.regionManager._regions.supportingContent.show(this.processView)
			// to hide the bottom area
			// this.supportingContent.$el.hide();

		//		var _this = this;
		//		setTimeout( function() {
		//			_this.supportingContent.$el.show(); 
		//		}, 2000 )
	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	// "click .toggleSupportingContent" : "toggleSupportingContent"

	/* toggleSupportingContent: {
		on click, 
		- increase the body, html, .layout--content height by 2 or the height of the expanded div. 
		- change the flex grow property of the top and bottom divs
		should work
			1. make element an element again 
			2. increase the height
			3. reveal the element
	}
*/
	// there needs to be an event where 
	// -- TODO -- "on button click, the supportingContent container is visible and grows"
	/*
		# Methods
	*/

});
/*
	# Defines the view for the main layout
*/

window.HeaderLayout = Backbone.Marionette.LayoutView.extend({

	el: ".header__container",

	template: JST["views/header/header"],

	regions: {
		"menu": ".header__menu",
		"logo": ".header__logo",
		"navbar": ".header__navbar",
	},

	initialize: function (options) {
		this.pages = this.options.pages;
	},

	/*
		# View 
	*/

	onRender: function () {
		//		console.log( "content rendering ", this.regions )
		var content = new window.ContentLayout({
			'pages': this.pages,
			'selectedModel': this.pages.models[0]
		});
		window.pages = this.pages;
		window.content = content;
		content.render();
	},

	/*
		# Events
	*/

	events: {
		"click .navigation-button": 'toggleNavigation'
	},

	/*
		# Methods
	*/

	toggleNavigation: (event) => {
		//		console.log("clicking \n", $(event.currentTarget).attr("id"));

		console.log("clicking \n", window.content);

		var content = new window.ContentLayout({
			'pages': window.pages,
			'selectedModel': window.pages.models[1]
		});
		window.content = content;
		var page = $(event.currentTarget).attr("id");
		window.location.hash = "#/" + page;
		content.render();
		
		// now we have to change the and get the window.pages.model that is associated with the clicked element. 
		// write a helper function that does animation too
		// function animate()
		// function loadData()
		// function redirect()
		// Prevent form from submitting
		//		event.preventDefault();

		// Get the input
		//		var page = $(event.currentTarget).attr("id");

		//		_.each(this.pages.models, function (model) {
		//				console.log("ooifjdklsa;fdsjaklf;asfdjsa")
		//			})
		// Navigate to search page with input
		// window.location.hash = "#/" + page;

		//		console.log(this, " fdklsajfdksla;jfdksl;ajfds;")
	}

});
/*
	# Defines the view for the main layout
*/

window.MainLayout = Backbone.Marionette.LayoutView.extend({

	el: "body",

	template: JST["views/main/main"],

	regions: {
		"header": ".layout--header",
		"content": ".layout--content",
	},

	initialize: function (options) {
		this.pages = options.pages;
	},

	/*
		# View 
	*/

	onRender: function () {

		var header = new window.HeaderLayout({
			'pages': this.pages
		});
		header.render();

		// use this as hook for animation 
		// when the main layout renders, render the header & content
		//		var header = new window.HeaderLayout(); 
		//		header.render();
	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	/*
		# Methods
	*/

});
/*
	# Defines the view that 
*/

window.ViewCompositeViewItem = Backbone.Marionette.ItemView.extend(
{
	className: "cv__item",
	template: JST["views/common/compositeView/compositeView_item"],

	initialize: function( options ) 
	{
		// 
	},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});

/*
	# Defines the view that
*/

window.ViewCompositeView = Backbone.Marionette.CompositeView.extend(
{
	
	template: JST["views/common/compositeView/compositeView"],
	childView: window.ViewCompositeViewItem,
	childViewContainer: ".cv__container",

	initialize: function( options ) {},
	/*
		# View 
	*/

	onRender: function() {},

	

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});
/*
	# Defines the view for 
*/

window.ExecutiveSummaryView = Backbone.Marionette.ItemView.extend({

  template: JST["views/content/executiveSummary/executiveSummary"],

  initialize: function (options) {
  },

  /*
  	# View 
  */

  onRender: function () {
    // Get rid of that pesky wrapping-div.
    // Assumes 1 child element present in template.
    this.$el = this.$el.children();
    // Unwrap the element to prevent infinitely 
    // nesting elements during re-render.
    this.$el.unwrap();
    this.setElement(this.$el);

      //		var old = this.$el;
      //		//		this.setElement('<div class="content--top"></div>');
      ////		console.log('old element \n', this.$el.context.innerHTML)
      //		old.replaceWith(this.$el.context.innerHTML);
  },

  /*
  	# Events
  */

  events: {},

  /*
  	# Methods
  */

});
/*
	# Defines the view for 
*/

window.ProcessView = Backbone.Marionette.ItemView.extend({

  template: JST["views/content/process/process"],

  initialize: function (options) {

  },

  /*
  	# View 
  */

  onRender: function () {
    // Get rid of that pesky wrapping-div.
    // Assumes 1 child element present in template.
    this.$el = this.$el.children();
    // Unwrap the element to prevent infinitely 
    // nesting elements during re-render.
    this.$el.unwrap();
    this.setElement(this.$el);

    //		var old = this.$el;
    //		//		this.setElement('<div class="content--top"></div>');
    ////		console.log('old element \n', this.$el.context.innerHTML)
    //		old.replaceWith(this.$el.context.innerHTML);
  },

  /*
  	# Events
  */

  events: {},

  /*
  	# Methods
  */

});