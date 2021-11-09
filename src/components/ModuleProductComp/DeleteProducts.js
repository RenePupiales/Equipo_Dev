import React, {useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';
import axios from "axios";

function DeleteProducts () {

    const location = useLocation()
    const idProduct = location.pathname.split("/").pop()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getDataProducts = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/edit?id=' + idProduct)
            const saveProducts = await data.json()
            setProducts(saveProducts)
        }
        getDataProducts ()
      }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/delete?id=' + idProduct)
            .then(res => console.log(res.data), alert("Producto eliminado con éxito"));
        window.location.assign("/Productos/");
    }

    return (
        <main>
            <h1>Producto a eliminar</h1>
            <span>Revise la información del producto que desea eliminar</span>
            <div/>
                <tr>
                        <th>Código de Producto</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Color</th>
                        <th>Talla</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Inventario</th>                        
                </tr>

                <tr>
                    <td>{products.codigo}</td>
                    <td>{products.nombre}</td>
                    <td>{products.descripcion}</td>
                    <td>{products.color}</td>
                    <td>{products.talla}</td>
                    <td>{products.categoria}</td>
                    <td>{products.precio}</td>
                    <td>{products.inventario}</td>
                </tr>
            <div/>

            <button onClick={handleSubmit}>Eliminar producto</button>
        </main>
    )  
}

export{DeleteProducts};