from exts import db

"""
class Scene:
    id: int primaryKey
    start_date: date
    end_date: date
    coin: int
    smw: int
    fmw: int
    stake: int
    cash: int
    run_location: str
"""

class Scene(db.model):
    id = db.Column(db.Integer(), primary_key = True)
    start_date = db.Column(db.date(), nullable=False)
    end_date = db.Column(db.date(), nullable=False)
    coin = db.Column(db.Integer(), nullable=False)
    smw = db.Column(db.Integer(), nullable=False)
    fmw = db.Column(db.Integer(), nullable=False)
    cash = db.Column(db.Integer(), nullable=False)
    run_location = db.Column(db.Text(), nullable=False)