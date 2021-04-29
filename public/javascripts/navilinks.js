
div = document.getElementById("navi");

hrefs = {};

hrefs.a = [];


hrefs.a.push("index.html");

hrefs.a.push("mens.htm");

hrefs.a.push("women2.htm");

hrefs.a.push("about.htm");

hrefs.a.push("wishlist.htm");



atags = div.getElementsByTagName("a");

for ( i = 0; i < atags.length ; ++ i)
    
    atags[i].href = hrefs.a[i];