var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/crud';

var updateDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where Job is gangster to luder
    collection.updateOne({ 'Job' : 'Gangster' }
        , { $set: { 'John' : 'Luder' } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log('Fuck yea');
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

