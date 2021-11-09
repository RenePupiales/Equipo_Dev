import React, {useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';
import axios from "axios";

function DeleteUsers () {

    const location = useLocation()
    const idUser = location.pathname.split("/").pop()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const obtenerDatosUser = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/usuarios-enzvp/service/Usuarios/incoming_webhook/edit?id=' + idUser)
            const saveUsers = await data.json()
            setUsers(saveUsers)
        }
        obtenerDatosUser()
      }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/usuarios-enzvp/service/Usuarios/incoming_webhook/delete?id=' + idUser)
            .then(res => console.log(res.data), alert("Usuario eliminado con éxito"));
        window.location.assign("/Usuarios");
    }

    return (
        <main>
            <h1>Usuario a eliminar</h1>
            <span>Revise la información del usuario que desea eliminar</span>
            <div/>
                <tr>
                    <th>Documento de identidad</th>
                    <th>Nombres y apellidos</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Nombre de usuario</th>
                </tr>

                <tr>

                    <td>{users.dni}</td>
                    <td>{users.name} {users.lastname}</td>
                    <td>{users.email}</td>
                    <td>{users.perfil}</td>
                    <td>{users.username}</td>
                                       
                </tr>
            <div/>

            <button onClick={handleSubmit}>Eliminar usuario</button>
        </main>
    )  
}

export{DeleteUsers};