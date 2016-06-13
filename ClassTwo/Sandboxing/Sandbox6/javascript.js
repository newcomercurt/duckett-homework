var clicker = 0;

$('#add').on('click', function() {
  clicker++;
  $('#ancestor').append('<div>Ancestor.Generation ' + clicker + '</div>');
});

$('#clear').on('click', function() {
  $('#ancestor').empty();
});
