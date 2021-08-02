import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
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
  subtitle: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  main: {
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
}));

const Laws = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Ley</title>
      </Head>
      <Grid container className={classes.root}>
        <Grid className={classes.subheader}>
          <Grid className={classes.title}>
            <h1>INFORMÉMONOS</h1>
          </Grid>
          <hr color="black" width="100%" />
          <h2>
            ¿Qué dice la Ley ecuatoriana sobre las prácticas preprofesionales?
          </h2>
        </Grid>
        <Grid className={classes.info} container>
          <Grid item xs={7}>
            <p>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño. El punto de usar Lorem Ipsum es que tiene una
              distribución más o menos normal de las letras, al contrario de
              usar textos como por ejemplo "Contenido aquí, contenido aquí".
              Estos textos hacen parecerlo un español que se puede leer. Muchos
              paquetes de autoedición y editores de páginas web usan el Lorem
              Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem
              Ipsum" va a dar por resultado muchos sitios web que usan este
              texto si se encuentran en estado de desarrollo. Muchas versiones
              han evolucionado a través de los años, algunas veces por
              accidente, otras veces a propósito (por ejemplo insertándole humor
              y cosas por el estilo).
            </p>
          </Grid>
          <Grid item xs={5} space={1}>
            <Image
              src="/Character.jpg"
              alt="Character"
              width={475}
              height={500}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Laws;
