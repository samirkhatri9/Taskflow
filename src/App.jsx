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

  return (
    <main className="app-container">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
