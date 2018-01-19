var express = require('express');
var router = express.Router();
var request = require('request');

router.use('/', function(req, res, next) {
  request('https://rlt1-e45db.firebaseio.com/testObject.json', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    req.body.message = body.testMessage;
    next();
  });
});

router.get('/', function (req, res, next) {
  res.status(200).json({message: req.body.message});
});

module.exports = router;
