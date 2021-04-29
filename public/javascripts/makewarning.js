
// review pls


// hpo : name, id, whattodo, eord

function makewarning(hpo) {


    let mytext = {} ; 


    warningshow("on")  ;
    


div3.style.padding = "0px"  ;


div3.innerHTML = ""  ;



div4 = document.createElement("div")  ;

div3.appendChild(div4)  ;


div4.innerHTML = ' are you sure ? '  ;

div4.style.margin = "30px"  ;

mytext.wtext = " <p> type the following to continue </p>"  ;

ipromise = `I promise I am <b> ${ hpo.name } </b>, and i want to ${hpo.eord} my post`  ;

mytext.wtext +=   ipromise ;;;;




div4.innerHTML += mytext.wtext  ;






//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mytext.input3 = document.createElement("input")  ;

mytext.input3.type = "text"  ;

mytext.input3.value = ""







span2 = document.createElement("span")  ;

span2.style.display = "block"  ;



span2.appendChild(mytext.input3)  ;

div4.appendChild(span2)  ;





span2.style.margin = "20px"  ;

span2.width = "80%"  ;

mytext.input3.style.width = "80%"  ;


//   ~~~~~~~~~~~~~~~



button7 = document.createElement("button")  ;


button7.innerHTML = "Cancel"  ;



button8 = document.createElement("button")  ;

button8.innerHTML = "ok"  ;





div5 = document.createElement("div")  ;



div5.appendChild(button7)  ;

div5.appendChild(button8)  ;



div3.appendChild(div5)  ;



//    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


div5.style.display = "flex"  ;

div5.style.justifyContent = "space-around"  ;



button7.style.width = "80px"  ;

button8.style.width = "80px"  ;

warningevents.applyevents( mytext , hpo) ;


        
}
