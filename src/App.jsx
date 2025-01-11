import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio, BlogPage } from "./components";
import BlogList from "./BlogList";
import BlogDetail from './BlogDetail';
import Footer from './components/Footer';
const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className='wrapper' ref={wrapperRef}>
              <div id="hero" className='z-10'>
                <Hero scrollContainer={wrapperRef} />
              </div>
              <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
                <Portfolio />
              </div>
              <div id="experience" className='relative z-30 bg-primary'>
                <Experience />
              </div>
         
        </div>
      } />
      <Route path="/blog/:id" element={< BlogDetail/>} />
      <Route path="/blogs" element={<BlogList />} />
    </Routes>
    <Footer />
  </div>
</BrowserRouter>
  );
};

export default App;