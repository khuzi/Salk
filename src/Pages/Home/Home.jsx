import React from "react";

import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import showcaseImg from "../../assets/images/Top1.png";
import improveImg from "../../assets/images/Improve.png";
import consultImg from "../../assets/images/Consult.png";
import discoverImg from "../../assets/images/Discover.png";
import monitorImg from "../../assets/images/Monitor.png";
import Phone1 from "../../Components/Phone1/Phone1";
import Phone2 from "../../Components/Phone2/Phone2";
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import "./Home.css";


const useStyles = makeStyles((theme) => ({
  heading1: {
    color: theme.palette.primary.main,
    fontSize: "66px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    lineHeight: "1.2",
    [theme.breakpoints.down("md")]: {
      fontSize: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  heading2: {
    color: theme.palette.heading.hd1,
    fontSize: "27px",
    margin: "1rem 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  btnWarper: {
    marginTop: "1rem",
  },
  btn: {
    background: theme.palette.primary.main,
    width: "175px",
    height: "53px",
    textAlign: "center",
    color: "#fff",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "30px",
      fontSize: "12px",
    },
  },
  heading3: {
    color: theme.palette.primary.main,
    fontSize: "35px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  box: {
    maxWidth: "15rem",
    marginTop: "2rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <section className="home">
      <Grid container className="showcaseTop">
        <Grid item xs="6" container direction="column" justify="center">
          <Typography className={classes.heading1}>
            Because You Matter
          </Typography>
          <Typography className={classes.heading2}>
            The best interface to personal health
          </Typography>
          <div className={classes.btnWarper}>
            <Button className={classes.btn}>Notify me</Button>
          </div>
        </Grid>
        <Grid item xs="6">
          <img src={showcaseImg} alt="" />
        </Grid>
      </Grid>

      <div className="showcaseBottom">
        <Typography align="center" className={classes.heading3}>
          We design tools to unveil your <br /> superpowers
        </Typography>

        <Grid container justify="space-evenly">
          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
          >
            <Grid item>
              <img src={improveImg} alt="" />
            </Grid>
            <Grid>
              <Typography style={{ fontSize: "22px", marginBottom: "0.5rem" }}>
                Improve
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "16px" }}>
                Take our short questionnaire to get recommended tests for a more
                personalized experience - whether you want to improve
                nutritional goals or heart health, our goal is to guide you
                through this process.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
          >
            <Grid item>
              <img src={monitorImg} alt="" />
            </Grid>
            <Grid>
              <Typography style={{ fontSize: "22px", marginBottom: "0.5rem" }}>
                Monitor
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "16px" }}>
                Accurate, physician reviewed results from CLIA-Certified labs
                that allow you to better understand your health. Our dedicated
                clinical support team will guide you through this process from
                start to finish.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
          >
            <Grid item>
              <img src={consultImg} alt="" />
            </Grid>
            <Grid>
              <Typography style={{ fontSize: "22px", marginBottom: "0.5rem" }}>
                Consult
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "16px" }}>
                Have the option to speak to a licensed medical professional -
                whether you want meal tips from a dietitian or speak to a mental
                health specialist. Our dedicated staff will be there for you
                whenever, wherever.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
          >
            <Grid item>
              <img src={discoverImg} alt="" />
            </Grid>
            <Grid>
              <Typography style={{ fontSize: "22px" }}>Discover</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "16px", marginBottom: "0.5rem" }}>
                Take our short questionnaire to get recommended tests for a more
                personalized experience - whether you want to improve
                nutritional goals or heart health, our goal is to guide you
                through this process.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Phone1 />
      <Phone2 />
      <Phone1 />
      <Phone2 />
      <NewsLetter />
    </section>
  );
};

export default Home;

/**
 *
 */
