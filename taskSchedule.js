const taskScheduler={
tasks:[],


addNewTask: function(title,description,deuDate,completed){
    const task={
        title:title,
        addDescription:description,
        addDeuDate:deuDate,
        addCompleted:completed
 }
 this.tasks.push(task);
 console.log("Your task was added successfuly\n\n");
},


displayTasks:function(){

    if(this.addNewTask===0){
        console.log("No task added ! try to add a new one\n\n");
        return;
    }

    const sortTasks=this.tasks.sort((a,b)=> new Date(a.addDeuDate)- new Date(b.addDeuDate));
    console.log(sortTasks);
     
    
},


updateTask: function(title,description2,deuDate2,completed2){
    const index = this.tasks.findIndex(task => title==title);
        if (index!==1) {
            
        }
                      
},

removeTaskFromScheduler: function(title){
    const deleteTask=this.tasks.findIndex(name=>name.title===title);
    if(deleteTask!==-1){
        this.tasks.splice(deleteTask,1);
        console.log("task was deleted successfuly    "+deleteTask);
    }
    else{
        console.log("task not found");
    }
}
}
taskScheduler.addNewTask("Revision","keep revising well about arrays and object","2024-02-18",true);
taskScheduler.addNewTask("Sport","Keep having good shape","2023-01-19",false);
taskScheduler.addNewTask("Eat","for being under the weather","2022-07-20",true);

taskScheduler.updateTask("nhjjj","hyhuj","2025-08-21",false);
taskScheduler.removeTaskFromScheduler("Revision");
taskScheduler.displayTasks();