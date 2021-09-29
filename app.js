const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");
const request = require("request");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', function (req, res) {
	res.render('home');
  })

app.get('/kv', function (req, res) {
	res.redirect('/');
})

app.get('/kv', function (req, res) {
	res.redirect('/');
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log("server started at 3000 port");
});
