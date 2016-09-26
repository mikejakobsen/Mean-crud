var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    var col = db.collection('documents');

    // Get first two documents that match the query
    col.find({Navn:'Per'}).limit(2).toArray(function(err, docs) {
        assert.equal(null, err);
        assert.equal(2, docs.length);
        db.close();
    });
});
