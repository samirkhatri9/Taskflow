import TaskItem from './TaskItem'

function TaskList({ tasks }) {
  return (
    <section className="task-list" aria-label="Tasks">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  )
}

export default TaskList
