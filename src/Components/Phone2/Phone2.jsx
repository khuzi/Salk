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
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px'
    }
  },
  subHeading: {
    fontSize: "18px",
    color: theme.palette.heading.hd2,
    fontWeight: "bold",
    marginTop: "1rem",
    marginLeft: "4.2rem",
    marginBottom: "-1.5rem",
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
      }, 400);
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
      }, 600);
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
              {props.heading}
            </Typography>
          </Grid>
          <Grid item xs="12" container justify="center" className="mobileImg">
            <img src={phoneImg} alt="" />
          </Grid>
          <Grid item>
            <Typography className="subHeading">{props.title1}</Typography>
            <ul>
              <li>
                <CheckBox checked={t1} />
                <Typography className="liText" style={{ color: "#544837" }}>
                  {props.text1}
                </Typography>
              </li>
            </ul>
            <Typography className="subHeading">{props.title2}</Typography>
            <ul>
              <li>
                <CheckBox checked={t2} />
                <Typography className="liText" style={{ color: "#544837" }}>
                  {props.text2}
                </Typography>
              </li>
            </ul>
            <Typography className="subHeading">{props.title3}</Typography>
            <ul>
              <li>
                <CheckBox checked={t3} />
                <Typography className="liText" style={{ color: "#544837" }}>
                  {props.text3}
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
