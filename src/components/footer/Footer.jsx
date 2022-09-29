import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
const Footer = () => {
    return (
        <footer>
            <div className='d-flex'>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                <h4>Desarrollado por Morillo Santiago</h4>
            </div>
        </footer>
    )
}
export default Footer; 