// TODO LIST ASSIGNMENT
// Add the remaining features to an existing Todo List command-line app, refactoring along the way, using objects

// Step 1: Introduce Task Object - use objects instead of arrays
// Step 2: Refactor Functions - to work with the objects
// Step 3: Use methods Instead - turn the functions into task object methods (during newTask)

// Using objects to group state and logic helps keep the code more organized, readable, and modular


// Allow each task to have a description.
// A new task will be created as incomplete (complete = false)
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks); // Log array of both task objects
