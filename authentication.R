#make sure you have installed it first by: 
#install.packages("twitteR") 
#and
#install.packages("ROAuth")
library(ROAuth)
library(twitteR)
library(RCurl)
library(httpuv)

consumer_key <-  "Your consumer_key"
consumer_secret <- "Your consumer_secret"
access_token <- "Your access_token"
access_secret <- "Your access_secret"

download.file(url="http://curl.haxx.se/ca/cacert.pem", destfile="cacert.pem") #downloads the certificate

setup_twitter_oauth(consumer_key, consumer_secret, access_token, access_secret)

cred <- OAuthFactory$new(consumerKey=consumer_key, 
	consumerSecret=consumer_secret,
	requestURL='https://api.twitter.com/oauth/request_token',
	accessURL='https://api.twitter.com/oauth/access_token',
	authURL='https://api.twitter.com/oauth/authorize')

cred$handshake(cainfo="cacert.pem")
cred$handshake(cainfo= system.file('CurlSSL', 'cacert.pem', package = 'RCurl'))

