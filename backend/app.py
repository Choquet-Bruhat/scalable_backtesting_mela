from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

app = Flask(__name__)
api = Api(app)

backtest_metrics = {
    1: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    2: {"return": 1700, "Number_of_trades": 40, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    3: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    4: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353}
}

class backtest(Resource):
    def get(self, backtest_id):
        return backtest_metrics[backtest_id]

class backtests(Resource):
    def get(self):
        return backtest_metrics
        
api.add_resource(backtest, '/backtest/<int:backtest_id>')
api.add_resource(backtests, '/backtests')

if __name__ == '__main__':
    app.run(debug=True)