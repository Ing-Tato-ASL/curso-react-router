import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Nosotros = () => {
    const datos = [
        {id: 1, nombre: 'Reactjs'},
        {id: 2, nombre: 'Vuejs'},
        {id: 3, nombre: 'Angularjs'}
    ];

    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        obteberDatos();
    }, []);

    const obteberDatos = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/`);
        const users = await data.json();
        setEquipo(users);
    };

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.title} - {item.price}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Nosotros;