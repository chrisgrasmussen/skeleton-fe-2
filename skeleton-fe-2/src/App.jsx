import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import ConversationsPage from './pages/ConversationsPage.jsx'
import StartDetailPage from './pages/StartDetailPage.jsx'
import CompleteDetailPage from './pages/CompleteDetailPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/start" element={<ConversationsPage />} />
      <Route path="/start/:id" element={<StartDetailPage />} />
      <Route path="/start/:ids/complete/:idc" element={<CompleteDetailPage />} />
    </Routes>
  )
}

export default App
