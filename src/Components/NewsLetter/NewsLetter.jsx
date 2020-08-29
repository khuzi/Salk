import React from "react";

import { Grid, Typography, Button, TextField } from "@material-ui/core";
import img1 from "../../assets/images/Newsletter-1.png";
import img2 from "../../assets/images/Newsletter-2.png";
import img3 from "../../assets/images/Newsletter-3.png";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <Grid container>
        <Grid item xs="1">
          <img src={img2} alt="" />
        </Grid>
        <Grid item xs="1">
          <div className="img2">
            <img src={img3} alt="" />
          </div>
        </Grid>
        <Grid item xs="1">
          <img src={img1} alt="" />
        </Grid>
        <Grid item xs="6">
          <Typography className="text1">Free Expert Advice</Typography>
          <Typography className="text2">
            Get health tips delivered right on your phone{" "}
          </Typography>
          <Grid item container justify="center">
            <Grid item sm="12" md="8">
              <input type="text" placeholder="Your Phone Number"/>
            </Grid>
            <Grid item sm="12" md="4">
              <Button className="btn">Get Started</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="1">
          <img src={img2} alt="" />
        </Grid>
        <Grid item xs="1">
          <div className="img2">
            <img src={img2} alt="" />
          </div>
        </Grid>
        <Grid item xs="1">
          <img src={img2} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsLetter;
