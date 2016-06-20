// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
// page.base('/basic');

page('/', index);
page('/about', about);
page('/contact', contact);
page('/contact/:contactName', contact);
page();

function index() {
  $('article').text('viewing index');
}

function about() {
  $('article').text('viewing about');
}

function contact(ctx) {
  $('article').text('viewing contact ' + (ctx.params.contactName || ''));
}
