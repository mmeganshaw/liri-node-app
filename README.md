WHATS A 'LIRI?'
______________________________________________________________________________________

This application interprets linguistic commands and returns parameters relevant to those commands. This particular Language Interpretation and Recognition Interface we are using Spotify, OMDB and the Twitter API's to return search data.

USAGE
______________________________________________________________________________________


LIRI uses the following npm packages
Twitter
Spotify
Request
OMDB API.


In order to use this application you will need to clone this repo onto your local. Once you have done that, create a .env file in the following format: 

You will need to create the following keys.js file to run this app sucessfully. Inside keys.js your file will look like this:
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}
Get your Twitter API keys by following these steps:

Step One: Visit https://apps.twitter.com/app/new

Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.
Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.
Copy and paste them where the <input here> tags are inside your keys.js file.
Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.

LIRI's Commands

* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

With the API keys relevant to each application. You will need your own keys and tokens in order to run this application. 

Once you have done that and saved your .env file to the root of the project, you can run commands! 

To run Spotify, type in spotify-this-song + songTitle 

To run your latest tweets from Twitter, type in my-tweets

To run a movie title query, type in movie-this + movieTitle

Have fun! :) 

