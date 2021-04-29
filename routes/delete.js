const express = require("express");

wish = require("../extras/wishes");

r = express.Router();



function del (req, res) {

    const id = req.body.id;

    console.log("ID to delete: " + id);

    wish.findByIdAndRemove(id)

.then( 
    
    data => {

        if (!data) {

            res.status(200).send(

                {	
			

			        code: "error" , 
                	message : ` the document with ${id} was not found (and thus cannot be deleted :( ) ` 

                }
            );
        }

        else {

            res.send(

                {
			        code : "ok", 
                	message : ` successfully deleted document ${id}    ` 

                }

                );

        }  ;

    }

)

.catch( 
    
    
    err => {

            res.status(200) . send( 
                
                {


                    
			        code: "error" , 
                    message : "error occured while trying to delete document # " + id 

                }
            
            );

        }

    );

}


r.delete("/", del);



module.exports = r;