import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Products from '../containers/Products';

function App() {
  return (
    <>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

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
