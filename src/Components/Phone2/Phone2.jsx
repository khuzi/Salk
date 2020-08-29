import React from "react";

import { Grid, Typography, makeStyles, Checkbox } from "@material-ui/core";
import phoneImg from "../../assets/images/iphone.png";
import "./Phone2.css";

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
    marginTop: "2rem",
  },
}));

const Phone2 = () => {
  const classes = useStyles();
  return (
    <section className="Phone2">
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs="5" container justify="flex-start">
          <img src={phoneImg} alt="" />
        </Grid>
        <Grid item xs="5" md="5">
          <Grid item>
            <Typography className={classes.mainHeading}>
              Product Managers
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text}>
              The My space page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </Typography>
          </Grid>
          <Grid item>
            <div className="innerBox">
            <Checkbox className="checkBox" checked/>
              <Typography className={classes.text}>
                Never worry about overpaying for your energy again.
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div className="innerBox">
            <Checkbox className="checkBox" checked/>
              <Typography className={classes.text}>
                We will only switch you to energy companies that we trust and
                will treat you right
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div className="innerBox">
              <Checkbox className="checkBox" checked/>
              <Typography className={classes.text}>
                We track the markets daily and know where the savings are.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Phone2;
