require("dotenv").config();
const express = require("express");
const indexRoute = require("../routes");
const applyMiddleware = require("../middleware");
const {
  resetPasswordAttempt,
  resetUserEmailAttempt,
} = require("../utils/cron");

const app = express();

// use middleware
applyMiddleware(app);

// use router
app.use("/api/v1", indexRoute);
app.get("/", (_req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to the Kollsh API",
  });
});
// cron job
resetUserEmailAttempt();
resetPasswordAttempt();
// handle global error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(err.status || 500).json({
    status: err.status,
    name: err.name,
    message: err.message,
    details: err.details,
  });
});

module.exports = app;
