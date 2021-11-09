import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function ActiveProductsRead () {

    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        getData()
      }, []);

    const getData = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/Rebajas');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    const handleSearch = e => {
        e.preventDefault();
        const handle = e.target.value.toLowerCase();
        setSearchProducts(handle);
        console.log(searchProducts);
    };

    const filterProducts= products.filter( product => {
        return JSON.stringify(product).toLowerCase().includes(searchProducts)
    })

    return (
        <Fragment>
        <main>

        <label>
            <h2>Búscar</h2>
                            <input type="text"
                            codigo="searchProduct"
                            placeholder="Escribe una palabra clave"
                            onChange={handleSearch}
                            value={searchProducts}
                    />
        </label>
            <h2 className="subtitle_page">Productos Activos</h2>
            
            <table>
                <tbody>
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
                
                    {filterProducts.map((item, i) => (<tr key={i}>
                                            <td >{item.codigo}<br/></td>
                                            <td >{item.nombre}<br/></td>
                                            <td >{item.descripcion}<br/></td>
                                            <td >{item.color}</td>
                                            <td >{item.talla}</td>
                                            <td >{item.categoria}</td>
                                            <td >{item.precio}</td>
                                            <td >{item.inventario}</td>
                                        </tr>       
                    ))}
                </tbody>
            </table>
        </main>

        </Fragment>

    )
};

export {ActiveProductsRead};
