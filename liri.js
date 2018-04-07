require("dotenv").config();

var keys = require('keys.js');
var fs = require('fs');
var request = require('request');
var nodeArg = process.argv;
var command = nodeArg[2];
var title = nodeArg[3];
var Twitter = require('twitter');
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var params = {
	screen_name: 'meganshawinfo',
	count: 20
};

if (command === undefined) {
	var info = fs.readFileSync('random.txt', 'utf8')
	var choices = info.split(',');
	command = choices[0];
	title = choices[1];
}

if (command === 'my-tweets') {
	client.get('statuses/user_timeline', params, function (err, tweets, response) {
		if (err) {
			return console.log(err)
		}
		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text)
			console.log(tweets[i].created_at)
		}
	})
}

else if (command === 'spotify-this-song') {
	if (title === undefined) {
		title = 'Starboy'
	}
	spotify.search({ type: 'track', query: title, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].preview_url);
    });
}

else if (command === 'movie-this'){
    if (title === undefined){
        title = 'Mr. Nobody'
    }
    

    request('http://www.omdbapi.com/?t=' + title + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        var info = JSON.parse(body)
        console.log(info.Title)
        console.log(info.Year)
        console.log(info.imdbRating)
        console.log(info.Ratings[1].value)
        console.log(info.Country)
        console.log(info.Language)
        console.log(info.Plot)
        console.log(info.Actors)        

})
}
else {
    console.log("I don't know that one! Could you try one of these?")
    console.log("my-tweets")
    console.log("spotify-this-song")
    console.log("movie-this")
}
