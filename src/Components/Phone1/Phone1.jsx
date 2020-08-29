import React from "react";

import { Grid, Typography, makeStyles } from "@material-ui/core";
import phoneImg from "../../assets/images/iphone.png";
import "./Phone1.css";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontSize: "36px",
    color: theme.palette.heading.hd2,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "16px",
    color: theme.palette.heading.hd2,
    fontWeight: "bold",
    margin: "1rem 0",
  },
  text: {
    color: "#544837",
  },
}));

const Phone1 = () => {
  const classes = useStyles();
  return (
    <section className="Phone1">
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm="5">
          <Grid item>
            <Typography className={classes.mainHeading}>
              Design Professionals
            </Typography>
          </Grid>
          <Grid item xs="12" container justify="center" className="mobileImg">
            <img src={phoneImg} alt="" />
          </Grid>
          <Grid item>
            <Typography className={classes.subHeading}>
              Accessory makers
            </Typography>
            <Typography className={classes.text}>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subHeading}>
              Alterationists
            </Typography>
            <Typography className={classes.text}>
              If you are looking for a new way to promote your business that
              won’t cost you more money,
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subHeading}>
              Custom Design designers
            </Typography>
            <Typography className={classes.text}>
              If you are looking for a new way to promote your business <br />{" "}
              that won’t cost you more money,
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs="5" container justify="flex-end" className="desktopImg">
          <img src={phoneImg} alt="" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Phone1;
