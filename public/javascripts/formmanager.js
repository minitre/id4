

inputs.clear.onclick = function () {

    inputs.yname.value = ""
    inputs.product .value = ""
    inputs.info .  value  = ""

    inputs.edit.checked = false
    inputs.request .checked = false


    inputs.aidi.value = ""

    inputs.edit.hpo = false ;

}






inputs.go.onclick = function () {

    let mode = inputs.choose ;

    if ( inputs.edit.checked == false && inputs.request.checked == false)  {

        makewarning2(" click on request new item button to request")

        return false; 

    }

    if (mode.value == "edit")

            attemptedit();

    if (mode.value == "request")

            attemptsave();

    return false;


}

function attemptedit() {

    if (inputs.edit.hpo == false)  {

        makewarning2("please click on a edit icon on the right") ;

        return false;
    }

    if (inputs.aidi.value == "" )  {

        makewarning2("please click on a edit icon on the right") ;

        return false;
    }

    if (inputs.yname.value.length == 0 || inputs.product.value.length == 0 ||  inputs.info.value.length == 0) {

        makewarning2("some required fields are missing.  Please go back and check")  ;

    return false;


    }

    makewarning(inputs.edit.hpo) ;

}

function attemptsave() {


    if (inputs.yname.value.length == 0 || inputs.product.value.length == 0 ||  inputs.info.value.length == 0) {

        makewarning2("some required fields are missing.  Please go back and check")  ;

    return false;


    }

    myform.action = "/save" 

    myform.method = "post"  ;

    myform.submit()  ;

}


