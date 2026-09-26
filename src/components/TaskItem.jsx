function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const status = task.completed ? 'Completed' : 'Active'
  const cardClassName = task.completed ? 'task-card completed' : 'task-card'

  return (
    <article className={cardClassName}>
      <h2>{task.title}</h2>
      <p className="task-description">{task.description}</p>
      <p className="task-category">Category: {task.category}</p>
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
        <button type="button" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskItem
