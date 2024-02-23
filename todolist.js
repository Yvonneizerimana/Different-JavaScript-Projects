// Task object
const Task = {
    createTask: function(name, completed = false) {
      return {
        name: name,
        completed: completed
      };
    }
  };
  
  // Category object
  const Category = {
    createCategory: function(name) {
      return {
        name: name,
        tasks: []
      };
    }
  };
  
  // ToDoList object
  const ToDoList = {
    categories: [],
  
    addCategory: function(categoryName) {
      const category = Category.createCategory(categoryName);
      this.categories.push(category);
      return category;
    },
  
    addTask: function(taskName, categoryName) {
      const category = this.categories.find(category => category.name === categoryName);
      if (category) {
        const task = Task.createTask(taskName);
        category.tasks.push(task);
        return task;
      } else {
        return { error: `Category '${categoryName}' not found.` };
      }
    },
  
    displayTasksGroupedByCategory: function() {
      const groupedTasks = {};
      this.categories.forEach(category => {
        groupedTasks[category.name] = category.tasks.map(task => {
          return {
            name: task.name,
            completed: task.completed
          };
        });
      });
      return groupedTasks;
    },
  
    markTaskAsCompleted: function(taskName) {
      let taskFound = false;
      this.categories.forEach(category => {
        const task = category.tasks.find(task => task.name === taskName);
        if (task) {
          task.completed = true;
          taskFound = true;
        }
      });
      if (!taskFound) {
        return { error: `Task '${taskName}' not found.` };
      } else {
        return { message: `Task '${taskName}' marked as completed.` };
      }
    },
  
    removeTask: function(taskName) {
      let taskRemoved = false;
      this.categories.forEach(category => {
        const taskIndex = category.tasks.findIndex(task => task.name === taskName);
        if (taskIndex !== -1) {
          category.tasks.splice(taskIndex, 1);
          taskRemoved = true;
        }
      });
      if (!taskRemoved) {
        return { error: `Task '${taskName}' not found.` };
      } else {
        return { message: `Task '${taskName}' removed successfully.` };
      }
    }
  };
  
  // Example usage
  const category1 = ToDoList.addCategory('Work');
  const category2 = ToDoList.addCategory('Personal');
  
  const task1 = ToDoList.addTask('Complete project', 'Work');
  const task2 = ToDoList.addTask('Call mom', 'Personal');
  const task3 = ToDoList.addTask('kuryama', 'Personal');
  
  const tasksGroupedByCategory = ToDoList.displayTasksGroupedByCategory();
  
  const markTaskResult = ToDoList.markTaskAsCompleted('Complete project');
  const removeTaskResult = ToDoList.removeTask('kuryama');
  
  console.log("--- Tasks grouped by category ---");
  console.log(tasksGroupedByCategory);
  
  console.log("--- Mark Task Result ---");
  console.log(markTaskResult);
  
  console.log("--- Remove Task Result ---");
  console.log(removeTaskResult);
  
  const updatedTasksGroupedByCategory = ToDoList.displayTasksGroupedByCategory();
  
  console.log("--- Updated Tasks grouped by category ---");
  console.log(updatedTasksGroupedByCategory);