

function makewarning2 (a) {


    a = arguments.length > 0 ? a : false ;

    let warnmessage = a ? '<span>' + a + '</span> ' : "" ;;

    //  console.log(a ?  a : " a  ? is false") ;
    
    let mytext = {} ; 


    warningshow("on")  ;
    


div3.style.padding = "0px"  ;


div3.innerHTML = ""  ;



div4 = document.createElement("div")  ;

div4.id = "w2div4v2" ;

div3.appendChild(div4)  ;




div4.style.margin = "30px"  ;


div4.innerHTML = ' <span id="hey"> HEY </span> '  ;



mytext.wtext = " <span> one of the required field is empty </span>"  ;

mytext.wtext += ` <span> Please check it and try again </span> `  ;



div4.innerHTML +=  a ?   warnmessage : mytext.wtext ;




//   ~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


button7 = document.createElement("button")  ;


button7.innerHTML = "ok"  ;




// div 5 holds the buttons


div5 = document.createElement("div")  ;

div5.style.display = "flex"  ;

div5.style.justifyContent = "space-around"  ;


button7.style.width = "80px"  ;


div5.appendChild(button7)  ;

div3.appendChild(div5)  ;


div5.style.marginTop = "60px" ;




//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




div4.style.marginTop = "70px"  ;






button7.onclick = _ =>

        {   warningshow("off")   }; 



}