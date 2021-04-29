


mydata = {};

mydata.received = false;

mydata.processed = false;

mydata.new = ""   ;







manager.getwishes = getwishes ;



function getwishes() {

    $.get("getall", (data) => { 
                   
            mydata.new = data;

            mydata.received = true;

                }   );

            


}