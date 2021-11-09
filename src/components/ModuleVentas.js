import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { RegistroVentas } from "./ModuleVentasComp/RegistroVentas";
import { HomeVentasModule } from "./ModuleVentasComp/HomeVentasModule";
import {Cuenta} from "./ModuleVentasComp/Cuenta";
// import { EditVentas } from "./ModuleVentasComp/EditVentas";

function ModuleVentas() {
    return (
        <BrowserRouter>
            <HomeVentasModule />
            <Switch>
                <Route exact path="/Ventas" component={RegistroVentas}/>
                <Route exact path="/Ventas/Cuenta" component={Cuenta}/>
                {/* <Route exact path="/Ventas/EditarVentas" component={EditVentas }/> */}
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleVentas};