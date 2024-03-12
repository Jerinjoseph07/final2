const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jerin:jerin@cluster0.crsjo7n.mongodb.net/data?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Appoint DB connected");
  })
  .catch((err) => console.log(err));

let ca = mongoose.Schema;
const appschema = new ca({
  did:String,
  name: String,
  age: Number,
  phone: String,

 
 
});
var appmodel = mongoose.model("booking", appschema);
module.exports = appmodel;