import React , { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Teams from './pages/Team'
import Events from './pages/Events'
import Faqs from './pages/Faqs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import { IMAGES } from "./assets/Images/index";
import IntroCover from './components/IntroCover'

const App = () => {
  const [start, setStart] = useState(false);
  return (
<div
  className="relative text-white min-h-screen bg-cover bg-center bg-black"
>


  {/* Content */}
  
  <div className="relative z-10">
   
  </div>
  {!start && <IntroCover onFinish={() => setStart(true)} />}

      {start && (
        <> <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/events" element={<Events />} />
      <Route path="/faq" element={<Faqs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>

    <Footer />
        </>
      )}
</div>

  )
}

export default App
