import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ImgProd from './ImgProd';

const User = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([]);

    const obteberDatos = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const p = await data.json();
        setProduct(p);
        console.log(product);      
    };
    
    useEffect(() => {
        obteberDatos();
    }, []);

    return (
        <div>
            <h1>Producto</h1>
            <ImgProd imagen={product.image} />
            <h3>{product.title}</h3>
            <ul>
                <li>Precio: {product.price}</li>
                <li>Descripción: {product.description}</li>
                <li>Categoría: {product.category}</li>
            </ul>
        </div>
    );
}
 
export default User
