# Social-Media-Analysis

This proposal is a web application which is used to analyse the tweets. I will be
performing sentiment analysis in tweets and determine where it is positive, negative or
neutral. This web application can be used by any organization office to review their
works or by political leaders or by any others company to review about their products
or brands. The main feature of my web application is that it helps to determine the
opinion about the peoples on products, government work, politics or any other by
analysing the tweets. My system is capable of training the new tweets taking reference
to previously trained tweets.
The computed or analysed data will be represented in various diagram such as Piechart, Bar graph and Word cloud.

ALGORITHM

∑𝑖=𝑛(𝑝𝑜𝑠 𝑇𝑤𝑒𝑒𝑡𝑠)-∑𝑖=𝑛(𝑛𝑒𝑔 𝑇𝑤𝑒𝑒𝑡𝑠)= Tweet Score

Where n= Number of Tweets Searched by the user
Pos Tweets= Positive Tweets
Neg Tweets= Negative Tweets

Requirements 

OS - Windows 10 or above
Ram - 4GB or above
R and R studio Installed with the improted libraries 

How to Run

1) Get Twitter API Authecation 
2) Put your keys in Authecation.R
consumer_key <-  "Your consumer_key"
consumer_secret <- "Your consumer_secret"
access_token <- "Your access_token"
access_secret <- "Your access_secret"
3) Run Plumber via R Studio



