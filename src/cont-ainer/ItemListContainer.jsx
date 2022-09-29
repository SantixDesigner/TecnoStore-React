import './style.css';
import { useState, useEffect } from 'react';
import CardsList from './CardsList';
import { useFirestoreContext } from '../context/FirestoreContext';
const ItemListContainer = () => {
    const getProducts  = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            getProducts(setProductos);
        }, 2000)
    });
    return productos.length === 0 
    ?
        <p>Loading...</p>
    :
        <CardsList items={productos} key="products" />
}
export default ItemListContainer;