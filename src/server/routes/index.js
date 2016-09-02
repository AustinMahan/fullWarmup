const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome!';
  res.render('index', renderObject)
});

module.exports = router;
