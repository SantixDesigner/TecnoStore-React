import { useEffect } from 'react';
import { createContext, useState } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const addProducts = (id, quantity, nameS, imageS, price) => {
        let findIndex = products.findIndex(itemId => {
            return itemId.id === id;
        })
        findIndex === -1 && setProducts([...products, { id: id, quantity: quantity, nameS: nameS, imageS: imageS, price: price }])
    }
    useEffect(() => {
        console.log(products);
    },[products])
    const removeProducts = (id) => {
        let findCartIndex = products.find(elemId => {
            return (elemId === id);
        })
        products.splice(findCartIndex, 1);
        setProducts(...products);
    }
    const clearProducts = () => {
        setProducts([]);
    }
    const isInCart = (id) => {
        products.find(elemId => {
            return (elemId.id === id && alert("El producto ya está en el carrito"));
        })
    }
    return (
        <CartContext.Provider value={{ addProducts, removeProducts, clearProducts, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;