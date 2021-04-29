// server.js


const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {



      console.log(req.body);
		res.status(200). send(" your data has been successfully updated or deleted. Please refresh the last page");

}

)   ;








r.delete("/", function(req, res) {



      console.log(req.body);
		res.send(" received get request at /deltest ");


}

)   ;











module.exports = r;