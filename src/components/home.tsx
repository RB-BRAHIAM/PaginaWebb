import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Bienvenido a la Tienda</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Iniciar Sesión</Link>
                    </li>
                    <li>
                        <Link to="/register">Registrarse</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
