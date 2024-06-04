import inquirer from "inquirer";
let todos = [];
const todosfun = () => { console.log(todos); };
while (true) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add Todo", "Delete Todo", "List Todos", "Mark Todo as Done", "Edit Todo", "Search Todos", "Sort Todos", "Quit"],
        },
    ]);
    if (todoQuestions.action == "Add Todo") {
        let newTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What would you like to add in your todos?",
            },
        ]);
        todos.push(newTodo.todo);
        todosfun();
    }
    else if (todoQuestions.action == "Delete Todo") {
        let deleteTodo = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the index of the todo you want to delete:",
            },
        ]);
        if (deleteTodo.index >= 0 && deleteTodo.index < todos.length) {
            todos.splice(deleteTodo.index, 1);
            todosfun();
        }
        else {
            console.log("Invalid index!");
        }
    }
    else if (todoQuestions.action == "Mark Todo as Done") {
        let markTodo = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the index of the todo you want to mark as done:",
            },
        ]);
        if (markTodo.index >= 0 && markTodo.index < todos.length) {
            todos[markTodo.index] = `[DONE] ${todos[markTodo.index]}`;
            todosfun();
        }
        else {
            console.log("Invalid index!");
        }
    }
    else if (todoQuestions.action == "Edit Todo") {
        let editTodo = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the index of the todo you want to edit:",
            },
            {
                name: "newTodo",
                type: "input",
                message: "Enter the new text for the todo:",
            },
        ]);
        if (editTodo.index >= 0 && editTodo.index < todos.length) {
            todos[editTodo.index] = editTodo.newTodo;
            todosfun();
        }
        else {
            console.log("Invalid index!");
        }
    }
    else if (todoQuestions.action == "Search Todos") {
        let searchTodo = await inquirer.prompt([
            {
                name: "search",
                type: "number",
                message: "Enter the index of the todo you want to search:",
            },
        ]);
        if (searchTodo.search >= 0 && searchTodo.search < todos.length) {
            console.log(todos[searchTodo.search]);
        }
        else {
            console.log("Invalid index!");
        }
    }
    else if (todoQuestions.action == "Sort Todos") {
        let sortTodo = await inquirer.prompt([
            {
                name: "sort",
                type: "list",
                message: "Choose a sort order:",
                choices: ["Alphabetical", "Reverse Alphabetical"],
            },
        ]);
        if (sortTodo.sort == "Alphabetical") {
            todos.sort();
        }
        else if (sortTodo.sort == "Reverse Alphabetical") {
            todos.sort().reverse();
        }
        todosfun();
    }
    else if (todoQuestions.action == "List Todos") {
        todosfun();
    }
    else if (todoQuestions.action == "Quit") {
        console.log("Goodbye!");
        break;
    }
}
