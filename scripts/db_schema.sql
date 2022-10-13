CREATE TABLE "User_Table" (
  "ID" varchar(PK),
  "Password" varchar,
  "Email" varchar,

);
CREATE TABLE "Result_Table" (
  "ID" varchar(PK),
  "return" varchar,
  "Number_of_trades" int,
  "Winning_trades" varchar,
  "Losing_trades" varchar,
  "Max_drawdown" varchar,
  "Sharpe_ratio" varchar
);