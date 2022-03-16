import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

const App = () => {

 
  return (
    <Router>
      <Header />
          <Routes>
              <Route path="/"  element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      <Footer />
    </Router>
  );
}

export default App;
