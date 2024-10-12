import { Routes, Route } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import ConversationsPage from './pages/ConversationsPage.jsx'
import StartDetailPage from './pages/StartDetailPage.jsx'
import CompleteDetailPage from './pages/CompleteDetailPage.jsx'
import NavBar from './components/app/NavBar.jsx'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/start" element={<ConversationsPage />} />
        <Route path="/start/:ids" element={<StartDetailPage />} />
        <Route path="/start/:ids/complete/:idc" element={<CompleteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
