$(function() {  //targets all of the list items when they are clicked  $('li').on('click', function() {    //this refers to the element that was specifically clicked and runs the animate method    $(this).animate({      //when run, the opacity and padding changes on the clicked list item and it does so over 500 miliseconds      opacity: 0.0,      paddingLeft: '+=80'    }, 500, function() {      //when the animation is done running, this removes the list item that was clicked      $(this).remove();    });  });});