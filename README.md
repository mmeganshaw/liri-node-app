WHATS A 'LIRI?'
______________________________________________________________________________________

This application interprets linguistic commands and returns parameters relevant to those commands. This particular Language Interpretation and Recognition Interface we are using Spotify, OMDB and the Twitter API's to return search data.

USAGE
______________________________________________________________________________________


In order to use this application you will need to clone this repo onto your local. Once you have done that, create a .env file in the following format: 

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

With the API keys relevant to each application. You will need your own keys and tokens in order to run this application. 

Once you have done that and saved your .env file to the root of the project, you can run commands! 

To run Spotify, type in spotify-this-song + songTitle 

To run your latest tweets from Twitter, type in my-tweets

To run a movie title query, type in movie-this + movieTitle

Have fun! :) 
