import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import router from './router'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import Users from './views/Users'
import Login from './views/Login'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Protected from './components/Protected'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" 
            element={<Protected><Dashboard /></Protected>} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
