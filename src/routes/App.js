import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Products from '../containers/Products';

function App() {
  return (
    <>


<BrowserRouter>
<Layout>
<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/productos' element={<Products />} />
</Routes>
</Layout>
</BrowserRouter>
    </>
  );
}


export default App;
