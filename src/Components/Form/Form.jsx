
import './form.css'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useState } from "react";
import FormChildren from '../form-children/FormChildren';
const Form = () => {
  const { products, getTotalPrice, clearProducts, getTotalQuantity } = useCartContext();
  const [form, setForm] = useState({
      name: '',
      email: '',
      message: ''
  });
  const changeHandler = (event) => {
      const newForm = { ...form, [event.target.name]: event.target.value };
      setForm(newForm);
  };
  const submitHandler = (event) => {
      const items = products.map(item => { return { id: item.id, title: item.nameS, price: item.price, quantity: item.quantity } })
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
      <FormChildren changeHandler={changeHandler} submitHandler={submitHandler}/>
    </div>
  )
}
export default Form;