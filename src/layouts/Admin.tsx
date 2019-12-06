import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import routes from '../routes';

import Sidebar from '../components/Sidebar/Sidebar';

import logo from '../assets/img/reactlogo.png';

import appStyle from '../assets/jss/layouts/appStyle';

const switchRoutes = (
    <Switch>
        { routes.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        }) }
        <Redirect to="/my-apps"/>
    </Switch>
);

const Admin = ({ ...props }) => {
    const [color] = useState('blue');
    const { classes, ...rest } = props;
    
    return (
        <div className="adminContainer">
            <Sidebar
                routes={routes}
                logo={logo}
                color={color}
                {...rest}
            />
            <div className={classes.mainPanel}>
                <div className={classes.content}>
                    <div className={classes.container}>{ switchRoutes }</div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(appStyle)(Admin);
