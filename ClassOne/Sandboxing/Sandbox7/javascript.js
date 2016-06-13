$('li').on('click', function() {
  $('li').each(function() {
    $(this).addClass('clicked');
  });
});
