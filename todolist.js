const toDoList={

    tasks:[],


addTask:function(name,description,category){
    const add={
        name:name,
        description:description,
        category:category,
        completed:false
    }
    this.tasks.push(add);
    //console.log(toDoList.tasks);
},
listByCategory:[],

displayListByCategory: function(category){

    for(i=0; i<this.tasks.length; i++){
        if(this.tasks[i].category===category){
            this.listByCategory.push(this.); 
        }
        console.log(this.listByCategory);
    }

}
};


toDoList.addTask("kwiga","iga neza cyane","school");

toDoList.addTask("visit","Grand mother","personal");
toDoList.addTask("kuryama","kugira ngire ubuzima bwiza","home");

toDoList.displayListByCategory("personal");



