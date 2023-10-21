import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Products from '../containers/Products';
import UseContexto from "../context/UseContexto";

function App() {
  return (
    <>


<BrowserRouter>
<UseContexto>
<Layout>
<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/productos' element={<Products />} />
</Routes>
</Layout>
</UseContexto>
</BrowserRouter>
    </>
  );
}


export default App;
