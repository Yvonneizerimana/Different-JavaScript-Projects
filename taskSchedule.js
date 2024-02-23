// Define the TaskScheduler object
const TaskScheduler = {
    tasks: [],

    // Function to add a task to the scheduler
    addTask: function(title, description, dueDate) {
        const task = {
            title: title,
            description: description,
            dueDate: new Date(dueDate),
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task "${title}" added to the scheduler.`);
    },

    // Function to display tasks sorted by their due dates
    displayTasksSortedByDueDate: function() {
        const sortedTasks = this.tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
        console.log("Tasks Sorted by Due Date:");
        sortedTasks.forEach(task => {
            console.log(`- ${task.title} (Due Date: ${task.dueDate.toDateString()}, Completed: ${task.completed ? 'Yes' : 'No'})`);
        });
    },

    // Function to update task details or mark tasks as completed
    updateTask: function(title, newTitle, newDescription, newDueDate, completed) {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            task.title = newTitle || task.title;
            task.description = newDescription || task.description;
            task.dueDate = newDueDate ? new Date(newDueDate) : task.dueDate;
            if (completed !== undefined) {
                task.completed = completed;
            }
            console.log(`Task "${title}" updated successfully.`);
        } else {
            console.log(`Task "${title}" not found.`);
        }
    },

    // Function to remove a task from the scheduler
    removeTask: function(title) {
        const index = this.tasks.findIndex(task => task.title === title);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${title}" removed from the scheduler.`);
        } else {
            console.log(`Task "${title}" not found.`);
        }
    }
};

// Example usage:
TaskScheduler.addTask("Complete project", "Finish the project report", "2024-02-29");
TaskScheduler.addTask("Go grocery shopping", "Buy vegetables and fruits", "2024-02-25");
TaskScheduler.addTask("Call mom", "Wish her birthday", "2024-03-01");

TaskScheduler.displayTasksSortedByDueDate();

TaskScheduler.updateTask("Complete project", undefined, "Finalize presentation slides", "2024-02-28");
TaskScheduler.updateTask("Go grocery shopping", undefined, undefined, "2024-02-26", true);

TaskScheduler.displayTasksSortedByDueDate();

TaskScheduler.removeTask("Call dad");

TaskScheduler.displayTasksSortedByDueDate();