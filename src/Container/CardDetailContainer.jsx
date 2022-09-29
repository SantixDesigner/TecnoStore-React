import './style.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/CardDetail/CardDetail";
import { useFirestoreContext } from '../Context/FirestoreContext';
const CardDetailContainer = () => {
    const getProducts  = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getProducts(setProductos);
        }, 2000)
    });

    const { idProducto } = useParams();
    if (productos.length === 0) {
        return <p>Loading...</p>
    }
    return <>
        <div className="container mt-3">
            <div className="row">
                {productos.map(item => {
                    return (
                        item.id === parseInt(idProducto) && <CardDetail item={item} key={item} />
                    )
                })}
            </div>
        </div>
    </>
}
export default CardDetailContainer; 