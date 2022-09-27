import { useState } from "react"
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import './form.css'
const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { products, getTotalPrice, clearProducts, getTotalQuantity } = useCartContext();
    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value };
        setForm(newForm);
    };
    const submitHandler = (event) => {
        const items = products.map(item => { return { id: item.id, title: item.nameS, price: item.price } })
        const order = { form, items: items, total: getTotalPrice() }
        event.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, "contactoform");
        addDoc(contactFormCollection, order).then((snapshot) => {
            Swal.fire({
                title: 'Compra Finalizada',
                text: `Tu codigo de seguimiento es ${snapshot.id}`,
                icon: 'success',
                footer: `Haz comprado ${getTotalQuantity()} productos a un precio total de $${getTotalPrice()}`,
                confirmButtonText: 'Ok'
            })
        });
        clearProducts();
    }

    return (
        <form action="">
            <div>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" id="name" onChange={changeHandler} value={form.name} />
                </div>
                <div>
                    <label htmlFor=""className="msj">Email</label>
                    <input type="text" name="email" id="email" onChange={changeHandler} value={form.email} />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="">Mensaje</label>
                    <input type="text" name="message" id="message" onChange={changeHandler} value={form.message} />
                </div>
                <div>
                    <label htmlFor="">Número de Teléfono</label>
                    <input type="text" />
                </div>
            </div>
            <button onClick={submitHandler}>Enviar</button>
        </form>
    )
}
export default Form;