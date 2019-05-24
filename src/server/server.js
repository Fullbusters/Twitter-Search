
const express = require('express')
var twitter = require('twitter')
const app = express()
const port = 8000

var client = new twitter({
    consumer_key: 'G0ZSMT6LmJAZjpUk90HuJE1tj',
    consumer_secret: 'WFxv7fmkluiSxMG0wWRXeoJWgWrGHqVtoAmwTPncR4Vgr7L8Jy',
    access_token_key: '922886566242111489-tvOip0vFfw3sLy11honHZqLkftqZAaQ',
    access_token_secret: 'K4kGhLlUTsA5No1e3TNUHE6uRLA9QEjpeTmcq1MNPvwC5'
  });


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/twitter/search', (request, res) => {
    var q = request.param('q') || 'react';
    console.log(q)
    client.get('/search/tweets', {q: q}, function(error, tweets, response) {
		res.send(tweets);
	});
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})