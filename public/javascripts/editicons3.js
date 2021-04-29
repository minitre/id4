

function addclickeee () {

    rightsideco.value.forEach(

        function (want) {

            if (want.id ) {



                let o = want.original;

                let a = o.getElementsByTagName('a');

                let img = o.getElementsByTagName('img');



                img[0].style.cursor = "pointer" ;

                img[1].style.cursor = "pointer" ;

                a[0].onclick = f => {  pencil . edit (  want.id )} ;

                a[1].onclick = f => {  pencil . delete (  want.id )} ;


            }


        }


    );

}