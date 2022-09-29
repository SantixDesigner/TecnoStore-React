import './style.css';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import { useFirestoreContext } from '../Context/FirestoreContext';
const ItemListContainer = () => {
    const getProducts  = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getProducts(setProductos);
        }, 2000)
    });
    if (productos.length === 0){
        return <p>Loading...</p>
    }
    return <>
        <Cards items={productos} key="products" />
    </>
}
export default ItemListContainer;