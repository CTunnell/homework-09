const fs = require('fs');

var noteData = require("../Develop/db/db.json");



module.exports = function(app) {

  
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });


  app.post("/api/notes", function(req, res) {
   
      noteData.push(req.body); // ? add to json file
      res.json(true);
   
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    //noteData.length = 0; // ? clear json file
    // delete by note name?

    res.json({ ok: true });
  });
};