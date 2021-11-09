import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';

function EditProducts () {

    const location = useLocation()
    const idProduct = location.pathname.split("/").pop()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getDataProduct = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/edit?id=' + idProduct)
            const saveProducts = await data.json()
            setProducts(saveProducts)
        }
        getDataProduct()
      }, []);



    const handleInputChange = (e) => {
        setProducts({[e.target.name]: e.target.value});
    }

    const form2= useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form2.current);
        const dataEditProducts = {
            product_id: idProduct,
            codigo: formData.get("codigo"),
            nombre: formData.get("nombre"),  
            descripcion: formData.get("descripcion"), 
            color: formData.get("color"), 
            talla: formData.get("talla"), 
            categoria: formData.get("categoria"), 
            precio: formData.get("precio"), 
            inventario: formData.get("inventario") 

        }
        console.log(dataEditProducts);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/update', dataEditProducts)
            .then(res => console.log(res.data), alert("Producto actualizado con éxito"));
        window.location.assign("/Productos/");
    }

    return (

        <main>
            <section className="contenedorSeccion">      
                <form ref={form2} onSubmit={handleSubmit}>

                    <label>
                        <span>Código de Producto:</span>
                        <input name='codigo' type="number" placeholder="Escribe el Código" 
                        required
                        onChange={handleInputChange}
                        value={products.codigo}
                        />
                    </label>
                    <label>
                        <span>Nombre de Producto:</span>
                        <input  name='nombre' type="text" placeholder="Escribe el Nombre del Producto" 
                        required
                        onChange={handleInputChange}
                        value={products.nombre}
                        />
                    </label>
                    
                    <label>
                        <span>Descripción:</span>
                        <input name='descripcion'type="text" placeholder="Descripciòn de Producto" 
                        required
                        onChange={handleInputChange}
                        value={products.descripcion}
                        />
                    </label>
                    <label>
                        <span>Color:</span>
                        <select name='color' onChange={handleInputChange} value={products.color}>
                            <option value="Blanco">Blanco</option>
                            <option value="Negro">Negro</option>
                            <option value="Gris">Gris</option>
                        </select>

                    </label>
                    
                    <label>
                        <span>Talla:</span>
                        <select name='talla' onChange={handleInputChange} value={products.talla}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="X">X</option>
                        </select>
                    </label>
                                            
                    
                    <label>
                        <span>Categoria:</span>
                        <input name="categoria" type="text" placeholder="Escribe la categoria" 
                        required
                        onChange={handleInputChange} 
                        value={products.categoria}
                            />
                    </label>

                    <label>
                        <span>Precio COP:</span>
                        <input  name='precio' type="number" placeholder="precio" 
                        required
                        onChange={handleInputChange} 
                        value={products.precio}
                            />
                    </label>
                        
                    <label>
                        <span>Adicionar al Inventario</span>
                        <input name='inventario' type="number" placeholder="Inventario disponible" 
                        required
                        onChange={handleInputChange} 
                        value={products.inventario}
                            />
                    </label> 
            
                    <input  type="submit" value="Editar Producto" />
                </form>
            </section>    
        </main>
    )
};
export {EditProducts};