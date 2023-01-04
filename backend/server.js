const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const FarsikalaDB = require("./db/FarsiKalaDB");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get("/api/navbar", (req, res) => {
  let getAllNavbarsQuery = `SELECT * FROM navbar`;

  FarsikalaDB.query(getAllNavbarsQuery, (err, result) => {
    if (err) {
      console.log("err: ", err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000);
