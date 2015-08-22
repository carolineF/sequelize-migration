'use strict';

var db = require('./models/index');


db.Grade.create({gradeName: 'grade one'}).then(function(gradeOne) {
  db.Student.bulkCreate([{name: 'Lida', age:12},
    {name: 'Jong', age: 43},
    {name: 'Mark', age: 23}
  ]).then(function(){
    db.Student.findAll().then(function(students){
      gradeOne.setStudent(students);
    });
  })
});
