import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import Contact from './views/Contact'
import Login from './views/Login'
import Home from './views/Home'
import Message from './views/Message'
import NotFound from './views/NotFound'
import Protected from './components/Protected'
import ScrollToTop from './components/ScrollToTop'
import { useStateContext } from './contexts/ContextProvider'
import ProjectForm from './views/ProjectForm'

function App() {

  const {notification, setNotification} = useStateContext()

  useEffect(() => {
    if(notification) {
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  })

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App container box" style={{minHeight: '100vh'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" 
            element={<Protected><Dashboard /></Protected>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects/new" element={<Protected><ProjectForm key="projectCreate" /></Protected>} />
          <Route path="/projects/:id" element={<Protected><ProjectForm key="projectUpdate" /></Protected>} />
          <Route path="/contact-us/:id" element={<Protected><Message /></Protected>} />
        </Routes>

        <Footer />
        {notification && <p className='notification'>{notification}</p>}
      </div>
    </BrowserRouter>
  )
}

export default App
