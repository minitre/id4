

// adds additional edit and delete pics 


function addmoreicons() {


    rightsideco.value.forEach(

        function (a) {


            if (a.id ) {


                console.log("id : " + a.id) ;


                let myid = a.id - 1 ;

                let myitem =   gc("item")[myid] ;


                let sectiontag = myitem.getElementsByTagName('section')[0];
                
                
                // spans = {}
                
                //  spans.content = [] ;
      
                

                spans.content.push(c(editdel));
                
                let editicons = spans.content.pop();
                
                
                
                myitem.insertBefore( editicons, sectiontag);




            }
        }

);




}

