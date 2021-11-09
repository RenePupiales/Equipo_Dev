import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { DeleteRoles } from "./ModuleUsersComp/DeleteRoles";
import { DeleteUsers } from "./ModuleUsersComp/DeleteUsers";
import { EditRoles } from "./ModuleUsersComp/EditRoles";
import { EditUsers } from "./ModuleUsersComp/EditUsers";
import { GraphicHomeUsers } from "./ModuleUsersComp/GraphicHomeUsers";
import { HomeUsersModule } from "./ModuleUsersComp/HomeUsersModule";
import { NewUsers } from "./ModuleUsersComp/NewUsers";
import { OldUsers } from "./ModuleUsersComp/OldUsers";
import { RoleUsers } from "./ModuleUsersComp/RoleUsers";
import { RoleUsersRegister } from "./ModuleUsersComp/RoleUsersRegister";

function ModuleUsers () {
    return (
        <BrowserRouter>
            <HomeUsersModule />
            <Switch>
                <Route exact path="/Usuarios" component={GraphicHomeUsers}/>
                <Route exact path="/Usuarios/NuevosUsuarios" component={NewUsers}/>
                <Route exact path="/Usuarios/UsuariosRegistrados" component={OldUsers}/>
                <Route exact path="/Usuarios/EditarUsuarios/:id" component={EditUsers}/>
                <Route exact path="/Usuarios/BorrarUsuarios/:id" component={DeleteUsers}/>
                <Route exact path="/Usuarios/NuevosRoles" component={RoleUsersRegister}/>
                <Route exact path="/Usuarios/RolesRegistrados" component={RoleUsers}/>
                <Route exact path="/Usuarios/EditarRoles/:id" component={EditRoles}/>
                <Route exact path="/Usuarios/BorrarRoles/:id" component={DeleteRoles}/>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleUsers};