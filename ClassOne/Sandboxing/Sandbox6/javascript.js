$("h1").on("click", function() {
  $(this).remove();
});

$("h2").on("click", function() {
  $(this).append("<p>howdy</p>");
});
$("p").on("click", function() {
  $("<p>appendedto</p>").appendTo(this);
});
