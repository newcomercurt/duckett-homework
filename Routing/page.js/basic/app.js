// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
// page.base('/basic');

var $index = $('#index');
var $about = $('#about');
var $articles = $('#articles');
var $404 = $('#not-found');

page('/', index);
page('/about', about);
page('/articles', articles);
page();

function index() {
  showPage($index);
  $index.text('viewing index');
}

function about() {
  showPage($about);
  $about.text('viewing about');
}

function articles(ctx) {
  showPage($articles);
  $articles.text('viewing articles');
}

function showPage($element) {
  $('[data-page]').hide();
  $element.show();
}
