
pencil = {}


pencil.edit = function (id) {


    inputs.yname.value = rightsideco.value[id].name;

    inputs.product.value =  rightsideco.value[id].product;

    inputs.info.value = rightsideco.value[id].info ;


    inputs.aidi.value = rightsideco.value[id]._id; 

    inputs      . edit .   checked = true;




    let hpo = {} ; 


    hpo.name = inputs.yname.value ;

    hpo.eord = "edit" ;


    hpo.whattodo = f => {

        http2.sendupdate(); 




     };



     inputs.edit.hpo = hpo ;


     // leave make warning to the "go!" button

}



pencil.delete = function (id ) {



    inputs.aidi.value = rightsideco.value[id]._id; 


    let hpo = {} ;

    //    hpo.id = id ;

    hpo.name = rightsideco.value[id].name ; 

    hpo.eord = "delete"   ;



    hpo.whattodo = f => {      
        
        
        
        warningshow('off')  ;



        http2.senddelete() ;



    } ;

    makewarning(hpo) ;

    
}