import React from "react";
import styles from "@/styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@/components/Stepper";
import Description from "@/components/Description";
import Target from "@/components/Target";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  phrase: {
    width: "100%",
    position: "relative",
    height: "700px",
    backgroundImage: "url(/index/phrase.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={styles.container}>
        <Grid
          item
          xs={12}
          className={classes.title}
          style={{ alignItems: "center" }}
        >
          <h1>¿Problemas con las prácticas pre profesionales?</h1>
          <hr color="black" width="100%" />
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={12}>
          <Stepper />
        </Grid>
        <br />
        <br />
        <Grid
          item
          xs={12}
          className={classes.title}
          style={{ alignItems: "center" }}
        >
          <h1>¿Por qué usar la plataforma Prácticas al día?</h1>
        </Grid>
        <br />
        <br />
        <Grid container item xs={12}>
          <Description />
        </Grid>
        <br />
        <br />
        <Grid
          item
          xs={12}
          className={classes.title}
          style={{ alignItems: "center" }}
        >
          <Target />
        </Grid>
        <br />
        <br />
        <br />
      </div>
      {/*<Grid className={classes.phrase} item xs={12} sm={12}></Grid> <br />*/}
      <br />
    </>
  );
}
