library(rtweet)
library(twitteR)
library(plumber)
library(tm)
library(SentimentAnalysis)
library(jsonlite)
library(RMySQL)
library(SnowballC)

#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}


#* @apiTitle Simple API

#* Echo provided text
#* @get /gettweet
function(name= "",no = 10) {
  hrc <- search_tweets(q = name, n = as.numeric(no),lang = "en")
  tweets_data(hrc)
} 




#* @apiTitle Simple API

#* Echo provided text
#* @get /getsentiment
function(name= "",no = 10) {
  arc <- search_tweets(q = name, n = as.numeric(no),lang = "en")
  arc <- iconv(arc$text, to='UTF-8')
  corpus <- VCorpus(VectorSource(arc))
  abc <-convertToDirection(analyzeSentiment(corpus)$SentimentQDAP)
  abc
} 


#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /insertname
function(name="") {
  sqlqueries <- sprintf("insert into tweet_search(search_name)values('%s')",name)
  mydb = dbConnect(MySQL(), user='root', password='1234', dbname='twitter_2', host='localhost')
  qs = dbSendQuery(mydb, sqlqueries)
} 

#* @apiTitle Simple API

#* Echo provided text
#* @param sr_no The number to be echoed in the response
#* @param season The text to be echoed in the response
#* @get /trend
function(){
  sqlqueries <- sprintf("select search_name,count(search_name)as toll from tweet_search group by search_name ORDER BY toll desc")
  qs = dbSendQuery(mydb, sqlqueries)
  data = fetch(qs, n=-1)
} 



search_tweets(q = "virat", n = 10,lang = "en")

