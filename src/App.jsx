import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  const [tasks] = useState([
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

  return (
    <main className="app-container">
      <Header />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
