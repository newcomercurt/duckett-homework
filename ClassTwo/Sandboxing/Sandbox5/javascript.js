var clicker = 0;

$("button").on("click", function() {
    clicker++;
    $("#ancestor").append("<div>Ancestor.Generation "+ clicker + "</div>");
});

