import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Button from "@material-ui/core/Button";

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
};

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  main: {
    maxWidth: "70%",
    fontSize: 18,
    fontFamily: "'Source Sans Pro', sans-serif",
    padding: 10,
    maxHeight: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    bgcolor: "red",
    m: 1,
    border: 1,
  },
  studentop: {
    marginTop: 30,
    backgroundImage: "url(/register/student_back.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    maxHeight: "100%",
    color: "black",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  businessop: {
    marginTop: 30,
    backgroundImage: "url(/register/business_back.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    maxHeight: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  button: {
    textAlign: "center",
    color: "black",
    justifyContent: "center",
  },
}));

const RegisterGeneral = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Registro - Selección de Rol</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12} container className={classes.main}>
          <p>
            La aplicación permite dos tipo de usuarios, el primero "estudiante"
            está dirigido para aquellos estudiantes que se encuentran el proceso
            de búsqueda de un lugar donde realizar las horas de prácticas
            preprofesionales, mientras que la cuenta "empresa" permite a
            organizaciones públicas y privadas postular ofertas de horas de
            prácticas preprofesionales.
            <p>Seleccione la que se apega a su necesidad.</p>
          </p>
          <Link href={Routes.STUDENTREG} passHref>
            <MuiLink style={{ textDecoration: "none", maxWidth: "300px" }}>
              <Grid item xs={6} className={classes.studentop}>
                <h2 style={{ width: "450px", height: "200px" }}>Estudiante</h2>
              </Grid>
            </MuiLink>
          </Link>
          <Link href={Routes.BUSINESSREG} passHref>
            <MuiLink style={{ textDecoration: "none", maxWidth: "300px" }}>
              <Grid item xs={6} className={classes.businessop}>
                <h2
                  style={{
                    width: "450px",
                    height: "200px",
                  }}
                >
                  Empresa
                </h2>
              </Grid>
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.button}>
        <Link href={Routes.LOGIN} passHref>
          <MuiLink>
            <Button variant="contained" color="primary">
              Cancelar
            </Button>
          </MuiLink>
        </Link>
      </Grid>
    </>
  );
};

export default RegisterGeneral;
