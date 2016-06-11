$(function() {
  //targets the element ul and adds a paragraph before it with a class of notice
  $('ul').before('<p class="notice">Just updated</p>');
  //the list items with a class of hot are targeted to add a plus sign before them.
  $('li.hot').prepend('+ ');
  //a new list item of gluten free soy sauce is created
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  //the new list item is added after the last list item
  $('li:last').after($newListItem);
});
