from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

app = Flask(__name__)
api = Api(app)
scene = {

}
backtest_metrics = {
    1: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    2: {"return": 1700, "Number_of_trades": 40, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    3: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353},
    4: {"return": 1500, "Number_of_trades": 50, "Winning_Trades": 100, "Losing_Trades": 21, "Max_drawdown": 16, "Sharpe_Ratio": 11.34353}
}
post_scene_args = reqparse.RequestParser()
post_scene_args.add_argument("start_date", type=str, help = "start_date is Required", required=True)
post_scene_args.add_argument("end_date", type=str, help = "end_date is Required", required=True)
post_scene_args.add_argument("coin", type=str, help = "coin is Required", required=True)
post_scene_args.add_argument("smw", type=str, help = "smw is Required", required=True)
post_scene_args.add_argument("fmw", type=str, help = "fmw is Required", required=True)
post_scene_args.add_argument("run_location", type=str, help = "run_location is Required", required=True)

class backtest(Resource):
    def get(self, backtest_id):
        return backtest_metrics[backtest_id]

    def post(self, backtest_id):
        args = post_scene_args.parse_args()
        scene[backtest_id] = {"start_date": args["start_date"], "end_date": args["end_date"], "coin": args["coin"], "smw": args["smw"], "fmw": args["fmw"], "run_location": args["run_location"] }
        return scene[backtest_id]

class backtests(Resource):
    def get(self):
        return backtest_metrics

api.add_resource(backtest, '/backtest/<int:backtest_id>')
api.add_resource(backtests, '/backtests')

if __name__ == '__main__':
    app.run(debug=True)