// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var kat = new Kitten({ name: 'Egon'});


fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
