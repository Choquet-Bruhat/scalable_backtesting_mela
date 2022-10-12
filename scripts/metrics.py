import pandas as pd 
import numpy as np

class Btmetrics:
    """
    Designed for calculating various metrics about any back test run on the binance data set
    """
    def sharpe_ratio(return_series, N):
        """
        """
        mean = return_series.mean() * N
        sigma = return_series.std() * np.sqrt(N)
        return round(mean / sigma, 3)


    def calmar_ratio(return_series, N, max_drawdown):
        """
        """
        return round(return_series.mean() * N / abs(max_drawdown),3)

    
    def drawdowns(return_series):
        """
        """
        compounded = (return_series + 1).cumprod()
        peak = compounded.expanding(min_periods = 1).max()
        dd = (compounded/peak) - 1

        return round(dd, 3)

    def cagr(cum_rets_series, N):
        """
        """
        cagr = float((cum_rets_series[-1:].values)**(1/(len(cum_rets_series)/N)))-1
        return round(cagr,3)

    
    def returns():
        return df.Close.pct_change()