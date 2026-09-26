import Header from './components/Header'

function App() {
  return (
    <main className="app-container">
      <Header />

      <section className="task-placeholder" aria-label="Tasks">
        <p>Your tasks will appear here.</p>
      </section>
    </main>
  )
}

export default App
