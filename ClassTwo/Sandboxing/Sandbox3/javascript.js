$('.biggie').hover(function() {
  $(this).animate({
    fontSize: '175%'
  }, 1000,
    function() {
      $(this).animate({
        fontSize: '100%'
      }, 1000);
    });
});

$('.biggie').hover(function() {
  $(this).animate({
    opacity: 0.0,
    paddingLeft: '+=80'
  });
});

$('.biggie').click(function(){
  $('h1').animate({
    height: 'toggle'
  });
});
