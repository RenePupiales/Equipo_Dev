import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Roles from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Feactures from '../Pages/Public/Features';
import Index from '../Pages/Public/Index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/dash', '/roles', '/ventas']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/roles'>
                                <Roles/>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas />
                            </Route>
                        </Switch>

                    </PrivateLayout>
                </Route>
                <Route path={['/features','/']}>
                    <PublicLayout>
                        <Switch>
                            <Route path='/features'>
                                <Feactures/>
                            </Route>
                        </Switch>
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
