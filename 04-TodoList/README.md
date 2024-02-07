# React Todo App

This is a simple todo list application built using React and tailwindcss.

## Project Image

![TodoList](https://github.com/SahityaUniyal/ReactMinorProjects/assets/65817327/47f46334-71ca-477f-9d16-b6de72708c6c)

## Features

- **Add New Todos:** Easily add new tasks to your todo list.
- **Delete Todos:** Remove tasks you no longer need.
- **Update Todos:** Edit existing tasks to keep your list up-to-date.
- **Mark Todos as Completed:** Keep track of your progress by marking tasks as completed.
- **Save Todos in Local Storage:** Your todos will persist even if you close or refresh the page.

## Usage

1. **Open the Application:** Access the todo list in your web browser.
2. **Add New Todos:** Use the input field at the top to add new tasks.
3. **Manage Todos:**
   - **Checkbox:** Click on the checkbox to mark a todo as completed.
   - **Edit Icon:** Edit a todo by clicking on the pencil icon.
   - **Delete Icon:** Remove a todo by clicking on the trash icon.

## Code Intuition

### `app.jsx`

This file serves as the main entry point of the application. It manages the state of todos using React's `useState` hook and provides functions to add, delete, update, and toggle the completion status of todos. The todos are stored in the browser's local storage to persist data between sessions. Additionally, it passes these functions as context to the `TodoForm` and `TodoListItem` components.

### `TodoContext.js`

The `TodoContext.js` file contains a context for managing todos, allowing components to access and modify the todos state without prop drilling. It provides a context provider and a custom hook `useTodo` to consume the context.

### `TodoForm.jsx`

The `TodoForm.jsx` component is responsible for rendering the form to add new todos. It utilizes React's `useState` hook to manage the input field's value and invokes the `addTodo` function from the context when the form is submitted.

### `TodoListItem.jsx`

The `TodoListItem.jsx` component represents each individual todo item in the list. It allows users to mark todos as completed, edit todo text, and delete todos. The state manages the completion status, edit mode, and task text of each todo item.

## How to use

- Clone the repo in your local maching
- Move inside project folder
- Run command to install dependencies
  ```bash
  npm install
  ```
- Run command to start the project server
  ```bash
  npm run dev
  ```
- Visit the link that comes after running the above command
