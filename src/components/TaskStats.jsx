function TaskStats({ tasks }) {
  const totalTasks = tasks.length
  const activeTasks = tasks.filter((task) => task.completed === false).length
  const completedTasks = tasks.filter((task) => task.completed === true).length

  return (
    <section className="task-stats" aria-label="Task statistics">
      <p>Total Tasks: {totalTasks}</p>
      <p>Active Tasks: {activeTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </section>
  )
}

export default TaskStats
