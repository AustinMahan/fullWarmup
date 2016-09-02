var db = require('./connection')
var data = require('../data/data').all

for (person of data) {
  console.log('added');
  db.none(`INSERT INTO names (firstName, lastName, dob, eyeColor, phone) VALUES ('${person.first_name}', '${person.last_name}', '${person.date_of_birth}', '${person.eye_color}', '${person.telephone_number}')`, [true])
    .then(function(){

    })
}
