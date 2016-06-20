// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
// page.base('/basic');
var articleTemplate = $('#article-template').html();
var articleTemplateFn = Handlebars.compile(articleTemplate);

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

function articles() {
  showPage($articles);
  fetchArticles(function onArticlesLoaded(articles){
    articles.forEach(function(article) {
      var data = {
        title: article.title,
        content: marked(article.content)
      };
      var html = articleTemplateFn(data);
      $articles.append(html);
    });
    $articles.find('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
}

function showPage($element) {
  $('[data-page]').hide();
  $element.empty().show();
}

function fetchArticles(callback) {
  $.get('data.json').then(callback);
}
