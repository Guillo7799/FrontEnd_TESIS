import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    maxWidth: "100%",
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  personal: {
    textAlign: "left",
    alignContent: "center",
    justifyContent: "center",
  },
  dates: {
    textAlign: "right",
    alignContent: "center",
    justifyContent: "center",
  },
  dates2: {
    paddingLeft: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  submain: {
    paddingLeft: 150,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  fields: {
    textAlign: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75ch",
    },
  },
  buttons: {
    textAlign: "center",
  },
}));

const UpdateProfileStudent = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Actualización Perfil de datos Estudiantiles</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.root}>
        <Grid className={classes.submain} item xs={6} spacing={4}>
          <Image
            src="/profile/avatarS.jpg"
            alt="avatar_business"
            width={200}
            height={200}
            marginLeft="45%"
          />
        </Grid>
        <Grid className={classes.personal} item xs={6} spacing={4}>
          <br />
          <label>Nombres: Juan Sebastián</label>
          <br />
          <br />
          <label>Apellidos: Martínez Pérez</label>
          <br />
          <br />
          <label>Correo Institucional: juan.sebastian@puce.edu.ec</label>
          <br />
          <br />
          <label>Cédula de identidad: 1234567890</label>
          <br />
          <br />
        </Grid>
      </Grid>
      <br />
      <hr color="black" width="90%" />
      <Grid container item xs={12}>
        <Grid className={classes.dates} item xs={4} spacing={4}>
          <br />
          <br />
          <label>Fecha de Nacimiento: </label>
          <br />
          <br />
          <label>Universidad: </label>
          <br />
          <br />
          <label>Carrera: </label>
          <br />
          <br />
          <label>Provincia: </label>
          <br />
          <br />
          <label>Dirección: </label>
          <br />
          <br />
          <label>Idioma: </label>
          <br />
          <br />
          <label>Nivel de Idioma: </label>
          <br />
          <br />
          <label>Título otorgado de segundo nivel: </label>
          <br />
          <br />
          <label>Habilidades: </label>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <label>Certificados: </label>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <label>Experiencia laboral: </label>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={1}>
          <hr width="1" size="750" />
        </Grid>
        <Grid item xs={7} className={classes.dates2} spacing={4}>
          <br />
          <br />
          <label>1999/10/22</label>
          <br />
          <br />
          <label>Pontifica Universidad Católica del Ecuador</label>
          <br />
          <br />
          <label>Administración de Empresas</label>
          <br />
          <br />
          <input
            type="text"
            name="province"
            size="70"
            placeholder="Escriba la provincia donde vive"
          />
          <br />
          <br />
          <input
            type="text"
            name="province"
            size="70"
            placeholder="Escriba la dirección (no tiene que ser exacta)"
          />
          <br />
          <br />
          <label>Inglés</label>
          <br />
          <br />
          <input
            type="text"
            name="province"
            size="70"
            placeholder="Nivel de Idioma"
          />
          <br />
          <br />
          <label>Bachiller en Ciencias</label>
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={7}
            placeholder="¿Qué habilidades posee?"
          />
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={7}
            minWidth="75px"
            placeholder="¿Qué certificados posee?"
          />
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={7}
            placeholder="¿Trabajó antes?"
          />
          <br />
        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <br />
          <br />
          <Link href={Routes.STUDENTP} passHref>
            <MuiLink>
              <Button variant="contained" color="primary">
                {" "}
                Cancelar
              </Button>
            </MuiLink>
          </Link>
          {"          "}
          <Button variant="contained" color="primary">
            Guardar
          </Button>
          <br />
          <br />
          <br />
          <br />
        </Grid>
      </Grid>
    </>
  );
};
export default UpdateProfileStudent;
