import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: "/index/Welcome.png",
  },
  {
    imgPath: "/index/estudiante.png",
  },
  {
    imgPath: "/index/empresa.png",
  },
  {
    imgPath: "/index/phrase.png",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    //flexGrow: 1,
  },
  img: {
    height: "100%",
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
}));

const SwipeableTextMobileStepper = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      className={classes.stepper}
    >
      {tutorialSteps.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img className={classes.img} src={step.imgPath} alt={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default SwipeableTextMobileStepper;
