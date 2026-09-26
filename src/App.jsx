import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish React assignment',
      description: 'Complete the task manager project',
      category: 'Study',
      completed: false,
    },
    {
      id: 2,
      title: 'Buy groceries',
      description: 'Pick up ingredients for dinner',
      category: 'Personal',
      completed: false,
    },
    {
      id: 3,
      title: 'Review class notes',
      description: 'Read the notes from today’s lecture',
      category: 'Study',
      completed: true,
    },
  ])

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleToggleTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function handleDeleteTask(taskId) {
    const remainingTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(remainingTasks)
  }

  function handleEditTask(taskId, updatedTask) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <main className="app-container">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </main>
  )
}

export default App
