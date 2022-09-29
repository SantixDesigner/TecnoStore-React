import { useCartContext } from "../context/CartContext";
import './style.css';
import { Link } from "react-router-dom";
import CardCart from "../components/card-cart/CardCart";
const Cart = () => {
    const { products, getTotalPrice, getTotalQuantity, clearProducts } = useCartContext();
    return products.length === 0 
        ?
        <div className="text-center">
            <p>No hay productos</p>
        </div>
        :
        <div className="container">
            <div className="row">
                {products.map(item => {
                    return <CardCart item={item} key={item.id} />
                })}
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>Precio total: ${getTotalPrice()}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p className="ms-auto">Cantidad total: {(getTotalQuantity() === 1 ? <>un producto</> : <>{getTotalQuantity()} productos</>)}</p>
                </div>
            </div>
            <div className="row">
                <div className="text-center col-6">
                    <input type="button" value="Vaciar carrito" className="inputQuitar2" onClick={clearProducts} />
                </div>
                <div className="text-center col-6">
                    <Link to="/formulario" className="comprarProductos">Ir a comprar</Link>
                </div>
            </div>
        </div>
}

export default Cart;