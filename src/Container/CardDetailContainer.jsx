import './style.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CardDetail from "../Components/CardDetail/CardDetail";

const CardDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getProducts();
        },2000)
    }, [productos]);
    const getProducts = () => {
        try {
            const db = getFirestore();
            const items = collection(db,'items');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id:doc.id,
                    ...doc.data()
                }))
                setProductos(docs);
            })
        } catch (e) {
            console.log(e);
        }
    }
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