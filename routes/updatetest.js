// server.js


const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {



      console.log(req.body);
		res.send("received get request at /updatetest");

}

)   ;




r3 = {} ; 

r3.ok = {} ;

r3.ok.code = "ok" ;

r3.ok.message = " delete request OK at  /deltest " ;



r3.fail = {} ;

r3.fail.code = "error" ;

r3.fail.message = " error at /deltest "   ;



r3.random= {} ;

r3.random.code = "some random message" ;

r3.random.message = " ????????     "   ;

r.put("/", function(req, res) {



      console.log(req.body);

      
		res.send(r3.ok);


}

)   ;





module.exports = r;