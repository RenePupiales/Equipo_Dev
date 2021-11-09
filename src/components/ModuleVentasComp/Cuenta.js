import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

const Cuenta = () => {

    const [invoices, setinvoices] = useState([]);
    const [searchInvoice, setSearchInvoice] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ventas-pkade/service/Ventas/incoming_webhook/get');
            const saveInvoices = await data.json();
            setinvoices(saveInvoices)
        }
        obtenerDatos()
      }, []);

    const handleSearch = e => {
        e.preventDefault();
        const handle = e.target.value.toLowerCase();
        setSearchInvoice(handle);
        console.log(searchInvoice);
    };

    const filterInvoice = invoices.filter( invoice => {
        return JSON.stringify(invoice).toLowerCase().includes(searchInvoice)
    })

    return (
        <Fragment>
            <main>
                <h2 className="subtitle_page">Registro de ventas</h2>

                <label>
                    <p>Escriba en el campo para hacer la búsqueda</p>
                    <input type="text"
                            name="searchInvoices"
                            placeholder="Escribe una palabra clave"
                            onChange={handleSearch}
                            value={searchInvoice}
                    />
                </label>

                <table>
                    <tbody>
                        <tr>
                            <th>Factura No.</th>
                            <th>Nombre del cliente</th>
                            <th>Identificción del cliente</th>
                            <th>Fecha de la venta</th>
                            <th>Código del producto</th>
                            <th>Cantidad</th>
                            <th>Total de la venta</th>
                            <th>Descuento aplicado</th>
                            <th>Vendedor</th>
                            <th>Editar venta</th>
                            <th>Eliminar venta</th>
                        </tr>
                    
                        {filterInvoice.map((item, i) => (<tr key={i}>
                                                <td>{item.invoice}<br/></td>
                                                <td>{item.nameClient}<br/></td>
                                                <td>{item.dniCliente}</td>
                                                <td>{item.dateSale}</td>
                                                <td>{item.codeProduct}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.total}</td>
                                                <td>{item.discount}</td>
                                                <td>{item.vendor}</td>
                                                {/* <td><Link to={"/Usuarios/EditarVentas/" + item._id}>Editar</Link></td>
                                                <td><Link to={"/Usuarios/BorrarVentas/" + item._id}>Eliminar</Link></td> */}
                                            </tr>       
                        ))}
                    </tbody>
                </table>
            </main>
        </Fragment>
    )
}

export {Cuenta};
