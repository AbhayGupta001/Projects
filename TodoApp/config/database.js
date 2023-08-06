const mongoose = require("mongoose");

// jo .env file main variables pade hain unko process object main feed krne ke liye
require("dotenv").config();

const dbConnect = () => {
  mongoose //process object se env variables main url nikl li
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connection sucessful");
    })
    .catch((error) => {
      console.log("issue in connection");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
