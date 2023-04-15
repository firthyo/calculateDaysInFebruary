import express from "express";
import moment from "moment";

const app = express();

app.get("/daysInFeb/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const isLeapYear = moment([year]).isLeapYear();
  //   https://momentjs.com/docs/#/query/is-leap-year/
  const daysInFebruary = isLeapYear ? 29 : 28;
  res.send(`In ${year} FEB has : ${daysInFebruary} days`);
});
// 20 24 28 32
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
