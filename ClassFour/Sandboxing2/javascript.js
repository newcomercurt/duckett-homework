$(function() {
  var textArea = $('textarea');
  var output = $('#output');
  function display() {
    var textVal = textArea.val();
    var text1 = marked(textVal);
    output.html(text1);
    output.find('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
  textArea.on('input', display);
  $('button').on('click', function() {
    $(document.body).append(output.html());
  });
  display();
});
