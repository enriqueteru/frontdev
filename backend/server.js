const express = require("express");
const cors = require("cors");
const myParser =require("body-parser")

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(myParser.json({ limit: '256mb' }));
app.use(myParser.urlencoded({ limit: '256mb', extended: true }));
app.use(myParser.text({ limit: '256mb' }));

/**
 * Utils
 **/
const HTTPSTATUSCODE = require("./utils/handleStatusCode");

/**
 * Hello World
 **/
app.get("/", (req, res) => {
  res.send("Hola mundo! ;)");
});

/**
 * Router
 **/
const base = "/api";
app.use(base, require("./routes"));

/**
 * Errors
 **/
app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});

/**
 * Server listen
 **/
const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
