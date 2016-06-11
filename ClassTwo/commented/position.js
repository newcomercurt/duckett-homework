$(function() {
  //this caches the window position so it can be used to determine when the ad will display
  var $window = $(window);
  //this caches the slideAd so it can be used to determine when to displace the ad
  var $slideAd = $('#slideAd');
  //thevalue of of the height is calculated and stored in the endzone
  var endZone = $('#footer').offset().top - $window.height() - 500;
  //creates an event listener for whenever the user scrolls on the window
  $window.on('scroll', function() {
  //creates a conditional that checks to see if scrolltop is greater than the height of the endzone to see how far the user is from top of page
    if (endZone < $window.scrollTop()) {
      //if the condition is trye the ad slides in from the right hand side at 250 miliseconds
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      //if the condition is not true the function will stop
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});
