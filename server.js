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

app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var Song = require('./models/songs.js');

var User = require('./models/users.js')

var mongodbUri = 'mongodb://localhost/songs';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect(mongooseUri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Song database connected.');
});


app.get("/test", (req, res, next) => {
  res.json('hello');
});

app.get("/search", (req, res, next) => {
  spotifyApi.searchTracks('track:Montana')
  .then(function(data) {
    Song.find(function(err, songs){
      console.log(songs);
      if (err) {
        next (err);
      } else {
        data.body.tracks.items.forEach((s)=>{
          console.log(data.body.tracks.items);
          console.log(s.id);
          let songMatch = songs.find((dbSongs)=>{
            if (dbSongs.track == s.id) {
              return true
            } 
          }) 
          s.likeCount = songMatch.likeCount;
          res.json(data.body);           
        })
      }
    })
    console.log(data.body);
    res.json(data.body);

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

app.post('/songs', function (req, res, next) {
  var song = new Song();
  console.log(req.body);
  song.track = req.body.track
  song.likeCount = req.body.likeCount;
  song.save(function (err, songReturned) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.json('song put in db: ' + songReturned.track);
    }
  });
});

app.post('/users', function (req, res, next) {
  var user = new User();
  user.username = req.body.username
  user.password = req.body.password;
  user.save(function (err, userReturned) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.json('User added to database: ' + userReturned.username);
    }
  });
});


app.post('/likes/:track', function (req, res, next) {
  var track = req.params.track;
  Song.findOne({track: track}, function(err, track){
    if (err) {
      next(err);
    } else {
      if (track) {
        track.likeCount ++; 
        track.save(function(err, updatedTrack){
          if (err){
            next(err);
          } else {
            res.json('song updated');
          }
        })
      } else {
        var song = new Song();
        song.track = req.params.track;
        song.likeCount = 1;
        song.save(function(err, addedSong){
          if (err){
            next(err);
          } else {
            res.json('song added');
          }
        })
      }
    }
  })
});

app.get('/songs', function (req, res, next) {
  Song.find(function (err, song) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.json(song);
    }
  });
})


app.post('/login', function (req, res, next) {

  User.find({username: req.body.username},function(err, user) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      console.log("--------")
      console.log(user);
    if (req.body.password === user[0].password){
      res.json(user);
    } else {
      res.json("WRONG")
      }      
    }
  });
})

app.listen(5000, () => {
  getToken();
  console.log('listening on port 5000 ' + config.spotify.id);
});


