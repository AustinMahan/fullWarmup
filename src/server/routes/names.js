const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const db = require('../db/connection');

router.get('/', function (req, res, next) {
  queries.getAll('beer', function (err, result){
    if (err){
      res.send(err)
    }
    res.send(result)
  })
});

module.exports = router;
