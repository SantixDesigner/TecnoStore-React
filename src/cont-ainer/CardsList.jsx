import { useParams } from 'react-router-dom';
import Card from '../components/card/Card.jsx';
const CardsList = ({ items }) => {
    const { idCategoria } = useParams();
    return idCategoria !== undefined ?
        <div className='container container-fluid bg-dark text-center' >
            <div className="row">
                {items.map(item => {
                    return (
                        item.category === idCategoria && <Card item={item} key={item.id} />
                    )
                })}
            </div>
        </div >
        :
        <div className='container container-fluid bg-dark text-center'>
            <div className="row">
                {items.map((productos) => {
                    return (
                        <Card item={productos} key={productos.id} />
                    )
                })}
            </div>
        </div>
}
export default CardsList;  //