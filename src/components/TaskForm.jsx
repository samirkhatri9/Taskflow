import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Work')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category: category,
      completed: false,
    }

    onAddTask(newTask)
    setTitle('')
    setDescription('')
    setCategory('Work')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add a Task</h2>

      <label htmlFor="task-title">Task title</label>
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label htmlFor="task-description">Description</label>
      <textarea
        id="task-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows="3"
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Health">Health</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
