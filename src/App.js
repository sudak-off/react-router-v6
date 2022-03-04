import './App.css';
import {Routes, Route} from "react-router-dom";

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'



function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={ <Layout />}>
               <Route index element={<HomePage />}/>
               <Route path='about' element={<AboutPage />}/>
               <Route path='blog' element={<BlogPage />}/>
               <Route path='*' element={<NotFoundPage />}/>
           </Route>
        </Routes>
    </div>
  );
}

export default App;
