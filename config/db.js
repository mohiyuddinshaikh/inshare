require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // Database connection
  try {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
  
    connection
      .once("open", () => {
        console.log("Database connected");
      })
  } catch (error) {
    console.log("Connection failed", error);
  }
}

module.exports = connectDB;
