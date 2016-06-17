//     Modify #3 to use jQuery's .ajax() to load myData.json, instead of using .getJSON(). Pay attention to the pieces of
//     code you need to make .ajax() behave like .getJSON().
//[+1 E.C.] Extend #3 to include a <button>, and change F to not call
//     P, but register P as an event handler of the <button>. Verify that a button click causes data from myData.json to be printed.
// // [+1 E.C.] Modify #3 to include a <button> and move the entire .getJSON() code into a 'click' event handler for the <button>.
// Verify that a button click causes data from myData.json to be printed.
// [+1 E.C.] Explain how #5 differs from #6. If the user clicks the button many times, which solution is better, and why?
// Discuss
// In your own words, how do AJAX and JSON relate to each other? What is one question you have from the reading?

var home = function(style, market) {
  this.style = style;
  this.market = market;
  this.realtor = function () {
    console.log('sell sell sell');
  };
};

//first ajax call works
// $.ajax({
//   url: 'data.json',
//   dataType: 'text',
//   success: function(data) {
//     console.log('made it here');
//     var json = $.parseJSON(data);
//     for (var i = 0; i < json.length; i++)
//   {
//       $('#test').append('<div class="name">' + 'Style: ' + json[i].style + '<br>' + 'Market: ' + json[i].market + ' </>' );
//     }
//   }
// });

//extra credit with ajax request
$('#click').on('click', function(e) {
  $.ajax({
    type:'GET',
    url: 'data.json',
    dataType: 'text',
    success: function(data) {
      console.log('made it here');
      var json = $.parseJSON(data);
      for (var i = 0; i < json.length; i++)
    {
        $('#test').append('<div class="name">' + 'Style: ' + json[i].style + '<br>' + 'Market: ' + json[i].market + ' </>' );
      }
    }
  });
  e.preventDefault();
});
