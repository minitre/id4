itemtemp = {}    ;

itemtemp.name = 'Jess';
itemtemp.product = 'boys';
itemtemp.info = "bad ones" ;






wishlist.add(itemtemp);


s = document.createElement("span");

right.appendChild(s);



s.outerHTML = 

`

<div class = "item" >
    ${wishlist.count}. <span class ="span1">   ${wishlist.get(1).name}      </span> wants to get      <span class ="span1">  ${wishlist.get(1) . product}   </span>


    <section>

        ${wishlist.get(1).info} 

    </section>


</div>



`  ;