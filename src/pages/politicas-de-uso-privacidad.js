import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";

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
  main: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  partone: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  partwo: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  parthree: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  partfour: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
}));

const Politics = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Políticas</title>
      </Head>
      <Grid className={classes.subheader}>
        <Grid className={classes.title}>
          <h1>POLÍTICAS DE USO Y PRIVACIDAD</h1>
        </Grid>
        <hr color="black" width="100%" />
      </Grid>
      <Grid className={classes.main}>
        <Grid className={classes.partone}>
          <Grid className={classes.title}>
            <h1>Políticas de uso</h1>
          </Grid>
          <p>
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
        </Grid>
        <Grid className={classes.partwo}>
          <Grid className={classes.title}>
            <h1>Información recogida</h1>
          </Grid>
          <p>
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
        </Grid>
        <Grid className={classes.parthree}>
          <Grid className={classes.title}>
            <h1>Uso de la información</h1>
          </Grid>
          <p>
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
        </Grid>
        <Grid className={classes.partfour}>
          <Grid className={classes.title}>
            <h1>Con respecto al uso</h1>
          </Grid>
          <p>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Politics;
