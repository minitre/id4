
warningevents = {} ;


warningevents.applyevents = function ( mytext , hpo) {






    button7.onclick = _ =>

        {   warningshow("off")   }; 



button8.onclick = _ =>

        {   
            
            
            
            hpo.whattodo();   
        
        
        
        }; 



        button8.disabled = true;

        console.log("accessable ? :" + mytext) ;



        let a = {} ;

        a = function () {


            if (mytext.input3.value . indexOf (hpo.name) > -1 ) 
        
            button8.disabled = false; 
        
            else
        
            button8.disabled = true; 
        
        
        }



        mytext.input3.oninput = a ;

        


}