import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'

const App = () => {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
