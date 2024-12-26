import { useState ,useEffect} from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './base/Navbar'
import Footer from './base/Footer'

function App() {

  useEffect(() => {
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  )
}

export default App
