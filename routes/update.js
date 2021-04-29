const express = require("express");

wish = require("../extras/wishes");

r = express.Router();





r5 = {} ; 

r5.ok = {} ;

r5.ok.code = "ok" ;

r5.ok.message = " update request OK at  /update " ;



r5.fail = {} ;

r5.fail.code = "error" ;

r5.fail.message = " error at /update "   ;



r5.random= {} ;

r5.random.code = "some random message" ;

r5.random.message = " ????????     "   ;





function upd (req, res) {


    const id = req.body.id;

    console.log("ID to update    ~~~~   : " + id);



    let data2update = {

        name : req.body.yname  ,
        product : req.body.product,
        info : req.body. info, 
    
    
      }          ;


    wish.findByIdAndUpdate(     id   , data2update   ,


        function (err, docs) {


            if (err){

                    console.log(err)      ;


                    
                    res.send(r5.random) ;

                    return ;

            }

            else        {
            
                console.log("Updated User : ", docs);

                    if ( docs == null) {

                        res.send(r5.fail) ;

                        return ;
                    }

            res.send(r5.ok)    ;

            }

        }
            
            
        );

      //    res.send("    processed update request " );;

 
}


r.get("/", (req, res) => {


	res.send("received get request at /update" )       ;;;


	}


);



r.put("/", upd);



module.exports = r;