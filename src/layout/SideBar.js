import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useTheme} from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarBorder from "@material-ui/icons/StarBorder";
import clsx from "clsx";
import React from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PeopleIcon from '@material-ui/icons/People';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonIcon from '@material-ui/icons/Person';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import BusinessIcon from '@material-ui/icons/Business';
import DescriptionIcon from '@material-ui/icons/Description';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ApartmentSharpIcon from '@material-ui/icons/ApartmentSharp';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import StoreMallDirectorySharpIcon from '@material-ui/icons/StoreMallDirectorySharp';
import LocalPostOfficeSharpIcon from '@material-ui/icons/LocalPostOfficeSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';


import BlurOnIcon from '@material-ui/icons/BlurOn';




const drawerWidth = 340;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: 0,
        [theme.breakpoints.up("sm")]: {
            width: 0
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));


export default function SideBar(props) {
    const open = props.open;
    const handleDrawerClose = props.handleDrawerClose;
    const theme = useTheme();
    const classes = useStyles();
    const [openCollapse, setOpenCollapse] = React.useState([false, false, false, false]); // thiet lap 4 menu TO
    const handleListClick = i => {
        let tmp = [...openCollapse];
        tmp[i] = tmp[i] ? false : true;
        setOpenCollapse(tmp);
    };



    return(
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
        >



            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon/>
                    ) : (
                        <ChevronLeftIcon/>
                    )}
                </IconButton>
            </div>
            <Divider/>
            <List>
                <div>
                    <ListItem
                        button
                        className={classes.nested}
                        component={Link}
                        to={process.env.PUBLIC_URL + "/process"}
                    >
                        <ListItemIcon>
                            <StarBorder/>
                        </ListItemIcon>
                        <ListItemText primary="Process"/>
                    </ListItem>
                    <ListItem
                        button
                        className={classes.nested}
                        component={Link}
                        to={process.env.PUBLIC_URL + "/performance"}
                    >
                        <ListItemIcon>
                            <StarBorder/>
                        </ListItemIcon>
                        <ListItemText primary="Performance"/>
                    </ListItem>

                    
                </div>



            </List>








        </Drawer>

    );

}

