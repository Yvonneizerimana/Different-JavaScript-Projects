let library={
    book:[],
    
    addBook:function(title,author,avairability,holder){
        const addOne={
            title:title,
            author:author,
            avairability:avairability,
            holder:holder
        
        }
       this.book.push(addOne);
        console.log("Book added to the library successfuly ");
    },

    listAllBookAvairable: function(){
console.log("the avairable books are: /n/n");
let newVar=[];
this.book.forEach(book1=>{
if(book1.avairable===true){
    newVar.push(book1);
    
}
console.log(newVar);
});
    }


};
library.addBook("JavaScript","Javany",true,"");
library.addBook("math","mathias",true,"");
library.addBook("css","cisco",false,"");
library.addBook("html","hashtag",false,"");
 
library.listAllBookAvairable();

























