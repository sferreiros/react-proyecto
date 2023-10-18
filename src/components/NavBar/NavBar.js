import './styles.css'; 
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img alt="ag" src={'./logo-agnovedades.png'} />
            </div>
            <div>
                <ul className="list-container">
                    <li>
                        <Button as="Button" variant="primary">
                             Mangas
                        </Button>
                    </li>
                    <li>
                        <Button as="Button" variant="primary">
                            Deportes y Fitness
                        </Button>
                    </li>
                    <li>
                        <Button as="Button" variant="primary">
                             Gel Frio Calor
                        </Button>
                    </li>
                    <li>
                        <Button as="Button" variant="primary">
                             Linea Magnetica
                         </Button>
                    </li>
                </ul>
                
            </div>
            <CartWidget/>
        </div>
    )
};

export default NavBar