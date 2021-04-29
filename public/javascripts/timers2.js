   
    
    
    intervals.crystal1 = function() {

        
    if (mydata.processed == true) return false;



    if (mydata.received == true) {

        mydata.processed = true;

        mydata.new.forEach( 

            function(a) {


                let b = "";  


                    b = showitem(a);


                    makepage(a , b) ;

            }

        );

        addmoreicons();

        addclickeee(); 


    }


            cons0le.log("a");


}



intervals.id1 = setInterval( intervals.crystal1  ,  30) ;