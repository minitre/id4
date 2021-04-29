// server.js


const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {



      console.log(req.body);
		res.send("update request received @ get  ");

}

)   ;








r.delete("/", function(req, res) {



      console.log(req.body);
		res.send("delete request received");


}

)   ;











module.exports = r;