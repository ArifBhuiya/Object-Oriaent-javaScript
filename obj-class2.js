// function person(name,email){

//  this.name = name;
//  this.email = email;
//  this.print = function(){
//      console.log('Name : ' + this.name);
     
//  }
   
// } 

//  var p1 = new person('Arif bhuiya', 'arifbhiuya@gmail.com');
//  var p2 = new person('bhuiya', 'bhiuya@gmail.com');
//  var p3 = new person('Arif islam bhuiya', 'arifislambhiuya@gmail.com');


//  var peple = [p1,p2,p3];




// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);

//console.log(peple);

//peple.forEach(function(person){
    //console.log('email :'+ person.email);
//     person.print();

// });

// for(var props in p1){
//     console.log('properties = '+ props);

// }


function Book(name,author,price){
    
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('functional javascript','Micbael Fogus',30);

console.log(book.constructor);
