# Scalable backtesting 
<img title="Mela" alt="Alt text" src="/images/cryptoTrading.png" width= "1000">

# Overview
A startup called Mela wants to make it simple for everyone to enter the world of cryptocurrencies. It also wants to give investors a reliable source of investment while lowering the risk associated with trading cryptocurrencies. This project's aim is to design and build a reliable, large-scale trading data pipeline. 


# Data
There are a number of data points that yahoo finance and binance provide, but for the purpose of testing the backend development, we started off with the candlestick data.
A brief description of what a K-line or candlestick data is can be found [here](https://www.investopedia.com/terms/c/candlestick.asp).

For this project we built a simple 'getdata' utility using node, to extract data from binance API.
USAGE: * First clone the repository and initialize npm.
       * Then specify the Timeframe, file name on which the data is to be written and the range of time.
       * Finally run kline_binance using the command 'node kline_binance'. This will generate a kline data in a csv format with the necessary fields like open, close, high and low.

 ## SET UP DOCKER CONTAINERS

After cloning the repository, change directory to the project folder and spin up the docker-compose file to run the web app on a cocker container together with kafka, airflow and spark all together. 
 
 * docker-compose -f docker-compose.yml up -d

Futher explanation about the tools and how to run them is given on separate readme files found in each folders.
