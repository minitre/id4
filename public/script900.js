
warningshow("on")  ;
    

div3.padding = "30px"  ;

div3.style.padding = "30px"  ;

div3.style.padding = "0px"  ;

div4 = document.createElement("div")  ;


div3.innerHTML = ""  ;


div3.appendChild(div4)  ;


div4.innerHTML = ' are you sure ? '  ;

div4.style.margin = "30px"  ;

wtext = " <p> type the following to continue </p>"  ;

wtext += " I promise I am <b> ryan </b>, and i want to delete my post"  ;

div4.innerHTML += wtext  ;

input3 = document.createElement("input")  ;


input3.type = "text"  ;

div4.appendChild(input3)  ;

span2 = document.createElement("span")  ;

span2.style.display = "block"  ;

span2.appendChild(input3)  ;

div4.appendChild(span2)  ;

span2.style.margin = "20px"  ;

span2.width = "80%"  ;

input3.style.width = "80%"  ;

button7 = document.createElement("button")  ;


button7.innerHTML = "Cancel"  ;

button8 = document.createElement("button")  ;

button8.innerHTML = "ok"  ;

div4.appendChild(button7)  ;

div4.appendChild(button8)  ;

div5 = document.createElement("div")  ;

div5.style.display = "flex"  ;

div5.style.justifyContent = "space-around"  ;

div5.appendChild(button7)  ;

div5.appendChild(button8)  ;



div3.appendChild(div5)  ;



button7.style.width = "80px"  ;

button8.style.width = "80px"  ;

button7.onclick = _ =>

        {   warningshow("off")   }; 
