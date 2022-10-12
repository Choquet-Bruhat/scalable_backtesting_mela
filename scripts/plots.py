import pandas as pd

import mplfinance as mpl 

from datetime import datetime, timedelta

import pandas as pd
import plotly.graph_objects as go


def plotSimpleCol(df: pd.DataFrame, cols: str):
    df[['Open', 'High', 'Low', 'Close']].plot(grid=True, figsize=(15, 10))

def mplfinancePlot(df: pd.DataFrame, candle_infos, type: str, style: str, volume: bool, figscale, title):
    setup = dict(type=type, style=style, volume=volume, figscale=figscale, title = title)
    mpl.plot(df[candle_infos],**setup,scale_width_adjustment=dict(volume=0.4,candle=1.35))


def plotlyPlotCandlestick(df: pd.DataFrame, sma: int, lma: int, title: str):
    # Candlestick
    fig = go.Figure(
        data = [
            go.Candlestick(
                x = df.index,
                open = df.Open,
                high = df.High,
                low = df.Low,
                close = df.Close
            ),
            go.Scatter(
                x = df.index, 
                y = df.Close.rolling(window=sma).mean(),
                mode = 'lines', 
                name = f'{sma}SMA',
                line = {'color': '#ff006a'}
            ),
            go.Scatter(
                x = df.index, 
                y = df.Close.rolling(window=lma).mean(),
                mode = 'lines', 
                name = f'{lma}SMA',
                line = {'color': '#1900ff'}
            )
        ]
    )

    fig.update_layout(
        title = title,
        xaxis_title = 'Date',
        yaxis_title = 'BTCUSDT',
        xaxis_rangeslider_visible = False
    )

    fig.show()