import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {


  return (
    <>
      <Navigation />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
