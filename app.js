var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/crud';

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {Navn : "Per", Job: "Direktør"}, {Navn : "Eskild", Job: "Luder"}, {Navn : "Hans", Job: "Lærer"}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        callback(result);
    });
};
/* Find function */

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    });
};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    // Insert
    insertDocuments(db, function() {
        //Find
        findDocuments(db, function() {
            db.close();
        });
    });
});
