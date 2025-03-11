import React from 'react'
import './App.css'
import Header from './Layouts/Header'
import About from './Pages/About'
import Blog from './Pages/Blog'
import School from './Pages/School'
import Contact from './Pages/Contact'
import EventsConferences from './Pages/EventsConferences'
import Stat from './Pages/Stat'
import BookPublished from './Pages/BookPublished'
import Footer from './Layouts/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <About />
        <Blog />
        <School />
        {/* Add missing closing tag */}
        <BookPublished />
        <EventsConferences />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
