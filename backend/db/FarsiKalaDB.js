const mysql = require("mysql");

const FarsikalaDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "farsikala",
});

FarsikalaDB.connect((err) => {
  if (!err) {
    console.log("connected successfully");
  }
});

module.exports = FarsikalaDB;
