
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Fragrances from './components/Fragrances';
import Furniture from './components/Furniture';
import Groceries from './components/Groceries';
import CartDetails from './components/CardDetails';
import Navbar from './components/Navbar';
function App() {
  return (
  <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />

            <Route path="/About" element={<About />} />

            <Route path="/fragrances" element={<Fragrances />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path='/cart' element={<CartDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </div>

  );
}

export default App;
