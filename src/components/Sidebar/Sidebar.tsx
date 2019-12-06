import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import sidebarStyle from '../../assets/jss/components/sidebarStyle';

const Sidebar = ({ ...props }) => {

    function activeRoute(routeName: any) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }

    const { classes, color, logo, routes } = props;
    var links = (
        <List className={classes.list}>
            { routes.map((prop: any, key: any) => {
                var activePro = ' ';
                var listItemClasses;
                listItemClasses = classNames({
                    [' ' + color]: activeRoute(prop.path)
                });

                const whiteFontClasses = classNames({
                    [' ' + classes.whiteFont]: activeRoute(prop.path)
                });
                return (
                    <NavLink
                        to={prop.path}
                        className={activePro + classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <ListItem button={true} className={classes.itemLink + listItemClasses}>
                            <prop.icon
                                className={classNames(classes.itemIcon, whiteFontClasses, {
                                    [classes.itemIconRTL]: props.rtlActive
                                })}
                            />
                            <ListItemText
                                primary={prop.name}
                                className={classNames(classes.itemText, whiteFontClasses, {
                                    [classes.itemTextRTL]: props.rtlActive
                                })}
                                disableTypography={true}
                            />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );
    var brand = (
        <div className={classes.logo}>
            <div className={classes.logoImage}>
                <img src={logo} alt="logo" className={classes.img} />
            </div>
        </div>
    );

    return (
        <div className="sidebarContainer">
            <Drawer
                anchor="right"
                variant="permanent"
                open={true}
                classes={{
                    paper: classNames(classes.drawerPaper)
                }}
            >
                { brand }
                <div className={classes.sidebarWrapper}>{ links }</div>
                <div
                    className={classes.background}
                />
            </Drawer>
        </div>
    )
};

export default withStyles(sidebarStyle)(Sidebar);