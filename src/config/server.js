const mongoose = require("mongoose");
const mongoDbUrl =
  "mongodb+srv://thedillip:dillip5478@public.gllttmh.mongodb.net/public?retryWrites=true&w=majority";

module.exports = mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("MongoDB Connected ...");
  })
  .catch((error) => {
    console.log(error.message);
  });
