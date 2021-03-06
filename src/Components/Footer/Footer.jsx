import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/images/footer-logo.png";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "300px",
    margin: "2rem",
  },
  logo: {
    color: "#000",
    fontSize: "34px",
    cursor: 'pointer'
  },
  heading: {
    color: theme.palette.primary.main,
    fontSize: "30px",
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: "16px",
    marginTop: "1rem",
  },
  col2: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <section className="footer">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs="6" md="4" lg="2">
            <Grid>
              <div className="logoWarper">
                <img src={logo} alt="" style={{ marginRight: "1rem" }} />
                <Typography className={classes.logo}>
                  <Link to="/">Salk</Link>
                </Typography>
              </div>
              <Typography style={{ fontSize: "12px" , marginTop: '1rem'}}>
                &copy; {new Date().getFullYear()}, Salk Technologies inc.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs="6" md="4" lg="2" className={classes.col2}>
            <Typography className={classes.heading}>
              <Link to="/">Salk</Link>
            </Typography>

            <ul>
              <li>
                <Typography className={classes.text}>
                  {" "}
                  <Link to="/about">About</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link to="/contact">Contact Us</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>Privacy Policy</Typography>
              </li>
              <li>
                <Typography className={classes.text}>Terms of Use</Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs="6" md="4" lg="2">
            <Typography className={classes.heading}>Find us on</Typography>

            <ul>
              <li>
                <Typography className={classes.text}>Instagram</Typography>
              </li>
              <li>
                <Typography className={classes.text}>LinkedIn</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Footer;
