jQuery(function($) {

  var $nav = $('#nav');
  var $win = $(window);
  var winH = $win.height()/10*7; // Get the window height.

  $win.on("scroll", function() {
    if ($(this).scrollTop() > winH - 81) {
      $nav.addClass("bluenav");
      $nav.addClass("bluenavtext");
      $nav.removeClass("whitenav");
      $nav.removeClass("whitenavtext");
    } else {
      $nav.addClass("whitenav");
      $nav.addClass("whitenavtext");
      $nav.removeClass("bluenav");
      $nav.removeClass("bluenavtext");
    }
  }).on("resize", function() { // If the user resizes the window
    winH = $(this).height()/10*7; // you'll need the new height value
  });

});