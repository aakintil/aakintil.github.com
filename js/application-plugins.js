// animate childrend widget / function 
// move to another js file later
$.fn.animate_children = function ( mobile ) {
  var view_more_container, type_container, name_container = "";  

  if ( mobile === false ) {

    this.hover ( function () {
      view_more_container = $(this).find(".more"); 
      type_container      = $(this).find(".type"); 
      name_container      = $(this).find(".name");
      // mouseenter function
      var $this = $(this); 

      $this.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
      TweenLite.to( $this, 1, { top: "-20px"} ); 
      TweenLite.to( name_container, 1, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8) } );
    }, function () {
      TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this) } );
    }); 

  }
  else {

    $(this).on("tapone", function () {

      view_more_container = $(this).find(".more"); 
      type_container      = $(this).find(".type"); 
      name_container      = $(this).find(".name");

      $("project-containers").each(function() {
        $(this).find(".name").transition({ opacity: 1, "font-size" : "80px" }, 1000, callback($(this).parent()));
        }); 
        

      $(this).animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
      TweenLite.to( $(this), 1, { top: "-20px"} ); 
      name_container.transition({ opacity: 0.07, "font-size" : "120px" }, 1000, show_others(0.8));


      // TweenLite.to( name_container, 0.02, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8) } );
    })

  }



  function callback(t) {
    show_others( 0 ); 
    TweenLite.to( t, 2, { top: "0", ease: "Bounce.easeOut" } ); 
    $(t).animate({ borderWidth: "2px", borderColor: "#918E8C" }, 2000, "easeOutCirc"); 
  }
  function show_others( o ) {
    var timeline = new TimelineLite();  
    timeline.to( [type_container, view_more_container ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#22b1ba"  } ); 
  }                                                                                                                                                                                                                                                                                                                                                                  
}

$.fn.ignore_animation = function() {
  this.hover ( function () {
    // do nothing
  })
}

// toggle menu widget / function 
$.fn.toggle_menu = function () {
  var resume = $("#resume"); 
  var contact = $("#contact"); 
  $(this).on("click", function () {
    var $this = $(this); 

    // you have to figure out a way to toggle the button and
    // change the layout depending on the screen size and device. 
    // cuz now it keeps moving the plus sign up cuz it thinks it's horizontal not vertical
    // maybe use enquire to add a "device" class when "max-width: 770px". 
    // if it has device class then tween the top, otherwise don't 

    $this.toggleClass("open"); 
    var timeline = new TimelineLite();  
    console.log( $this.attr("class")); 
    if ( $this.hasClass("open") ) {

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-30px", ease: "Bounce.easeOut" } ); 

      timeline.to( [resume, contact ], 1, {  marginLeft: 0, ease: "Power.easeInOut",  onComplete: rotate45($this, true)  });
      timeline.to( [resume, contact ], 0.5, { opacity: 1, delay: 1 }); 
    }
    else {
      $this.find("h1").removeClass("rotate");
      timeline.to( [resume, contact ], 0.5, { opacity: 0 }); 
      timeline.to( [resume, contact ], 2, {  marginLeft: "-500px", ease: "Power.easeInOut",  onComplete: rotate45($this, false)  });

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-140px", ease: "Bounce.easeOut" } ); 
    }

  } ); 

}; 



