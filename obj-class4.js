// function person(name,age){
//     this.name = name;
//     this.age = age;
  
//     this.hello = function(){
//         console.log('hello ' + this.name);
        
//     }

// }


function person(name,age){
    this.name = name;
    this.age = age;
  
 
}

// person.prototype.hello = function(){
//     console.log('hello ' + this.name);
    
// }

// person.prototype.print =function (){
//    console.log(this.name,this.age);
   
// }


person.prototype = {
    hello:function(){
        console.log('Hello, ' + this.name );
        
    },
    print :function(){
        console.log(this.name,this.age);
        
    },

    email:'arifulislam@gmail.com'
}


var p1 = new person('Arif Bhuiya',22);
var p2 = new person('Miss. Bhuiya',18);

console.log(p1);
console.log(p2);
