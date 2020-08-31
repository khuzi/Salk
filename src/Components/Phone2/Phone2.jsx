import React, { useState, useEffect } from "react";

import { Grid, Typography, makeStyles } from "@material-ui/core";
import phoneImg from "../../assets/images/iphone.png";
import CheckBox from "../UI/CheckBox/CheckBox";
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

const Phone2 = (props) => {
  const classes = useStyles();

  const [height, setHeight] = useState(0);
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
    // console.log(height);
  });

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT1(true);
      }, 200);
    } else {
      setT1(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT2(true);
      }, 300);
    } else {
      setT2(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT3(true);
      }, 400);
    } else {
      setT3(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  return (
    <section className="Phone2">
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs="5" container justify="flex-start" className="desktopImg">
          <img src={phoneImg} alt="" />
        </Grid>
        <Grid item sm="5">
          <Grid item>
            <Typography className={classes.mainHeading}>
              Product Managers
            </Typography>
          </Grid>
          <Grid item xs="12" container justify="center" className="mobileImg">
            <img src={phoneImg} alt="" />
          </Grid>
          <Grid item>
            <Typography className={classes.text}>
              The My space page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              <li>
                <CheckBox checked={t1} />
                <Typography style={{ fontSize: "16px", color: "#544837" }}>
                  Never worry about overpaying for your energy again.
                </Typography>
              </li>

              <li>
                <CheckBox checked={t2} />
                <Typography style={{ fontSize: "16px", color: "#544837" }}>
                  We will only switch you to energy companies that we trust and
                  will treat you right
                </Typography>
              </li>

              <li>
                <CheckBox checked={t3} />
                <Typography style={{ fontSize: "16px", color: "#544837" }}>
                  We track the markets daily and know where the savings are.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Phone2;
