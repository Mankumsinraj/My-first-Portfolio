import React from 'react'
// import ReactDOM from "react-dom/client";
import './index.css'



import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from './pages/Footer';

export default function App() {
  return (
    <BrowserRouter> 
       
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
        </Route>
        </Routes>
      
    </BrowserRouter>
  );
};


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
