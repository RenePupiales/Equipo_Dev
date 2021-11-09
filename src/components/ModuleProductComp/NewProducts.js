import axios from "axios";
import React, {useRef} from "react";


function NewProducts () {


        const form = useRef(null);
        const handleSubmit = (event) =>{
        event.preventDefault ();
        const formData = new FormData(form.current);
        const dataNewProducts = {
            codigo: formData.get("codigo"),
            nombre: formData.get("nombre"),  
            descripcion: formData.get("descripcion"), 
            color: formData.get("color"), 
            talla: formData.get("talla"), 
            categoria: formData.get("categoria"), 
            precio: formData.get("precio"), 
            inventario: formData.get("inventario") 
        
        }    
        console.log (dataNewProducts); 
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rebajas-elfxv/service/Rebajas/incoming_webhook/add', dataNewProducts)
        .then(res=> console.log(res.data), alert("Guardado con éxito"));
    
        }
    return (

        <main>
     
            <section className="contenedorSeccion">
                   
            <form ref={form} onSubmit={handleSubmit}>

                        <label htmlFor="codigo">
                            <span>Código de Producto:</span>
                            <input name='codigo' type="number" id="codigo" placeholder="Escribe el Código" autocomplete="off" required />
                        </label>
                        <label htmlFor="nombre">
                            <span>Nombre de Producto:</span>
                            <input  name='nombre' type="text" id="nombre" placeholder="Escribe el Nombre del Producto" autocomplete="off" required />
                        </label>
                        
                        <label htmlFor="Descripcion">
                            <span>Descripción:</span>
                            <input name='descripcion'type="text" id="descripción" placeholder="Descripciòn de Producto" autocomplete="off" required />
                        </label>
                        <label htmlFor="color">
                            <span>Color:</span>
                            <select name='color'>
                                <option value="Blanco">Blanco</option>
                                <option value="Negro">Negro</option>
                                <option value="Gris">Gris</option>
                            </select>

                        </label>
                        <label htmlFor="talla">
                            <span>Talla:</span>
                            <select name='talla'>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="X">X</option>
                            </select>
                        </label>
                                             
                       
                        <label label htmlFor="categoria">
                            <span>Categoria:</span>
                            <input name= 'categoria' type="text" id="categoria" placeholder="Escribe la categoria" autocomplete="off" required />
                        </label>

                                                               
                        
                        <label label htmlFor="Precio">
                            <span>Precio COP:</span>
                            <input  name='precio' type="number" id="Precio" placeholder="precio" autocomplete="off" required />
                        </label>
                            
                      
                        <label label htmlFor="Inventario">
                            <span>Adicionar al Inventario</span>
                            <input name='inventario' type="Inventario" id="Inventario" placeholder="Inventario" autocomplete="off" required />
                        </label> 
              
                        <input  type="submit" value="Agregar Producto" />
                    </form>
                </section>    
        </main>

       
    )
};

export {NewProducts};
