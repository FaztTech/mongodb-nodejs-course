// require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'collectionTest';

// some books information
var books = [{
  'Title': 'The Digital Fortress',
  'Author': 'Dan Brown'
}, {
  'Tilte': 'I Robot',
  'Auhtor': 'Isaac Asimov'
}];

/**
  * Inserting Data
*/

MongoClient.connect(connectionUrl, (err, db) => {
  console.log('Connected correctly to server');

  // get some collections
  var collection = db.collection(sampleCollection);

  collection.insert(books, (err, result) => {
    if (!err) {
      console.log(`success: ${result.ops.length} books`);
    } else {
      console.log(`some error was encountered!`);
    }

    db.close();
  });
});


