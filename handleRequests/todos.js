const express = require("express");
const todos = express.Router();

const dbo = require("../db/conn");
const ObjectId = dbo.getObjectId();

const collec = "todos";

todos

  // This section helps you get a list of all documents
  .get("/", (req, res) => {
    let db_connect = dbo.getDB();
    db_connect
      .collection(collec)
      .find({})
      .toArray((error, result) => {
        if (error) throw error;
        console.log("retrieved all documents.");
        res.json(result);
      });
  })

  // This section helps you get a single document by id
  .get("/:id", (req, res) => {
    let db_connect = dbo.getDB();
    let query = { _id: ObjectId(req.params.id) };
    db_connect
      .collection(collec)
      .findOne(query, (error, result) => {
        if (error) throw error;
        console.log(`Retrieved one document by id: ${req.params.id}`);
        res.json(result);
      });
  });

module.exports = todos;