let express = require("express");
let app = express();
let bodyParser = require("body-parser");
var SpotifyWebApi = require('spotify-web-api-node');
var config = require('./config.js');
var fetch = require('node-fetch');
var auth = '';
var token;
const SPOTIFY_URL = 'https://api.spotify.com/v1/search?q=happy&type=track'
let spotifyApi;

app.get("/test", (req, res, next) => {
  res.json('hello');
});

app.get("/search", (req, res, next) => {
  spotifyApi.searchTracks('track:Montana')
  .then(function(data) {
    res.json(data.body);
    console.log(data.body);
  }, function(err) {
    console.error(err);
  });
});


function getToken() {
  spotifyApi = new SpotifyWebApi({
    clientId: config.spotify.id,
    clientSecret: config.spotify.secret,
    redirectUri: 'http://localhost:3000/callback'
  });
  // Retrieve an access token
  spotifyApi.clientCredentialsGrant()
    .then(function (data) {
      //console.log('The access token expires in ' + data.body['expires_in']);
      //console.log('The access token is ' + data.body['access_token']);
      token = data.body.access_token;
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    }, function (err) {
      console.log('Something went wrong when retrieving an access token', err.message);
    });
  if (config.debug) console.log('A call was made to the spotify endpoint');
}

app.listen(5000, () => {
  getToken();
  console.log('listening on port 5000 ' + config.spotify.id);
});


