var mongodb = require("mongodb");

mongodb.MongoClient.connect("  mongodb://yo:yo@ds053894.mongolab.com:53894/pornsites", function (error, db) {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log("Connected to the mongolab database");
})
