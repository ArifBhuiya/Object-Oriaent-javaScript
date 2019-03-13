// var obj = {};
// var obj1 = new Object;


// console.log(obj);
// console.log(obj1);


var book = {
    name: 'Functional javascript',
    author:'Micbel Fogus',
    page:250,
  
    print:function(){
        console.log(this.name,this.author);
        
    }
  
  }
  
  
  //console.log('publish year:' + book.publishedyear);
  
  book.publishedyear = 2010;
  
  //console.log('publish year:' + book.publishedyear);
  
  book['price'] = 30;
  
  //console.log('Price : ' + book.price);
  
  
  
  
  
  // console.log(book);
  
  // book.print();
  
  // console.log('Book Name: ' + book.name);
  // console.log('Author Name:' + book['author']);
  
  
  
  
  for(var props in book){
     //console.log(props);
     console.log(props + ' = ' + book[props]);
     
     
  }