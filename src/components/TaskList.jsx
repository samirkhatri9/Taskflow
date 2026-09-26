import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
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
