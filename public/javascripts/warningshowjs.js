

function warningshow(onoff) {

    if (onoff == "on") {

        div2.style.visibility = "visible";

        div3.style.visibility = "visible";

        return true;
    }

    if (onoff == "off") {

        div2.style.visibility = "hidden";

        div3.style.visibility = "hidden";

        return true;
    }

    return false;


}