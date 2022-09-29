import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import CardDetailContainer from './container/CardDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './container/Cart'
import Form from './components/Form/Form';
import { FirestoreContext } from './context/FirestoreContext';
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
