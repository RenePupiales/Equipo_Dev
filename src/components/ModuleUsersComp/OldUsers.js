import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function OldUsers () {

    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/usuarios-enzvp/service/Usuarios/incoming_webhook/get');
            const saveUsers = await data.json();
            setUsers(saveUsers)
        }
        obtenerDatos()
      }, []);

    const handleSearch = e => {
        e.preventDefault();
        const handle = e.target.value.toLowerCase();
        setSearchUser(handle);
        console.log(searchUser);
    };

    const filterUser = users.filter( user => {
        return JSON.stringify(user).toLowerCase().includes(searchUser)
    })

    return (
        <Fragment>


            <main>
                <h2 className="subtitle_page">Usuarios registrados</h2>

                <label>
                    <p>Escriba en el campo para hacer la búsqueda</p>
                    <input type="text"
                            name="searchUsers"
                            placeholder="Escribe una palabra clave"
                            onChange={handleSearch}
                            value={searchUser}
                    />
                </label>

                <table>
                    <tbody>
                        <tr>
                            <th>Documento de identidad</th>
                            <th>Nombres y apellidos</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Nombre de usuario</th>
                            <th>Password</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    
                        {filterUser.map((item, i) => (<tr key={i}>
                                                <td>{item.dni}<br/></td>
                                                <td>{item.name} {item.lastname}<br/></td>
                                                <td>{item.email}</td>
                                                <td>{item.perfil}</td>
                                                <td>{item.username}</td>
                                                <td>{item.password}</td>
                                                <td><Link to={"/Usuarios/EditarUsuarios/" + item._id}>Editar</Link></td>
                                                <td><Link to={"/Usuarios/BorrarUsuarios/" + item._id}>Eliminar</Link></td>
                                            </tr>       
                        ))}
                    </tbody>
                </table>
            </main>



        </Fragment>

    )
};

export {OldUsers};