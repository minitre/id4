

// review pls




http2 = {} ;


http2.senddelete = function (a) {


    //  fakeajax(a)   ;


    $.ajax({
        method: "DELETE",
        url: "/delete",
        data: {  id : inputs.aidi.value }
      })



        .done( httpreceive.process);


}

http2.sendupdate = function (a) {


  let updatedata = {

    yname : inputs.yname.value  ,
    product : inputs.product.value,
    info : inputs.   info   .   value , 


    id : inputs.aidi.value ,

  }


  $.ajax({
      method: "put",
      url: "/update",
      data: updatedata , 
    })

      .done(

          httpreceive.process
      );



}




function fakeajax() {


  
}