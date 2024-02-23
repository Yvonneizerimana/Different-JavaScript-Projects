// Define the ToDoList object
const ToDoList = {
    tasks: [],
    categories: [],

    // Function to add a category
    addCategory: function(categoryName) {
        const category = {
            name: categoryName
        };
        this.categories.push(category);
    },

    // Function to add a task to the ToDo list with specified category
    addTask: function(taskName, categoryName) {
        const task = {
            name: taskName,
            category: categoryName,
            completed: false
        };
        this.tasks.push(task);
    },

    // Function to display tasks grouped by their categories
    displayTasksGroupedByCategory: function() {
        // Group tasks by category
        const groupedTasks = {};
        this.tasks.forEach(task => {
            if (!groupedTasks[task.category]) {
                groupedTasks[task.category] = [];
            }
            groupedTasks[task.category].push(task);
        });

        // Display tasks grouped by category
        for (const category of this.categories) {
            const categoryName = category.name;
            if (groupedTasks[categoryName]) {
                console.log(`Category: ${categoryName}`);
                groupedTasks[categoryName].forEach(task => {
                    console.log(`- ${task.name} [${task.completed ? 'Completed' : 'Incomplete'}]`);
                });
            }
        }
    },

    // Function to mark a task as completed
    markTaskAsCompleted: function(taskName) {
        const task = this.tasks.find(task => task.name === taskName);
        if (task) {
            task.completed = true;
        }
    },

    // Function to remove a task from the ToDo list
    removeTask: function(taskName) {
        const index = this.tasks.findIndex(task => task.name === taskName);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
};

// Example usage:
ToDoList.addCategory('Work');
ToDoList.addCategory('Personal');

ToDoList.addTask('Complete project', 'Work');
ToDoList.addTask('Go grocery shopping', 'Personal');
ToDoList.addTask('Call mom', 'Personal');
ToDoList.addTask('Prepare presentation', 'Work');

console.log("--- Tasks grouped by category ---");
ToDoList.displayTasksGroupedByCategory();

console.log("\n--- Marking task 'Complete project' as completed ---");
ToDoList.markTaskAsCompleted('Complete project');

console.log("\n--- Removing task 'Call mom' ---");
ToDoList.removeTask('Call mom');

console.log("\n--- Updated tasks grouped by category ---");
ToDoList.displayTasksGroupedByCategory();