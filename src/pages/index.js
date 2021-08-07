import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import React from "react";
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
}));

export default function Home() {
  const classes = useStyles();
  return (
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
        style={{ alignItems: "cennter" }}
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
        style={{ alignItems: "cennter" }}
      >
        <h1>¿Qué objetivo tiene Prácticas al Día?</h1>
      </Grid>
      <br />
      <br />
      <Grid container item xs={12}>
        <Target />
      </Grid>

      <main className={styles.main}></main>

      {/*
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>*/}
    </div>
  );
}
