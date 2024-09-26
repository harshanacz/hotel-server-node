const mongoose = require("mongoose"); 
const dotenv = require("dotenv");

dotenv.config({ path: './data.env' });

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (err) {
    console.log("error: " + err);
  }
};

Connection();

module.exports = mongoose; 
