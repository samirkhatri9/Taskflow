import TaskItem from './TaskItem'

function TaskList({
  tasks,
  totalTasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) {
  if (totalTasks === 0) {
    return (
      <section className="empty-state" aria-label="Tasks">
        <h2>No tasks yet</h2>
        <p>Add your first task to get started.</p>
      </section>
    )
  }

  if (tasks.length === 0) {
    return (
      <section className="empty-state" aria-label="Tasks">
        <h2>No matching tasks</h2>
        <p>Try changing your filters or search.</p>
      </section>
    )
  }

  return (
    <section className="task-list" aria-label="Tasks">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </section>
  )
}

export default TaskList
