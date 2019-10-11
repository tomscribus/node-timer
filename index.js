var express = require('express');
var request = require('request');
var path = require('path');
var moment = require('moment');

var app = express();

year = moment().format("YYYY");
month = moment().format("MM");
day = moment().format("DD");


app.use(express.static(`${__dirname}/./build`));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/timer', function (req, res) {
  request({
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic YOUR_API_KEY',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: `https://galeriecafe.hiboutik.com/api/time_tracking_date/1/${year}/${month}/${day}`
  }, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was re$
    res.send(body); // Print the HTML for the Google homepage.
  });
  console.log(day);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(8081);
console.log(`https://galeriecafe.hiboutik.com/api/time_tracking_date/1/${year}/${month}/${day}`);
