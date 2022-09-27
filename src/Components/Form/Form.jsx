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
        <div className='checkout-container'>
        <h2 className='checkout__title'>Finalizar compra</h2>
        <h3 className='checkout__subtitle'>Completa los campos:</h3>
        <form onSubmit={submitHandler}>
          <div className='checkout__input-container'>
            <label className='checkout__label'>Nombre</label>
            <input className='checkout__input' name="name" id="name" onClick={changeHandler} />
          </div>
          <div className='checkout__input-container'>
            <label className='checkout__label'>Telefono</label>
            <input className='checkout__input' type="tel"/>

          </div>
          <div className='checkout__input-container'>
            <label className='checkout__label'>Email</label>
            <input className='checkout__input' type="email" name="email" id="email" onClick={changeHandler} />
          </div>
          <div className='checkout__input-container'>
            <label className='checkout__label'>Mensaje</label>
            <input className='checkout__input' type="text" name="message" id="message" onClick={changeHandler} />
          </div>
          <input className='checkout__btn' type="submit" value="Enviar" />
        </form>

      </div>
    )
}
export default Form;