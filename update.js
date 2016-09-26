var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/crud';

var updateDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where job is luder to Gangster
    collection.updateOne({ 'Job' : 'Luder' }
        , { $set: { 'John' : 'Gangster' } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Fuck yea' Gangster");
            callback(result);
        });  
};



// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    updateDocument(db, function() {
        db.close();
    });
});

