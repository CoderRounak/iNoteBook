const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/iNoteBook";

const connectToMogo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongoose successfully");
  });
};

module.exports = connectToMogo;
