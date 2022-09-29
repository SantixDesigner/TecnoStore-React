import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';
import CardDetailContainer from './Container/CardDetailContainer';
import ItemListContainer from './Container/ItemListContainer';
import { CartProvider } from './Context/CartContext.jsx';
import Cart from './Container/Cart'
import Form from './Components/Form/Form';
import { FirestoreContext } from './Context/FirestoreContext';
function App() {
  return <>
    <div className="App">
      <CartProvider>
        <FirestoreContext>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:idProducto" element={<CardDetailContainer />} />
              <Route path="/categorias/:idCategoria" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/formulario" element={<Form />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </FirestoreContext>
      </CartProvider>
    </div>

  </>;
}
export default App;
