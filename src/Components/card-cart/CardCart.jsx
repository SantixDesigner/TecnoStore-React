import { useCartContext } from "../../context/CartContext";

const CardCart = ({ item }) => {
    const { removeProducts } = useCartContext();
    return (
        <div className="d-flex">
            <img src={item.imageS} alt={item.imageS} className="imgCart col-3 mt-auto mb-auto" />
            <h3 className="col-3 mt-auto mb-auto">{item.nameS}</h3>
            <p className="mt-auto mb-auto">Cantidad {item.quantity}</p>
            <h5 className="col-3 mt-auto mb-auto">${item.price * item.quantity}</h5>
            <input type="submit" value="Quitar" className="col-3 inputQuitar mt-auto mb-auto" onClick={(e) => {
                e.preventDefault();
                removeProducts(item.id);
            }} />
        </div>
    )
}
export default CardCart;