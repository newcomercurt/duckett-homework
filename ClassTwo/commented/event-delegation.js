//creates an event handler function
$(function() {
  var listItem, itemStatus, eventType;
//targets the items in the unorganized list that do not have an id of four when users click or put their mouse over the list item
  $('ul').on(
    //mousover the element
    'click mouseover',
    //but not with id of four
    ':not(#four)',
    //give object literal of important to the
    {status: 'important'},
    //below function runs & returns the item that is curently moused over if it is hot, the status of important which is just assigned to hot id, and the the type of event that triggered the code.
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      //targets the id of notes and displays the current item that is mousedover and it's status
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});
