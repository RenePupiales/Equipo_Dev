import axios from "axios";
import React, {useRef, useState, useEffect} from "react";

function NewUsers () {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const dataNewUsers = {
            dni: formData.get("dni"),
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            perfil: formData.get("perfil"),
            username: formData.get('username'),
            password: formData.get('password')
        }
        console.log(dataNewUsers);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/usuarios-enzvp/service/Usuarios/incoming_webhook/add', dataNewUsers)
            .then(res => console.log(res.data), alert("Usuario creado con éxito"));
        window.location.assign("/Usuarios");
    }

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        obtenerDatos()
      }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixroles-rqcbf/service/matrixRoles/incoming_webhook/get');
        const saveRoles = await data.json();
        setRoles(saveRoles)
    }

    return (
        <main>
            <section>
                <h2 className="subtitle_page">Creación de nuevos usuarios</h2>
                <p>Para crear un nuevo usuario diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form ref={form} onSubmit={handleSubmit}>
                    <label>
                        <span>Número de documento de identidad:</span>
                        <input type="number" minLength="7"
                                placeholder="Escribe el número de documento"
                                required
                                name="dni"
                                // onChange={handleInputChange}
                                />
                    </label>
                    <label>
                        <span>Nombres:</span>
                        <input type="text"
                                placeholder="Escribe los nombres"
                                required
                                name="name"
                                // onChange={handleInputChange}
                                />
                    </label>
                    <label>
                        <span>Apellidos:</span>
                        <input type="text"
                                placeholder="Escribe los apellidos"
                                required
                                name="lastname"
                                // onChange={handleInputChange}
                                />
                    </label>

                    <label>
                        <span>Correo:</span>
                        <input type="email"
                                placeholder="Escribe el correo"
                                required
                                name="email"
                                // onChange={handleInputChange}
                                />
                    </label>

                    <label>
                        <span>Perfil:</span>
                        <select name="perfil" required name="perfil">
                            {roles.map(item => (<option key={item._id}>{item.nombreRol}</option>))}
                        </select>
                    </label>

                    <label>
                        <span>Nombre de usuario:</span>
                        <input type="text"
                                placeholder="Escriba el nombre de usuario"
                                required
                                name="username"
                                // onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type="password"
                                placeholder="Asigne un password"
                                required
                                name="password"
                                // onChange={handleInputChange}
                        />
                    </label>
                    <input type="submit" value="Crear usuario"/>
                </form>
            </section>
        </main>
    )
};

export {NewUsers};