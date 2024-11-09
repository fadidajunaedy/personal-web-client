import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Header from "./components/layout/Header"
import Home from "./pages/home/Home"
import Notes from './pages/notes/Notes'
import DetailNotes from './pages/notes/DetailNotes'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <main className="w-full prose-lg py-8 px-4">
        <div className="container mx-auto">
          <Header />
          <Router basename='/'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:index" element={<DetailNotes />} />
            </Routes>
          </Router>
          <Footer />
        </div>  
      </main>
    </>
  )
}

export default App
