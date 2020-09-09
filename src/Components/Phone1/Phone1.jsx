import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import Accordian from "../Accordion/Accordian";
import CustomSlider from "../CustomSlider/CustomSlider";
import "./Phone1.css";

const Phone2 = (props) => {
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
    <section className="Phone1">
      {window.innerWidth <= 600 && (
        <>
          <Grid xs="12" container justify="center" className="mobileImg">
            <img src={props.screen} alt="" />
          </Grid>
          <CustomSlider {...props.phoneContent} />
        </>
      )}
      {window.innerWidth > 600 && (
        <Grid
          container
          justify="center"
          alignItems="center"
          className="main-warper"
        >
          <Grid
            item
            xs="5"
            container
            justify="flex-end"
            className="phone-content"
          >
            <Accordian
              {...props}
              {...props.phoneContent}
              t1={t1}
              t2={t2}
              t3={t3}
            />
          </Grid>
          <Grid
            item
            xs="7"
            container
            justify="flex-start"
            className="desktopImg"
          >
            <img src={props.screen} alt="" />
          </Grid>
        </Grid>
      )}
    </section>
  );
};

export default React.memo(Phone2);
