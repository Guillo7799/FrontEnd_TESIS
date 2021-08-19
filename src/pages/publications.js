import React from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AllPublications from "@/components/AllPublications";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    marginTop: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

const Publications = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Ofertas</title>
      </Head>
      {user ? (
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.title}>
            <QuestionAnswerIcon style={{ fontSize: 30 }} />
            <h1 style={{ fontSize: 40 }}>Publicaciones de ofertas</h1>
            <hr color="black" width="90%" />
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <h2>Postule a la oferta que crea conveniente.</h2>
          </Grid>
          <Grid container>
            <AllPublications />
          </Grid>
          <br />
          <br />
        </Grid>
      ) : (
        <div>
          Hace falta que inicie sesión <br />
        </div>
      )}
    </>
  );
};

export default Publications;
