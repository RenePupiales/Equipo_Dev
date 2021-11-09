import React, {useState, useEffect, useRef, Fragment} from "react";
import {ActiveProductsRead} from "../ModuleProductComp/ActiveProductsRead";
import axios from "axios";

function RegistroVentas () {

    const form3 = useRef(null);

    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
    const [tempAmount, settempAmount] = useState("");
    const [tempDiscount, settempDiscount] = useState("");

    const handleSubmitSales = (event) => {
        event.preventDefault();
        const formData = new FormData(form3.current);
        const dataNewInvoice = {
            invoice: formData.get("invoice"),
            nameClient: formData.get("nameClient"),
            dniCliente: formData.get("dniCliente"),
            codeProduct: formData.get("codeProduct"),
            amount: formData.get("amount"),
            subtotal: formData.get('subtotal'),
            dateSale: formData.get('dateSale'),
            discount: formData.get('discount'),
            total: formData.get('total'),
            vendor: formData.get('vendor')
        }
        console.log(dataNewInvoice);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ventas-pkade/service/Ventas/incoming_webhook/add', dataNewInvoice)
            .then(res => console.log(res.data), alert("Factura creada con éxito"));
        window.location.assign("/Ventas");
    }

    useEffect(() => {
        obtenerDatos()
        getData()
        // handleTempSales();
        }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/usuarios-enzvp/service/Usuarios/incoming_webhook/get');
        const saveUsers = await data.json();
        setUsers(saveUsers)
    }

    const getData = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/Rebajas');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    const handleSearch = e => {
        e.preventDefault();
        const handle = e.target.value;
        setSearchProduct(handle);
    };

    const handleAmount = e => {
        e.preventDefault();
        const handle = e.target.value;
        settempAmount(handle);
    };

    const handleDiscount = e => {
        e.preventDefault();
        const handle = e.target.value;
        settempDiscount(handle);
    };


    
    const filterProduct = products.filter( product => {
        return JSON.stringify(product).includes(searchProduct)
    })

    const precio = parseInt(filterProduct.map( i => i.precio));
    const subTotal = precio * tempAmount;
    const total = (subTotal) - (subTotal * tempDiscount);
    console.log(precio);
    console.log(tempAmount);
    console.log(subTotal);







    return (
        <Fragment>
            <ActiveProductsRead />
        
        <main>

            <section className="contenedorSeccion">


                <h2 className="subtitle_page">Registro de Ventas</h2>
                <form ref={form3} onSubmit={handleSubmitSales}>
                    <label>
                        <span>Factura No.:</span>
                        <input type="number" name="invoice" placeholder="Indique el número de factura" required/>
                    </label>
                    <label>
                        <span>Nombre del cliente:</span>
                        <input type="text" name="nameClient" placeholder="Escriba el nombre del cliente" required/>
                    </label>

                    <label>
                        <span>DNI de cliente:</span>
                        <input type="number" name="dniCliente" placeholder="Escriba el número de identificación" required/>
                    </label>

                    <label>
                        <span>Código del producto:</span>
                        <select type="search" name="codeProduct" placeholder="Seleccione el código del producto" required onChange={handleSearch}>
                            {products.map(item => (<option key={item._id}>{item.codigo}</option>))}
                        </select>
                    </label>

                    <label>
                        <span>Cantidad a vender:</span>
                        <input type="number" name="amount" placeholder="Escriba la cantidad de productos" required onChange={handleAmount}/>
                    </label>

                    <label>
                        <span>Subtotal:</span>
                        <input type="number" name="subtotal" required value={subTotal}/>
                    </label>

                    <label>
                        <span>Fecha de la venta:</span>
                        <input type="date" name="dateSale" id="DD/MM/AAAA" placeholder="DD/MM/AAAA" required/>
                    </label>

                    <label>
                        <span>Seleccione el valor de descuento:</span>
                        <label></label>
                            <select name="discount" onChange={handleDiscount} key="discount">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                <option value="0">0%</option> 
                                <option value="0.05">5%</option> 
                                <option value="0.1">10%</option> 
                                <option value="0.15">15%</option>
                            </select>
                    </label>

                    <label>
                        <span>Total:</span>
                        <input type="number" name="total" required value={total}/>
                    </label>

                    <label>
                        <span>Vendedor encargado:</span>
                        <select name="vendor">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                {users.map((item, i) => (<option>{item.name} {item.lastname}</option>
                                        ))}
                        </select>
                    </label>
                
                    <input type="submit" value="Añadir venta"/>    
                        
                </form>
            </section>

        </main>
        </Fragment>

    )
};
export {RegistroVentas};