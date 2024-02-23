// Task Scheduler
const TaskScheduler = {
    tasks: [],
  
    addTask: function(title, description, dueDate) {
      const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false
      };
      this.tasks.push(task);
      return task;
    },
  
    displayTasksSortedByDueDate: function() {
      const sortedTasks = [...this.tasks];
      sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      return sortedTasks;
    },
  
    updateTask: function(title, newTitle, newDescription, newDueDate) {
      const task = this.tasks.find(task => task.title === title);
      if (task) {
        task.title = newTitle || task.title;
        task.description = newDescription || task.description;
        task.dueDate = newDueDate || task.dueDate;
        return task;
      } else {
        return { error: `Task '${title}' not found.` };
      }
    },
  
    markTaskAsCompleted: function(title) {
      const task = this.tasks.find(task => task.title === title);
      if (task) {
        task.completed = true;
        return task;
      } else {
        return { error: `Task '${title}' not found.` };
      }
    },
  
    removeTask: function(title) {
      const taskIndex = this.tasks.findIndex(task => task.title === title);
      if (taskIndex !== -1) {
        const removedTask = this.tasks.splice(taskIndex, 1);
        return removedTask[0];
      } else {
        return { error: `Task '${title}' not found.` };
      }
    }
  };
  
  // Example usage
  TaskScheduler.addTask('Task 1', 'Description 1', '2024-02-25');
  TaskScheduler.addTask('Task 2', 'Description 2', '2024-02-23');
  TaskScheduler.addTask('Task 3', 'Description 3', '2024-02-24');
  
  const tasksSortedByDueDate = TaskScheduler.displayTasksSortedByDueDate();
  console.log("--- Tasks sorted by due date ---");
  console.log(tasksSortedByDueDate);
  
  TaskScheduler.updateTask('Task 2', 'Task 2 Updated', 'New description', '2024-02-26');
  TaskScheduler.markTaskAsCompleted('Task 3');
  TaskScheduler.removeTask('Task 3');
  
  console.log("--- Updated task list ---");
  console.log(TaskScheduler.tasks);