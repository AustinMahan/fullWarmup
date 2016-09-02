const db = require('../db/connection');

function getAll (table, callback) {
  db.any("SELECT * FROM " + table, [true])
    .then(function (data) {
      callback(null, data)
    })
    .catch(function (err) {
      callback(err)
    })
}


module.exports = {
  postBeer, getAll
}
