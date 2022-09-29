import { useContext } from 'react';
import { createContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const FirestoreContextProvider = createContext();
export const useFirestoreContext = () => useContext(FirestoreContextProvider);
export const FirestoreContext = ({ children }) => {
    const getProducts = (setProductos) => {
        try {
            //Agarra el firestore
            const db = getFirestore();
            const items = collection(db, 'items');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(docs);
            })
        } catch (e) {
            console.log(e);
        }
        return setProductos;
    }
    return (
        <FirestoreContextProvider.Provider value={getProducts}>
            {children}
        </FirestoreContextProvider.Provider>
    )
}
export default FirestoreContextProvider;