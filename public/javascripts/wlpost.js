

                wishlist = {};

                wishlist.items = [];

                wishlist.count = 2;

                wishlist.add = function(a) { wishlist.items.push(a)   }  ;


                wishlist.get = function (b) {

                    let a = b -  1;

                    return wishlist.items[a];
                }