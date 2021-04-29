

div2 = document.createElement("div");

div2.id = "warning"      ;

b = document.body ;

navibar = b.firstChild   ;

b.insertBefore(div2, navibar)      ;


//  ~~~~~~~~~~~~~~~~~~~~~~~~


div3 = document.createElement("div");
    
div3.id = "warningbox" ;

b.insertBefore(div3, navibar)      ;





//    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


div3.innerHTML = `are you sure ?
                    type the following to continue

                I promise I am someone , and i want to delete my post `;


