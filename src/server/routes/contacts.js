const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const db = require('../db/connection');
router.get('/', function (req, res, next) {
  queries.getAll('names', function(err, data) {
    if (err) {
      res.send(err)
    }
    var renderObj = {};
    renderObj.data = data;
    res.render('contacts', renderObj)
  })
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  queries.getOne('names', id, function(err, data) {
    if (err) {
      res.send(err)
    }
    var renderObj = {};
    renderObj.data = data;
    renderObj.title = 'One Person'
    res.render('contacts', renderObj)
  });
})

router.post('/', function(req, res, next) {
  var body = req.body
  if (body.firstname && body.lastname && body.dob && body.eyecolor && body.phone) {
    queries.addOne('names', body.firstname, body.lastname, body.dob, body.eyecolor, body.phone, function(err, data) {
      if (err) {
        res.send(err)
      }
      res.redirect('http://localhost:3000/contacts')
    })
  }
})

router.put('/:id', function(req, res, next) {
  var id = req.params.id
  var body = req.body
  if (Object.keys(body).length > 0) {
    var column = Object.keys(body)[0]
    var value = body[Object.keys(body)[0]]
  }
  queries.updateOne('names', id, column, value, function(err, data) {
    if (err) {
      res.send(err)
    }
    var renderObj = {};
    renderObj.data = data;
    res.render('contacts', renderObj)
  })
})

router.delete('/:id', function (req, res, next) {
  var id = req.params.id
  queries.deleteOne('names', id, function(err, data) {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
})

module.exports = router;
