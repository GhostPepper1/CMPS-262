var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=chicago bears&api-key=rl5k3p12c1hAX8aZEb72aCelil9jbwEf'

function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var articles = data.response.docs;

  //Loop to get all results from article articlesearch
  for (var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].web_url);
  }
}
