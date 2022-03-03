import './App.css';
import {Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <div className="App">
        <header>
            <Link to="/">Home</Link>
            <Link to="/blog">Post</Link>
            <Link to="/about">About</Link>
        </header>
        {/*<div>*/}
        {/*    <h1>Get started with React-Router v6</h1>*/}
        {/*</div>*/}
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/blog' element={<BlogPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </div>
  );
}

export default App;
