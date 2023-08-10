require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 6000,
  mongo_URI: process.env.mongo_URI ||  "mongodb://127.0.0.1:27017/",
  JWT_SECRET: "ABCD"
};
