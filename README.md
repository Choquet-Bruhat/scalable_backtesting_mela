# Scalable backtesting 
<img title="Mela" alt="Alt text" src="/images/cryptoTrading.png" width= "1000">

# Overview
Mela is our client and wants to make it simple for everyone to enter the world of cryptocurrencies. It also wants to give investors a reliable source of investment while lowering the risk associated with trading cryptocurrencies.   
Although the past performance of any financial market is never a reliable indicator of the future, it is important to run backtests that simulate current and past particular situations as well as their trend over time. Having a clear understanding of the financial system, stock market trading,  and recognizing the complex data engineering systems involved in the crypto and general stock market trading systems are essential.

# Project Objective 
The objective of this project is to design and build a reliable, large-scale trading data pipeline that can run various backtests and store various useful artifacts in a robust data warehouse system.

# Data
* There are a number of data points that yahoo finance and binance provide, but for the purpose of testing the backend development, we started off with the candlestick data.
A brief description of what a K-line or candlestick data is can be found [here](https://www.investopedia.com/terms/c/candlestick.asp).

* For this project we built a simple 'getdata' utility using node, to extract data from binance API.
USAGE: 
* First clone the repository and initialize npm.
* Then specify the Timeframe, file name on which the data is to be written and the range of time.
* Finally run kline_binance using the command 'node kline_binance'. This will generate a kline data in a csv format with the necessary fields like open, close, high and low in the same directory with the kline_binance.js file.

 ## SET UP DOCKER CONTAINERS

After cloning the repository, change directory to the project folder and spin up the docker-compose file to run the web app on a docker container together with kafka, airflow and spark all together. 
 
 * docker-compose -f docker-compose.yml up -d

Futher explanation about the tools and how to run them is given on separate readme files found in each folders.
