const rp = require('request-promise');
const bottleneck = require('bottleneck');
const _ = require('lodash');
const config = require('./config');
const fs = require('fs');
const csv = require('fast-csv'); 
const log = console.log; 

//get array of requests from timestamps
const getRequestArray = ({symbol,fromTS,toTS,timeframe,tfw}) => {
    const barw = tfw[timeframe];
    const n = Math.ceil((toTS - fromTS)/(1000*barw));
    return _.times(n, (i) => {
        const startTS = fromTS + i*1000*barw;
        return `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${timeframe}&startTime=${startTS}&limit=1000`;
    });
}


//create an asynchronous function that adheres to binance rate limit (1200 requests/min)
const limiter = new bottleneck({
    reservoir:15,
    reservoirRefreshAmount:15,
    reservoirRefreshInterval:1*1000,
    maxConcurrent:15,
    minTime:80,

});

//call the kline URL and return
const getKline = async (url) => {
    try{
        return JSON.parse(await rp(url));
    }
    catch(e){
        log(e);
        return[];
    }
}

//Wrapper for the async func. to limit its frequency
const wrapKline = limiter.wrap(getKline);

// data downloader
const download = async () => {
    const {symbol,timeframe,fromTS,toTS,fileName,tfw} = config.getParameters();
    const reqArray = getRequestArray({symbol,fromTS,toTS,timeframe,tfw});
    log(`Total No. API requests to process => ${reqArray.length}`);
    log(`Initiating download...`);
    const header = [["Date","Open","High","Low","Close","Volume","QuoteVolume"]];
    const results = [...header,..._.flatten([...await Promise.all(reqArray.map(item => wrapKline(item)))]).map(d => [new Date(d[0]).toLocaleString(),d[1],d[2],d[3],d[4],d[5],d[6]])];

    // save to csv
    const ws = fs.createWriteStream(fileName);
    csv.write(results,{headers:true}).pipe(ws).on('finish',() => log(`Candlestick data has been downloaded to ${fileName}`));
}


download();