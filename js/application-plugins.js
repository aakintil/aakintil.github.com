// animate childrend widget / function 
// move to another js file later
var tap_tracker = []; 
var prev = 0; 
var curr = 0; 

$.fn.animate_children = function ( mobile ) {
  var view_more_container, type_container, name_container = "";  

  if ( _mobile ) {

    $(this).on("tapone", function(e) {

      // push the selected element to the "stack" / array
      tap_tracker.push($(this).attr("tag")); 
      var length = tap_tracker.length; 

      // store pointers
      curr = tap_tracker[ length - 1 ] 
      prev = tap_tracker[ length - 2 ]


      var current = $(".gallery").find( $(".project-containers[tag="+curr+"]"));
      var curr_name = current.find(".name")

      type_container      = current.find(".type"); 
      name_container      = current.find(".name");

      current.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
      TweenLite.to( current, 1, { top: "-20px"} ); 
      curr_name.transition({ opacity: 0.07, "font-size" : "120px" }, show_others(0.8, type_container )); 


      if ( prev !== curr && prev !== undefined ) {
        // reset previously selected element
        var previous = $(".gallery").find( $(".project-containers[tag="+prev+"]"));
        var prev_type = previous.find(".type"); 
        var prev_name = previous.find(".name");
        
        previous.animate({ borderWidth: "2px", borderColor: "#918E8C" }, 1000, "easeOutElastic"); 
        TweenLite.to( previous, 1, { top: "0px"} ); 
        prev_name.transition({ opacity: 1, "font-size" : "80px" }, show_others(0, prev_type ));
      }

      else if ( prev === curr 
        && prev.constructor === String 
        && curr.constructor === String ) {
      
          // if clicked twice then pull up new page
          
          var page_tag = current.attr("tag");
          var page = _project_pages.findTag( page_tag );
          page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page();
          TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px", ease: "SlowMo.easeIn", delay: 1 });
          new TimelineLite().to( [ $("#contact"), $("#resume") ], 2, { width: "60px", height: "68px", delay: 2 });
          TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );
        }
      });

    }
    
    else {
      $(this).hover ( function () {

        type_container      = $(this).find(".type"); 
        name_container      = $(this).find(".name");
        // swipe_icon      = $(this).find(".swipe"); 

        var $this = $(this); 

        $this.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
        
        // discrepancies with safari and chrome
        if ( !bowser.webkit ) {
          TweenMax.to( $this, 1, { top: "-20px"} );
          TweenMax.to( name_container, 1, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8, type_container) } );
        }
        else {
          TweenMax.to( $this, 1, { top: "-20px"} );
          name_container.transition({ opacity: 0.07, "font-size" : "120px" }, show_others(0.8, type_container ));   
        }
      
        
        $(this).on("click", function() {
          var page_tag = $(this).attr("tag");
          var page = _project_pages.findTag( page_tag );
          page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page();
          TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px", ease: "SlowMo.easeIn", delay: 1 });
          new TimelineLite().to( [ $("#contact"), $("#resume") ], 2, { width: "60px", height: "68px", delay: 2 });
          TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );
        })

      }, function () {
        if ( !bowser.webkit ) {
          TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this, type_container) } );
        }
        else {
          name_container.transition({ opacity: 1, "font-size" : "80px" }, callback(this, type_container ));
        }

        
      });
    }


  function callback(t, cont) {
    show_others( 0, cont); 
    TweenLite.to( t, 2, { top: "0", ease: "Bounce.easeOut" } ); 
    $(t).animate({ borderWidth: "2px", borderColor: "#918E8C" }, 2000, "easeOutCirc"); 
  }


  function show_others( o, c) {
    var timeline = new TimelineLite();  
    timeline.to( [ c ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#4ad6de"  } ); 
  }                                                                                                                                                                                                                                                                                                                                                                  
}


// toggle menu widget / function 
$.fn.toggle_menu = function () {
  var resume = $("#resume"); 
  var contact = $("#contact"); 
  $(this).on("click", function () {
    var $this = $(this); 

    $this.toggleClass("open"); 
    var timeline = new TimelineLite();  

    if ( $this.hasClass("open") ) {

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-30px", ease: "Bounce.easeOut" } ); 

      timeline.to( [resume, contact ], 1, {  marginLeft: 0, ease: "Power.easeInOut",  onComplete: rotate45($this, true)  });
      timeline.to( [resume, contact ], 0.5, { opacity: 1, delay: 0.1 }); 
    }
    else {
      $this.find("h1").removeClass("rotate");
      timeline.to( [resume, contact ], 1, { opacity: 0 }); 
      timeline.to( [resume, contact ], 2, {  marginLeft: "-500px", ease: "Power.easeInOut",  onComplete: rotate45($this, false)  });

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-140px", ease: "Bounce.easeOut" } ); 
    }

  } ); 

}; 



