var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/dummy';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    // Get the collection
    var col = db.collection('bulk_write');
    col.bulkWrite([
        { insertOne: { document: { a: 1 } } }
        , { updateOne: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } }
        , { updateMany: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } }
        , { deleteOne: { filter: {c:1} } }
        , { deleteMany: { filter: {c:1} } }
        , { replaceOne: { filter: {c:3}, replacement: {c:4}, upsert:true}}]
        , {ordered:true, w:1}, function(err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
            assert.equal(1, Object.keys(r.insertedIds).length);
            assert.equal(1, r.matchedCount);
            assert.equal(0, r.modifiedCount);
            assert.equal(0, r.deletedCount);
            assert.equal(2, r.upsertedCount);
            assert.equal(2, Object.keys(r.upsertedIds).length);

            // Ordered bulk operation
            db.close();
        });
});
