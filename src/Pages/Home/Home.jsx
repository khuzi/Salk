import React from "react";
import {
  phone1 as phone1Data,
  phone2 as phone2Data,
  phone3 as phone3Data,
  phone4 as phone4Data,
} from "../../data";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import showcaseImg from "../../assets/images/Top1.png";
import improveImg from "../../assets/images/Improve.png";
import consultImg from "../../assets/images/Consult.png";
import discoverImg from "../../assets/images/Discover.png";
import monitorImg from "../../assets/images/Monitor.png";
import curveImg from "../../assets/images/curveBG.png";
import Phone1 from "../../Components/Phone1/Phone1";
import Phone2 from "../../Components/Phone2/Phone2";
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
      fontSize: "30px",
      lineHeight: "1",
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
      lineHeight: "1.2",
      marginBottom: 0,
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
      width: "100px",
      height: "40px",
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
    "&:hover": {
      background: theme.palette.primary.main,
      opacity: "0.9",
    },
  },
  heading3: {
    color: theme.palette.primary.main,
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "72px",
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
          <Typography data-aos="fade-up" className={classes.heading1}>
            Because You Matter
          </Typography>
          <Typography data-aos="fade-up" className={classes.heading2}>
            The best interface to personal health
          </Typography>
          <div data-aos="fade-up" className={classes.btnWarper}>
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
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={improveImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Improve</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
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
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={monitorImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Monitor</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
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
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={consultImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Consult</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
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
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={discoverImg} alt="" />
            </Grid>
            <Grid item>
              <Typography className="boxHeading">Discover</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
                Take our short questionnaire to get recommended tests for a more
                personalized experience - whether you want to improve
                nutritional goals or heart health, our goal is to guide you
                through this process.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <div className="curveBg">
          <img src={curveImg} alt="" />
        </div>
      </div>
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 1000 : 2100}
          {...phone1Data}
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone2
          height={window.innerWidth > 500 ? 2200 : 3100}
          {...phone2Data}
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 3000 : 4100}
          heading={
            <p style={{ lineHeight: "1.3" }}>
              Understand your diet better.
              <br />
              Explore different plans.
            </p>
          }
          title1="Diet plans that fit your goal"
          text1="Offering catered diet plans specific to your needs."
          title2="Personalized plans built by licensed dietitians"
          text2="Access your diet plan wherever you are at no cost"
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone2
          height={window.innerWidth > 500 ? 4000 : 4900}
          {...phone3Data}
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 4600 : 5900}
          {...phone4Data}
        />
      </div>
      <br />
      <br />
    </section>
  );
};

export default Home;
