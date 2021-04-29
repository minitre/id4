
    
    
intervals.crystal2 =  function () {

    if (   mydata.processed == true   ) {

            clearInterval(intervals.id1);
            clearInterval(intervals.id2);

    }


    cons0le.log("b");


    if ( cons0le.id1.length > 300) {

            clearInterval(intervals.id1);
            clearInterval(intervals.id2);

            console.log(" Error: timeout... refresh page to try again");

    }


}


    
    intervals.id2 = setInterval( intervals.crystal2 , 30 );