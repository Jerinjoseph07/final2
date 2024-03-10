const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jerin:jerin@cluster0.crsjo7n.mongodb.net/data?retryWrites=true&w=majority")
  .then(() => {
    console.log("login ok");
  })
  .catch(err => console.log(err));

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  }
});

const loginModel = mongoose.model("signup", loginSchema);
module.exports = loginModel;
