import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { HomeProductModule } from "./ModuleProductComp/HomeProductModule";
import { ActiveProducts } from "./ModuleProductComp/ActiveProducts";
import { NewProducts } from "./ModuleProductComp/NewProducts";
import { Products } from "./ModuleProductComp/Products";
import { EditProducts } from "./ModuleProductComp/EditProducts";
import { DeleteProducts } from "./ModuleProductComp/DeleteProducts";


function ModuleProducts () {
    return (
        <BrowserRouter>
            <HomeProductModule />
            <Switch>
                <Route exact path="/Productos" component={Products}/>
                <Route exact path="/Productos/CrearProductos" component={NewProducts}/>
                <Route exact path="/Productos/ProductosActivos" component={ActiveProducts}/>  
                <Route exact path="/Productos/EditarProductos/:id" component={EditProducts}/>
                <Route exact path="/Productos/EliminarProductos/:id" component={DeleteProducts}/>                        
                <Route path="*" component={<h1>Error 404</h1>}/>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleProducts};