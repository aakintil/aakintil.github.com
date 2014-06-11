/////////////////////////
// Main Application File
/////////////////////////

var highlight = { 
  work: "#428cff", 
  contact: "#4ad6de", 
  about: "#613db5"
}
// console.log("global variable ", sessionStorage)
var page = ""; 

// Document ready 
$(document).ready( function() {

  // $("#project").hide()//append( contents["notebook"]); 
  // or
  // alpha:0, display:''
  TweenMax.to($('#project'), 1, { css:{ height: "0", opacity: 0 } } );
  // $("img.lazy").lazyload();
  // $("#project img").unveil(200, function() {
  //   $(this).load(function() {
  //     this.style.opacity = 1;
  //   });
  // });
 

    // $("img.lazy").lazyload({ effect: "fadeIn" });  
  

  // slowly load and animate the page
  $("#nav").animate({ opacity: 1 }, 1900, function() {
    $("#content").animate({ opacity: 1 }, 1500, function() {
      $("#footer").animate({ opacity: 1 }, 1000)
    })
  });

  // different color hover effects for menu links
  $("#nav ul li").hover( function() {
    var el = $(this).attr("class"); 
    var border_color = "2px solid " + highlight[ el ];
    $( this ).css({ border: border_color })  
  }, 
  function() {
    if ( !$( this ).hasClass("active") )
    $( this ).css({ border: "2px solid transparent" }); 
  }); 

  // console.log("the contents ", contents)
  $(".card").on("click", function() {
    var value = $(this).attr("id"); 
    var body = contents[value]
    // $("#project").html( ); 

    $("#project").html( body ); 
    var h = $("#project").children().height()+1000; 
    var incr = "+="+h; 
    console.log(incr)
    TweenMax.to($('#project'), 2, { height: incr,
    onComplete: function(){ TweenMax.to($('#project'), 1, {css: { opacity: 1 } } ) }
  }); 

} ); 


// 
$('#project').on('click', "#close", function () {
  console.log("close"); 
  // TweenMax.to($('#project'), 3, { scaleY: 1 } );
  // $("#project").empty(); 
});

}); 


// hide the projects and move left for animation
// $("#project").hide(); 
// $("#project").children().css({ opacity: 0 }); 
// $("#project").children().each( function() {
  //   $(this).css({ marginLeft: "-1000px" });  
  // } )

  // $('#project').on('click', '#close', function (event) {
    //   console.log(this)
    //   $("#project").fadeTo(0)
    // });
