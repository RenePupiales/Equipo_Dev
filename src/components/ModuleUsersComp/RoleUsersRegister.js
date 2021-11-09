import axios from "axios";
import React, {useRef} from "react";

function RoleUsersRegister () {

    const form2 = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form2.current);
        const dataNewRoles = {
            nombreRol: formData.get("nombreRol"),
            checkVentas: formData.get("checkVentas"),
            checkProductos: formData.get("checkProductos"),
            checkUsers: formData.get("checkUsers")
        }
        console.log(dataNewRoles);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/add', dataNewRoles)
            .then(res => console.log(res.data), alert("Rol creado con éxito"));
    }
    
    return (
        <main>
            <h2 className="subtitle_page" id="createRoles">Creación de nuevos roles</h2>
            <p>Para crear un nuevo rol diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
            
            <form ref={form2} onSubmit={handleSubmit}>
                <label>
                    <span>Nombre del rol:</span>
                    <input type="text" name="nombreRol" placeholder="Escribe el nuevo tipo de rol" autoComplete="off" required/>
                </label>

                <div>
                    <h3>Seleccione los módulos asociados al rol:</h3>

                    <label className="labelCheck">
                        <input className="inputCheck" type="checkbox" name="checkVentas"/>
                        <h4>Acceso al módulo de ventas</h4>
                    </label>

                    <label className="labelCheck">
                        <input className="inputCheck" type="checkbox" name="checkProductos"/>
                        <h4>Acceso al módulo de productos</h4>
                    </label>

                    <label className="labelCheck">
                        <input className="inputCheck" type="checkbox" name="checkUsers"/>
                        <h4>Acceso al módulo de usuarios</h4>
                    </label>
                </div>

                <input className="submitButton" type="submit" value="Agregar rol"/>
            </form>
        </main>
    )
};

export {RoleUsersRegister};