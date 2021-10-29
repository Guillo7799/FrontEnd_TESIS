import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Head from "next/head";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";

const useStyles = makeStyles((theme) => ({
  subheader: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
  },
  title: {
    textAlign: "center",
  },
  main: {
    paddingLeft: "10%",
    width: "90%",
  },
  partone: {
    padding: "10px",
    fontSize: 17,
  },
}));

const Access = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Registro de Curriculum</title>
      </Head>
      <Grid className={classes.subheader}>
        <Grid className={classes.title}>
          <h1 style={{ color: "#F77272" }}>
            No tiene autorización para usar este módulo
          </h1>
        </Grid>
        <hr color="#F77272" width="100%" />
      </Grid>
      <Grid className={classes.main}>
        <Grid className={classes.partone}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>¿Por qué no?</h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ TextAlign: "center", width: "95%" }}
          >
            <Grid item xs={12} sm={12}>
              <p>
                Dentro de las actividades permitidas para realizarse por su
                cuenta no se encuentra la de registrar un curriculum, puede
                revisar que actividades tiene permitida presionando el siguiente
                botón:
              </p>
            </Grid>

            <br />
            <Grid item xs={12} sm={12} style={{ marginLeft: "47%" }}>
              <Link href={Routes.GLOBALCOUNT} passHref>
                <MuiLink style={{ color: "#F77272" }}>
                  <Button
                    color="primary"
                    style={{ backgroundColor: " #F77272" }}
                    variant="contained"
                  >
                    Revisar
                  </Button>
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid>
    </>
  );
};

export default Access;
