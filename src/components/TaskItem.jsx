function TaskItem({ task }) {
  const status = task.completed ? 'Completed' : 'Active'

  return (
    <article className="task-card">
      <h2>{task.title}</h2>
      <p className="task-description">{task.description}</p>
      <p className="task-category">Category: {task.category}</p>
      <p className="task-status">Status: {status}</p>
    </article>
  )
}

export default TaskItem
