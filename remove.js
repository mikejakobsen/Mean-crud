var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/crud';

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // I Quit
  collection.deleteOne({ Navn : 'Per' }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Per hated the job');
    callback(result);
  });    
}



// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    removeDocument(db, function() {
        db.close();
    });
});

