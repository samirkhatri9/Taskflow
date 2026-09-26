# TaskFlow

## Description

TaskFlow is a simple React personal task manager. It lets users create, edit, delete, organize, filter, search, and complete tasks. Task data is stored in browser localStorage so it remains after a refresh.

## Features

- Add tasks
- Edit tasks
- Delete tasks
- Mark tasks complete
- Filter by status
- Filter by category
- Search tasks
- Task statistics
- localStorage persistence
- Responsive layout

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Browser localStorage

## React Concepts Used

- Functional components
- Props
- Callback props
- useState
- useEffect
- Controlled forms
- Event handling
- List rendering
- Conditional rendering

## Project Structure

- `App` manages task data, filters, search, and localStorage.
- `Header` displays the application title and subtitle.
- `TaskForm` adds new tasks with controlled inputs.
- `TaskList` renders tasks or an empty state.
- `TaskItem` displays, edits, completes, and deletes one task.
- `TaskStats` displays total, active, and completed task counts.
- `FilterBar` provides status filters, category filtering, and search.

## Installation

```bash
npm install
npm run dev
```

## Screenshots

### Main Task Dashboard

![Task Dashboard](./screenshots/dashboard.png)

### Task Form

![Task Form](./screenshots/task-form.png)

### Mobile View

![Mobile View](./screenshots/mobile.png)

## Known Limitations

- Tasks are only stored in the local browser.
- There are no user accounts.
- Tasks do not sync between devices.
- There is no backend database.
