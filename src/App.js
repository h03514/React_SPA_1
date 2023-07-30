import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">首頁</Link>
      <Link to="/checkout">購物車</Link>
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/product' element={<ProductDetail />}>
          <Route path=":id"></Route>
        </Route>
        <Route path='*' element={<p>找不到頁面</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
