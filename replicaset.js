var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/crud';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  // Insert a single document
  db.collection('Animals').insertOne({
        Specie:"Turtle"
      , Specie: function() { return 'hello'; }
    }, {
        w: 'majority'
      , wtimeout: 10000
      , serializeFunctions: true
    }, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
    db.close();
  });
});
