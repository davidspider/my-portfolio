





import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { OrbitControls, Edges } from '@react-three/drei';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Skin from './pages/Skin';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">MyPortfolio</Link>
        <div className="nav-links">
          {/* Internal Page Anchors (stay on the Home page) */}
          	
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          
          {/* Link to a different Route */}
          <Link to="/blog">Blog</Link>
	 <Link to="/skin">Skin</Link>
        </div>
      </nav>




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
	<Route path="/skin" element={<Skin />} />
      </Routes>
    </div>
  );
}

export default App;