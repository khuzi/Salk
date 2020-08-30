import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavItem from "./NavItem/NavItem";
import Drawer from "./Darwer/Drawer";
import logo from "../../assets/images/nav-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
    background: "#fff",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: "#000",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.logo,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  navItems: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logo: {
    marginBottom: '0.2rem',
    
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} alt="" />
          <Typography className={classes.title}>Productly</Typography>
          <div className={classes.navItems}>
            <NavItem path="/" text="Home" />
            <NavItem path="/about" text="About" />
            <NavItem path="/contact" text="Contact Us" />
          </div>
          <Drawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
