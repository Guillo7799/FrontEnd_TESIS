import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@/components/Stepper";
import Target from "@/components/Target";
import Why from "@/components/Why";

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
  before: {
    background: "#F77272",
    width: "100%",
    height: "2%",
  },
  after: {
    background: "#094275",
    width: "100%",
    height: "2%",
  },
  explication: {
    marginLeft: "5%",
    maxWidth: "90%",
    textAlign: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <br />
        <br />
        <Grid className={classes.before}>
          <Grid item xs={12}>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid
          container
          style={{ width: "70%", height: "70%" }}
          item
          xs={12}
          sm={12}
        >
          <Stepper />
        </Grid>
        <Grid className={classes.after}>
          <Grid item xs={12}>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} className={classes.explication}>
          <Grid
            item
            xs={12}
            className={classes.title}
            style={{ alignItems: "center" }}
          >
            <h1 style={{ color: "#094275" }}>¿Para quiénes está dirigido?</h1>
          </Grid>
          <Grid container item xs={12} sm={12}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ marginTop: "7%", paddingLeft: "10%" }}
            >
              <h2 style={{ width: "80%", color: "#094275" }}>Empresas</h2>
              <p style={{ width: "80%" }}>
                La cuenta empresarial está dirigida para los usuarios que
                soliciten un practicante, por lo cual si quiere realizar ofertas
                de esta actividad, esta cuenta es para usted.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} style={{ maxWidth: "100%" }}>
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-crecimiento-estrategia-negocio_53876-40421.jpg?size=626&ext=jpg"
                alt="icono-empresa"
                width={400}
                height={300}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12}>
            <Grid item xs={12} sm={6} style={{ maxWidth: "100%" }}>
              <img
                src="https://img.freepik.com/vector-gratis/coleccion-estudiantes-universitarios-modernos-bolsas_1262-19753.jpg?size=626&ext=jpg"
                alt="icono-empresa"
                width={350}
                height={300}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ marginTop: "7%", paddingLeft: "10%" }}
            >
              <h2 style={{ width: "80%", color: "#094275" }}>Estudiantes</h2>
              <p style={{ width: "80%" }}>
                La cuenta estudiantil está diseñada para los que busquen un
                lugar donde realizar sus prácticas pre profesionales.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.before}>
          <Grid item xs={12}>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}></Grid>
        <Grid
          item
          xs={12}
          className={classes.title}
          style={{ alignItems: "center" }}
        >
          <h1 style={{ color: "#094275" }}>¿Por qué usar Prácticas al día?</h1>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          style={{ width: "100%", height: "300px", marginLeft: "1%" }}
        >
          <Why />
        </Grid>
        <Grid className={classes.after}>
          <Grid item xs={12}>
            <br />
            <br />
          </Grid>
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
          <br /> <br />
          <br /> <br />
        </Grid>
      </Grid>
    </>
  );
}
