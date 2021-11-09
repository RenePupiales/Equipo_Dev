import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function RoleUsers () {

    const [roles, setRoles] = useState([]);
    // const [searchRoles, setSearchRoles] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/roles-vrska/service/Roles/incoming_webhook/get');
            const saveRoles = await data.json();
            setRoles(saveRoles)
        }
        obtenerDatos()
      }, []);

    // const handleSearch = e => {
    //     e.preventDefault();
    //     const handle = e.target.value.toLowerCase();
    //     setSearchRoles(handle);
    //     console.log(searchRoles);
    // };

    // const filterRoles = roles.filter( user => {
    //     return JSON.stringify(roles).toLowerCase().includes(searchRoles)
    // })

    return (
        <Fragment>
            <main>
                    <h2 className="subtitle_page">Roles registrados</h2>

                    {/* <label>
                        <p>Escriba en el campo para hacer la búsqueda</p>
                        <input type="search"
                                name="searchRoles"
                                placeholder="Escribe una palabra clave"
                                onChange={handleSearch}
                                value={searchRoles}
                        />
                    </label> */}

                    <table>
                        <tbody>
                            <tr>
                                <th>Tipo de rol</th>
                                <th>Permisos del usuario</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>

                            {roles.map((item, i) => (<tr key={i}>
                                                    <td>{item.nombreRol}<br/></td>
                                                    <td>{item.checkVentas == null ? "Módulo de ventas: INHABILITADO" : " Módulo de ventas: HABILITADO"}<br/>
                                                                {item.checkProductos == null ? "Módulo de productos: INHABILITADO" : " Módulo de productos: HABILITADO"}<br/>
                                                                {item.checkUsers == null ? "Módulo de usuarios: INHABILITADO" : " Módulo de usuarios: HABILITADO"}</td>
                                                    <td><Link to={"/Usuarios/EditarRoles/" + item._id}>Editar</Link></td>
                                                    <td><Link to={"/Usuarios/BorrarRoles/" + item._id}>Eliminar</Link></td>
                                                </tr>       
                        ))}
                        </tbody>
                    </table>
            </main>
        </Fragment>
    )
};

export {RoleUsers};