$("h1").on("click", function() {
  $("h1").each(function() {
    alert($(this).text());
  });
});
