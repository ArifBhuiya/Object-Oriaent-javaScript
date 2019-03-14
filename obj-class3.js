// var obj = {
//     name:'Twinkle cats',

//    print:function(){
//        console.log(this);
       
//    }
// }

// function myfun(){

//  function inner(){
//     console.log(this);
//  }

//   new inner();
//   }

// myfun()

// obj.print();

// var person = {
//     name : 'Arif Bhuiya',

//     print: function(){
//         console.log('Hello '+this.name);
//         console.log(this);
        
//     }
// }
 
// var myname = person.name;
// console.log(myname);

// var myprint = person.print.bind(person);

// console.log(myprint);

// myprint();

// function add(num){
//     console.log(this);
    
//     return this.velue + num;
// }


// var obj={
//     velue:30,
// }

//  var binded = add.bind(obj);
//  var result = binded(100);
//  console.log(result);
 
var person = {
     name:'Twinkle cats',

    print:function(){

       //var name = this.name;
        setTimeout(function() {
            
            console.log(this);
          console.log('Hello ' + this.name);

        }.bind(this),2000);
    }
}