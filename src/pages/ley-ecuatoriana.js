import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  subheader: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  info: {
    minHeight: "100%",
    maxWidth: "90%",
    paddingLeft: "5%",
    textAlign: "center",
  },
}));

const Laws = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>¿Qué dice la Ley?</title>
      </Head>
      <Grid className={classes.subheader}>
        <Grid className={classes.title}>
          <h1 style={{ color: "#F77272" }}>Conozcamos</h1>
        </Grid>
        <hr color="#F77272" width="100%" />
      </Grid>
      <Grid
        style={{
          textAlign: "center",
          width: "100%",
          height: "100px",
          fontFamily: "'Source Sans Pro', sans-serif",
        }}
      >
        <h2>
          ¿Qué dice la Ley ecuatoriana sobre las prácticas preprofesionales?
        </h2>
      </Grid>
      <Grid container className={classes.info}>
        <Grid item xs={12} sm={6} style={{ height: "100%" }}>
          <img
            src="https://image.flaticon.com/icons/png/512/1698/1698609.png"
            alt="personaje-confundido"
            width={375}
            height={350}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ height: "100%" }}>
          <p style={{ fontSize: 20 }}>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
          </p>
          <br />
          <br /> <br /> <br />
          <br />
        </Grid>
        <br />
        <br />
      </Grid>
      <br /> <br />
      <br /> <br />
    </>
  );
};

export default Laws;
