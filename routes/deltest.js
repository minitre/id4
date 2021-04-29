// server.js


const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {



      console.log(req.body);
		res.send(" received get request at /deltest ");

}

)   ;



r2 = {} ; 

r2.ok = {} ;

r2.ok.code = "ok" ;

r2.ok.message = " delete request OK at  /deltest " ;



r2.fail = {} ;

r2.fail.code = "error" ;

r2.fail.message = " error at /deltest "   ;



r2.random= {} ;

r2.random.code = "some random message" ;

r2.random.message = " ????????     "   ;




r.delete("/", function(req, res) {



      		console.log(req.body);


		res.send(r2.fail);


}

)   ;





module.exports = r;