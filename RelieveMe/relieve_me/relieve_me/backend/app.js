var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");

const manhattan = require("./routes/manhattan.js");
const queens = require("./routes/queens.js");
const brooklyn = require("./routes/brooklyn.js");
const bronx = require("./routes/bronx.js");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/manhattan", manhattan);
app.use("/queens", queens);
app.use("/brooklyn", brooklyn);
app.use("/bronx", bronx);

app.get("/", (req, res) => {
  res.send("This is the homepage!");
});

app.get("*", (req, res) => {
  res.send("There's an ERROR! Try again!");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
