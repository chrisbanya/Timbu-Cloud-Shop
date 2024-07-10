import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import SuccessPage from './pages/SuccessPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/details" element={<ProductDetailsPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </div>
      
  );
}

export default App;
