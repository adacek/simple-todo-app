import Header from './components/Header'
import { Route, Routes } from 'react-router'
import WelcomePage from './pages/WelcomePage'
import Footer from './components/Footer'
import "./index.css"
import TodosPage from './pages/TodosPage'

function App() {

  return (
    <div className="flex flex-col h-full max-h-full">
      <Header />
      <main className="flex flex-col px-8 h-full max-h-full overflow-clip">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/todo">
            <Route index element={<TodosPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
