import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
const ButtonNumber = ({ stock, initial, onAdd, id, nameS, price, imageS }) => {
    const [valor, setValor] = useState(parseInt(initial));
    const [initialS, setInitialS] = useState(parseInt(initial));
    const [stockS, setStock] = useState(parseInt(stock));
    const [changeMessage, setChange] = useState(false);
    if (changeMessage === false) {
        return <>
            <div className="button">
                <label htmlFor="" className="label">Cantidad {stockS}<button onClick={() => {
                    if (valor <= stockS && valor > 0) {
                        setValor(valor - 1);
                        setInitialS(valor - 1);
                    }
                }
                }>-</button><i>{initialS}</i> <button onClick={() => {
                    if (valor < stockS && valor >= 0) {
                        setValor(valor + 1);
                        setInitialS(valor + 1);
                    }
                }}>+</button></label>
                <button className="buttonSecondary" onClick={(e) => {
                    if (valor <= stockS && valor > 0) {
                        onAdd(id, valor, nameS, imageS, price);
                        setStock(stockS - valor);
                        setChange(true);
                    }
                }}>Agregar al carrito</button>
            </div>
        </>
    }
    else{
        return(
            <div>
                <Link to="/cart" className="finCompra">Finalizar compra</Link>
            </div>
        )
    }
}
export default ButtonNumber;