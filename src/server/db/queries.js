const db = require('../db/connection');

module.exports = {
  getAll, getOne, updateOne, addOne, deleteOne
}

function getAll (table, callback) {
  db.any("SELECT * FROM " + table, [true])
    .then(function (data) {
      callback(null, data)
    })
    .catch(function (err) {
      callback(err)
    })
}

function getOne(table, id, callback) {
  db.any(`SELECT * FROM ${table} WHERE id=${id}`, [true])
    .then(function (data) {
      callback(null, data)
    })
    .catch(function (err) {
      callback(err)
    })
}

function updateOne(table, id, column, value, callback) {
  db.any(`UPDATE ${table} SET ${column} = '${value}' WHERE id=${id}`)
    .then(function (data) {
      callback(null, data)
    })
    .catch(function(err) {
      callback(err)
    })
}

function addOne(table, firstname, lastname, dob, eyecolor, phone, callback) {
  db.any(`INSERT INTO ${table}(firstname, lastname, dob, eyecolor, phone) VALUES ('${firstname}', '${lastname}', '${dob}', '${eyecolor}', '${phone}')`, [true])
    .then(function (data){
      callback(null, data)
    })
    .catch(function(err){
      callback(err)
    })
}

function deleteOne(table, id, callback) {
  db.any(`DELETE FROM ${table} WHERE id = ${id}`, [true])
    .then(function(data) {
      callback(null, 'Deleted')
    })
    .catch(function(err){
      callback(err)
    })
}
