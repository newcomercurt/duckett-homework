$('.biggie').hover(function() {
    $(this).animate({
      fontSize: '175%'
    }, 1000);
  },
  function() {
    $(this).animate({
      fontSize: '100%'
    }, 1000);
  });
