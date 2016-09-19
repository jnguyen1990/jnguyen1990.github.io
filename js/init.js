$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script



/* Create HTML5 element for IE */
document.createElement("section");

// *****************************************
// assume we have gotten the target from the url param:


$('a.content-link').click(function (e) {
   var $this = $(this),
       containerSelector = $this.attr('href'),
       $links = $('a.content-link');
   e.preventDefault();
   $('div.content-container').not(containerSelector).hide();
   $(containerSelector).show();
    
   $links.not($this).toggleClass('active', false);
   $this.toggleClass('active', true);
});

var target = '#'+'c1';
$('a[href="'+target+'"].content-link').click();

// *****************************************
   $(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height() - 320;
       if ($(window).scrollTop() > navHeight) {
         $('nav').addClass('fixed');
       }
       else {
         $('nav').removeClass('fixed');
       }
    });
  });

// *****************************************

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});