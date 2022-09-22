import './style.css';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const componentLoad = async () => {
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
/*             let response = await fetch('../data.json');
            let data = await response.json();
            setProductos(data); */
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            componentLoad();
        }, 2000)
    }, [productos])
    if (productos.length === 0){
        return <p>Loading...</p>
    }
    return <>
        <Cards items={productos} key="products" />
    </>
}
export default ItemListContainer;