const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");
const request = require("request");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/kv_putra', function (req, res) {
	res.render('home');
  })

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log("server started at 3000 port");
});