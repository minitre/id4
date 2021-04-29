// server.js


const express = require("express");

const wish = require("../extras/wishes");



r = express.Router();



r.get("/", function(req, res) {


         wish.find().then(

               (wishes) =>  {

               console.log("finding wishes.....");
               res.status(200).send(wishes);


            }


         ) . catch(

            ( err ) => {

               res.status(200).send(

                  {
			code: "error" , 
		        message: err.message || "Error occured"


                  }


               );


            }



         );


}

)   ;







module.exports = r;