// server.js

//      /save  script

const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {


		res.send("get request received at /save");


}

)   ;




r.post("/", function(req, res) {

   // Create a student from the submitted form data
   const w = new wish({
      name: req.body.yname,
      product: req.body.product,
      info : req.body.info
   });

   w.save(function(err, stu) {
      if (err) {
         res.status(200).send(err);
      } 
      else {
         res.send("wish was saved.");
      }
   });
});





module.exports = r;