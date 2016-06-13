$('.biggie').hover(function() {
  $(this).animate({
    fontSize: '175%'
  });
},
  function() {
    $(this).animate({
      fontSize: '100%'
    });
  });
