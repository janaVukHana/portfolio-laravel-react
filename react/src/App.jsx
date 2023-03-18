import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import router from './router'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import Contact from './views/Contact'
import Login from './views/Login'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Protected from './components/Protected'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" 
            element={<Protected><Dashboard /></Protected>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
