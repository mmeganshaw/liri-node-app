
// Fixed the problem with the dotenv file. The reason none of my code worked was because I was using the wrong command from the dotenv package.
// I have a more recent update of the package and needed to follow instructions accordingly

require("dotenv/config")
// Requiring the Twitter NPM Package
var Twitter = require("twitter");
// Requiring the Spotify NPM Package
var Spotify = require("node-spotify-api");
// Using the API Keys
var keys = require("./keys.js");
// Requiring the Request NPM Package
var request = require("request");
// Requiring FS Read/Write Package
var fs = require('fs');

var client = new Twitter(keys.Twitter);

var command = process.argv[2];

var title = process.argv[3];


// Twitter Logic

if (command === "my-tweets") {
    getmytweets()
};


function getmytweets () {

    
    var params = {screen_name: "meganshawinfo", count: 20};
        

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.log(error);
            } 
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log("");
                console.log(tweets[i].text);
            }  

            
        })
};

// Movie Logic

if (command === "movie-this") {
    findthemovie()
};

function findthemovie () {

    if (title === undefined) {
            title = "Mr. Nobody";
            console.log("You didn't specify a movie title. Here's a good one!")
        }

    request('http://www.omdbapi.com/?t=' + title + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        
        var movie = JSON.parse(body)
        console.log("Movie Title: ", movie.Title);
        console.log("Year Movie Was Released: ", movie.Year);
        console.log("Language: ", movie.Language);
        console.log("Country: ", movie.Country);
        console.log("Plot: ", movie.Plot);
        console.log("Actors: ", movie.Actors);
        console.log("imdbRating: ", movie.imdbRating);
        console.log("Rotten Tomatoes: ", movie.Ratings[1].Value);
    })
};


var spotify = new Spotify(keys.Spotify);


if (command === "spotify-this-song") {
    spotifythissong();
}

function spotifythissong () {

    spotify.search({ type: 'track', query: title, limit: 1 }, function(error, response) {
        if (error) {
            return console.log("An error occurred! Try another request.");
        }
        console.log("Artist: ", response.tracks.items[0].artists[0].name);
        console.log("Song Title: ", response.tracks.items[0].name);
        console.log("Album Name: ", response.tracks.items[0].album.name);
        console.log("Spotify URL: ", response.tracks.items[0].preview_url);
    })

}
