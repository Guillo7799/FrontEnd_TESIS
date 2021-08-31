import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "100%",
    margin: "auto",
    top: 0,
    left: 0,
    height: "100%",
  },
}));
const BusinessVideo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <video className={classes.video} controls width="600" height="450" loop>
          <source src="/videos/Empresa.mp4" type="video/mp4"></source>
        </video>
      </Grid>
    </Grid>
  );
};
export default BusinessVideo;
