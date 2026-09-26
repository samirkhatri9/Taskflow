import { useState } from 'react'

function TaskItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [category, setCategory] = useState(task.category)

  const status = task.completed ? 'Completed' : 'Active'
  const cardClassName = task.completed ? 'task-card completed' : 'task-card'

  function startEditing() {
    setTitle(task.title)
    setDescription(task.description)
    setCategory(task.category)
    setIsEditing(true)
  }

  function saveChanges() {
    if (title.trim() === '') {
      return
    }

    onEditTask(task.id, {
      title: title.trim(),
      description: description.trim(),
      category: category,
    })
    setIsEditing(false)
  }

  function cancelEditing() {
    setIsEditing(false)
  }

  return (
    <article className={cardClassName}>
      {isEditing ? (
        <div className="edit-fields">
          <label htmlFor={`edit-title-${task.id}`}>Task title</label>
          <input
            id={`edit-title-${task.id}`}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor={`edit-description-${task.id}`}>Description</label>
          <textarea
            id={`edit-description-${task.id}`}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows="3"
          />

          <label htmlFor={`edit-category-${task.id}`}>Category</label>
          <select
            id={`edit-category-${task.id}`}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Health">Health</option>
          </select>
        </div>
      ) : (
        <>
          <h2>{task.title}</h2>
          <p className="task-description">{task.description}</p>
          <p className="task-category">Category: {task.category}</p>
        </>
      )}

      <p className="task-status">Status: {status}</p>

      <div className="task-actions">
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          Completed
        </label>
        {isEditing ? (
          <>
            <button type="button" className="save-button" onClick={saveChanges}>
              Save
            </button>
            <button type="button" className="cancel-button" onClick={cancelEditing}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" className="edit-button" onClick={startEditing}>
            Edit
          </button>
        )}
        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskItem
