import './style.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail/CardDetail";
import { useFirestoreContext } from '../context/FirestoreContext';
const CardDetailContainer = () => {
    const getProducts = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getProducts(setProductos);
        }, 2000)
    });

    const { idProducto } = useParams();
    return productos.length === 0 ? <p>Loading...</p>
        :
        <div className="container mt-3">
            <div className="row">
                {productos.map(item => {
                    return (
                        item.id === parseInt(idProducto) && <CardDetail item={item} key={item} />
                    )
                })}
            </div>
        </div>
}
export default CardDetailContainer; 