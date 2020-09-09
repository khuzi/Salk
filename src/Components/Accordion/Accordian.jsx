import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import CheckBox from "../../Components/UI/CheckBox/CheckBox";
import "./Accordion.css";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontSize: "36px",
    color: "#6b6b6b;",
    fontWeight: "500",
    lineHeight: "1.2",
    marginBottom: "1rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      fontWeight: "bold",
    }
  },
}));

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default React.memo(function CustomizedAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="Accordion">
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <div style={{ marginLeft: "5.3rem" }}>
          <Typography className={classes.mainHeading}>
            {props.heading}
          </Typography>
        </div>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="subHeading">{props.title1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="listItem">
            <CheckBox checked={props.t1} />
            <Typography
              className="liText"
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                fontFamily: "Airbnb Light",
              }}
            >
              {props.text1}
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="subHeading">{props.title2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="listItem">
            <CheckBox checked={props.t2} />
            <Typography
              className="liText"
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                fontFamily: "Airbnb Light",
              }}
            >
              {props.text2}
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>

      {props.title3 && (
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="subHeading">{props.title2}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="listItem">
              <CheckBox checked={props.t3} />
              <Typography
                className="liText"
                style={{
                  color: "#6b6b6b",
                  fontSize: "14px",
                  fontFamily: "Airbnb Light",
                }}
              >
                {props.text3}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
});
