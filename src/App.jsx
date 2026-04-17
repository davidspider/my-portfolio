import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './pages/Home';
import Blog from './pages/Blog';

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
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;