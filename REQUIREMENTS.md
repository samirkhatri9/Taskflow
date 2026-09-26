# React Assignment Requirements

## Functional Components

The application uses functional React components for App, Header, TaskForm, TaskList, TaskItem, TaskStats, and FilterBar.

## Reusable Components

The main reusable components are Header, TaskForm, TaskList, TaskItem, TaskStats, and FilterBar.

## Props

Task data and filter values are passed from parent components to child components using props.

## Callback Props

Task actions such as adding, editing, deleting, toggling completion, and changing filters are passed to child components as callback props.

## useState

useState manages tasks, form inputs, filters, search, and editing fields.

## useEffect

useEffect saves task data to localStorage whenever the tasks array changes.

## List Rendering

TaskList uses .map() to render TaskItem components with each task's unique id as the key.

## Controlled Form

TaskForm uses controlled inputs for the task title, description, and category.

## Conditional Rendering

Conditional rendering shows empty states, completed status, and inline editing fields.

## Responsive Design

The CSS includes a media query at 768px so the layout remains usable on smaller screens.

## localStorage

Task data is saved in browser localStorage and remains available after a page refresh.
