import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StarBorder from "@material-ui/icons/StarBorder";
import {BrowserRouter, Link} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router-dom";
import PrivateRouteWithLayout from "./PrivateRouteWithLayout";
import {Layout} from "./layout";
import {authGet, authPost} from "./api";
import Process from './component/Process';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRouteWithLayout
                    component={Process}
                    layout={Layout}
                    exact path="/process"
                />

                <PrivateRouteWithLayout
                    component={Performance}
                    layout={Layout}
                    exact path = "/performance"

                />

                <PrivateRouteWithLayout
                    component={Home}
                    layout={Layout}
                    exact path = "/"

                />


            </Switch>
        </BrowserRouter>


    );


}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};


function Performance() {
    return (
        <div>
            <h2>Performance</h2>
        </div>
    );
}

function Home() {
    useEffect(()=>{

        authPost("/test",)
    })
    return (
        <div>
            <h2>Task Management</h2>
        </div>
    );
}
export default ResponsiveDrawer;
