
import './App.css';
import Navigationbar from "./components/Navigationbar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Products from "./components/Products"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Product from './components/Product';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <ToastContainer />
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/products" element={<Products/>}></Route>
        <Route path ="/cart" element={<Cart/>}></Route>
        <Route path ="/product/:id" element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
