var handler = {
  attempt: 'first',
  what: 'handlebars',
};

var newTemplate = $('#handlebars').html();
var compiled = Handlebars.compile(newTemplate);
var newbie = compiled(handler);
$('#test').append(newbie);
