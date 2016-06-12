function handler(attempt, what, feeling, purpose){
this.attempt = attempt;
this.what = what;
this.feeling = feeling;
this.purpose = purpose;
}

var handlerArray =[
new handler("first", "handlebars", "feel", "okay"),
new handler("second", "handlebars", "feel", "better"),
new handler("third", "handlebars", "think", "")
];


var newTemplate = $('#handlebars').html();
var compiled = Handlebars.compile(newTemplate);
var newbie = compiled({handlerArray:handlerArray});
$('#test').append(newbie);

