import React from "react";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Head from "next/head";
import Information from "@/components/InfoAdmin";
import CommentsCrud from "@/components/CommentsCrud";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  main: {
    height: "700px relative",
  },
}));

const Administrador = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Administrador</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Bienvenido Administrador!</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid>
        <Information />
      </Grid>
      <Grid>
        <CommentsCrud />
      </Grid>
    </>
  );
};

export default Administrador;
