const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

var _db;

module.exports = {
  connectToServer : function (callback) {
    client.connect((err, db) => {
      if (db) {
        console.log("Successfully connected to MongoDB.");
        _db = db.db("blog")
      }
      return callback(err);
    });
  },

  getDB : function() {
    return _db;
  },

  getObjectId: function() {
    return ObjectId;
  }
}
