var mongodb = require("mongodb");

var uri = "mongodb://localhost:27017/example";

mongodb.MongoClient.connect(uri, function (error, db) {
  if (error) {
    console.error(error);
    process.exit(1);
  }


  var doc = {
    title: "The Night Before",
    Released: 2015,
    Director: "Jonathan Levine",
    Stars: [
      "Joseph Gordon-Levitt",
      "Seth Rogen",
      "Jillian Bell"
    ],
    Ratings: {
      user: 7.5,
      meta: 58
    }
  }
  //
  // db.collection("movies").insert(doc, function(err, result) {
  //   if (err) {
  //     console.error(err);
  //     process.exit(1);
  //   }
  //
  //   console.log("inserted");
  //   process.exit(1);
  // })

  // find all the movies starring Seth Rogen
  // db.collection("movies").find({Stars: "Seth Rogen"}).toArray(function (error, docs) {
  //   if (error) {
  //     console.error(error);
  //     process.exit(1);
  //   }
  //   console.log(JSON.stringify(docs));
  // })

  db.collection("movies").find({"Ratings.user": 7.5}).toArray(function(error, docs) {
    console.log(docs);
    process.exit(1);
  });
})
