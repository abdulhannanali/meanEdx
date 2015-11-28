var mongodb = require("mongodb");

var uri =  "mongodb://localhost:27017/example"

mongodb.MongoClient.connect(uri, function (err, db) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    rating: 'PG'
  };

  db.collection("movies").insert(doc, function (err, result) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    db.collection("movies").find().toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }

      console.log("Found docs:")
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      })

      console.log("Finding PG rated movies");
      db.collection("movies").find({"rating": "PG"}).toArray(function(error, docs) {
        docs.forEach(function(value) {
          JSON.stringify(value);
        })
        process.exit(1);
      })
    })




  });


})
