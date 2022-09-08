import './style.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/CardDetail/CardDetail";
const getCard = async (setProductos) => {
    try {
        let response = await fetch('../data.json');
        let data = await response.json();
        setProductos(data);
    } catch (e) {
        console.log(e);
    }
}

const CardDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getCard(setProductos);
        }, 2000)
    }, [productos]);
    const { idProducto } = useParams();
    if (productos.length === 0){
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