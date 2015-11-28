var mongodb = require("mongodb");


mongodb.MongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
  db.collection("movies").find().toArray(console.log);
});
