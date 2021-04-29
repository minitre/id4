
httpreceive = {}

httpreceive.put = {};

httpreceive.delete = {} ;



httpreceive.showfail = f  => {


    myform.action = "/delfail" ;

    myform.method = "get" ;

    myform.submit() ;

} ;



httpreceive.showsuccess = f => {


    myform.action = "/delsuccess" ;

    myform.method = "get" ;

    myform.submit() ;


} ;



httpreceive.process = function (res) {


        console.log( "received server confirmation for put or DELETE request :  ");

        console.log( res );


        if (res.code == "ok")

            httpreceive.showsuccess();

        if (res.code == "error")

            httpreceive.showfail();



        console.log("an unknown error has occured : unknown server response ") ;


}

