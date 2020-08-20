fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=chicago bears&api-key=rl5k3p12c1hAX8aZEb72aCelil9jbwEf')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data.response.docs[0].headline.main)
})
.catch(err => {
  //Do something here if it errors out.
})
