import { useCartContext } from "../Context/CartContext";
import './style.css';
import { Link } from "react-router-dom";
const Cart = () => {
    const { products, getTotalPrice, getTotalQuantity, removeProducts, clearProducts } = useCartContext();
    if (products.length === 0) {
        return (
            <div className="text-center">
                <p>No hay productos</p>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    {products.map(item => {
                        return <>
                            <div className="d-flex" key={item.id+1000}>
                                <img src={item.imageS} alt={item.imageS} className="imgCart col-3 mt-auto mb-auto" key={item.imageS} />
                                <h3 key={item.nameS} className="col-3 mt-auto mb-auto">{item.nameS}</h3>
                                <h5 key={item.price} className="col-3 mt-auto mb-auto">${item.price*item.quantity}</h5>
                                <input type="submit" value="Quitar" className="col-3 inputQuitar mt-auto mb-auto" onClick={(e) => {
                                    e.preventDefault();
                                    removeProducts(item.id);
                                }}key={item.id}/>
                            </div>
                        </>
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
        )
    }
}

export default Cart;