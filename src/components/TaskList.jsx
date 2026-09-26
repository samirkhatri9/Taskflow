import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="task-list" aria-label="Tasks">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  )
}

export default TaskList
