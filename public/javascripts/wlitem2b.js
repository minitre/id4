

// adds the edit and delete pics to item 2 on "right" side


let item2 =   gc("item")[1] ;

let section2 = item2.getElementsByTagName('section')[0];



spans = {}

spans.content = [] ;

spans.content.push(c(editdel));

let editicons = spans.content[0];



item2.insertBefore( editicons, section2);