module.exports = {
    symbol:'BTCUSDT',
    timeframe:'1d',
    fromTS:`01/01/2022 00:00:00`,
    toTS:`09/30/2022 23:59:59`,
    fileName: 'BTCUSDT_JantoSep_data.csv',

    tfw:{
        '12h':12*60*60*1000,
        '15m':15*60*1000,
        '1d':1*24*60*60*1000,
        '1h':1*60*60*1000,
        '1m':1*60*1000,
        '2h':2*60*60*1000,
        '30m':30*60*1000,
        '3m':3*60*1000,
        '4h':1*60*1000,
        '5m':5*60*1000,
        '6h':6*60*60*1000,
        '8h':8*60*60*1000,
    },
    getParameters(){
        return{
            symbol:this.symbol,
            timeframe:this.timeframe,
            fromTS:new Date(this.fromTS).getTime(),
            toTS:new Date(this.toTS).getTime(),
            fileName:this.fileName,
            tfw:this.tfw,
        }
    }
}

