var mongoose = require("mongoose");
var schema = require("./schema");

mongoose.connect("mongodb://localhost:27017/test");

var User = mongoose.model("User", schema, "users");

user = new User({
  name: "John Smith",
  email: "john@smith.io"
});

user.save(function(err){
  if (err) {
    console.error(err);
    process.exit(1);
  }
  User.find({email: "john@smith.io"}, function(error, docs) {
    console.log(docs);
    process.exit(1);
  })
})
