import axios from "axios";
import React, {useRef, useState, useEffect, Fragment} from "react";
import {useLocation } from 'react-router-dom';

function EditRoles () {

    const location = useLocation();
    const idRole = location.pathname.split("/").pop();

    const [roles, setRoles] = useState([])

    useEffect(() => {
        const obtenerDatosRole = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/edit?id=' + idRole)
            const saveRoles = await data.json()
            setRoles(saveRoles);
        };
        obtenerDatosRole();
      }, []);


    const handleInputChange = (e) => {
        setRoles({[e.target.name]: e.target.value});
    }

    const form2 = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form2.current);
        const dataEditRoles = {
            role_id: idRole,
            nombreRol: formData.get("nombreRol"),
            checkVentas: formData.get("checkVentas"),
            checkProductos: formData.get("checkProductos"),
            checkUsers: formData.get("checkUsers")
        }

        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/update', dataEditRoles)
            .then(res => console.log(res.data), alert("Rol actualizado con éxito"));
        window.location.assign("/Usuarios");
    }

    return (
        <Fragment>
            <main>
                <h2 className="subtitle_page">Actualización de roles</h2>
                <p>Para editar el rol diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form ref={form2} onSubmit={handleSubmit}>
                    <label>
                        <span>Nombre del rol:</span>
                        <input type="text" name="nombreRol"
                                placeholder="Escribe el nuevo tipo de rol"
                                required
                                onChange={handleInputChange}
                                value={roles.nombreRol}/>
                    </label>

                    <div>
                        <h3>Seleccione los módulos asociados al rol:</h3>

                        <label className="labelCheck">
                            <input className="inputCheck" type="checkbox"
                                    name="checkVentas"
                                    onChange={handleInputChange}
                                    defaultChecked={roles.checkVentas}
                            />
                            <h4>Acceso al módulo de ventas</h4>
                        </label>

                        <label className="labelCheck">
                            <input className="inputCheck" type="checkbox" 
                                    name="checkProductos"
                                    onChange={handleInputChange}
                                    defaultChecked={roles.checkProductos}
                            />
                            <h4>Acceso al módulo de productos</h4>
                        </label>

                        <label className="labelCheck">
                            <input className="inputCheck" type="checkbox"
                                    name="checkUsers"
                                    onChange={handleInputChange}
                                    defaultChecked={roles.checkUsers}
                            />
                            <h4>Acceso al módulo de usuarios</h4>
                        </label>
                    </div>

                    <input className="submitButton" type="submit" value="Actualizar rol"/>
                </form>
            </main>
        </Fragment>


    )
}

export {EditRoles};