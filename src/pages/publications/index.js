import React from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AllPublications from "@/components/AllPublications";
import Image from "next/image";
import withAuth from "@/hocs/withAuth";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "src/constants/routes";
import MiniPostulations from "@/components/MiniPostulations";

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
            <QuestionAnswerIcon style={{ fontSize: 30, color: "#F77272" }} />
            <h1 style={{ fontSize: 40, color: "#F77272" }}>
              Publicaciones de ofertas
            </h1>
            <hr color="#F77272" width="90%" />
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <h2>Postule a la oferta que crea conveniente.</h2>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4} style={{ height: "500px" }}>
              <MiniPostulations />
            </Grid>
            <Grid item xs={12} sm={8}>
              <AllPublications />
            </Grid>
          </Grid>
          <br />
          <br />
        </Grid>
      ) : (
        <div>
          <Image
            src="https://image.flaticon.com/icons/png/512/2622/2622112.png"
            alt="No inicio de sesión"
            width={150}
            height={150}
          />
          <p>Vaya! parece que no ha iniciado sesión</p>
          <br />
        </div>
      )}
    </>
  );
};

export default withAuth(Publications);
