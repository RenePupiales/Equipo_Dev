import React, {useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';
import axios from "axios";

function DeleteRoles () {

    const location = useLocation()
    const idRole = location.pathname.split("/").pop()

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const obtenerDatosRoles = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/edit?id=' + idRole);
            const saveRoles = await data.json();
            setRoles(saveRoles)
        }
        obtenerDatosRoles();
      }, []);



    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/delete?id=' + idRole)
            .then(res => console.log(res.data), alert("Rol eliminado con éxito"));
        window.location.assign("/Usuarios");
    }

    return (
        <main>
            <h1>Rol a eliminar</h1>
            <span>Revise la información del rol que desea eliminar</span>
            <tr>
                <th>Tipo de rol</th>
                <th>Permisos del usuario</th>
            </tr>

            <tr>
                <td>{roles.nombreRol}</td>
                <td>{roles.checkVentas == null ? "Módulo de ventas: INHABILITADO" : " Módulo de ventas: HABILITADO"}<br/>
                    {roles.checkProductos == null ? "Módulo de productos: INHABILITADO" : " Módulo de productos: HABILITADO"}<br/>
                    {roles.checkUsers == null ? "Módulo de usuarios: INHABILITADO" : " Módulo de usuarios: HABILITADO"}
                </td>
            </tr>

            <button onClick={handleSubmit}>Eliminar rol</button>
        </main>

    )
}

export {DeleteRoles};