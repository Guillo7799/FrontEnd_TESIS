import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Button from "@material-ui/core/Button";
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

const UpdateProfileBusiness = () => {
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
            src="/profile/avatarB.jpg"
            alt="avatar_business"
            width={250}
            height={200}
            marginLeft="45%"
          />
        </Grid>
        <Grid className={classes.personal} item xs={6} spacing={4}>
          <br />
          <label>Nombre de la Empresa: Dicomsa Construcciones</label>
          <br />
          <br />
          <label>RUC: 1234567890123</label>
          <br />
          <br />
          <label>Correo: dicomsa@construcciones.com</label>
          <br />
          <br />
          <label>Edad de la empresa: </label>
          <input
            type="text"
            name="province"
            size="30"
            placeholder="Ingrese la edad en años"
          />
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
          <label>Provincia: </label>
          <br />
          <br />
          <label>Dirección: </label>
          <br />
          <br />
          <label>Descripción: </label>
          <br />
          <br />
        </Grid>
        <Grid item xs={1}>
          <hr width="1" size="250" />
        </Grid>
        <Grid item xs={7} className={classes.dates2} spacing={4}>
          <br />
          <br />
          <input
            type="text"
            name="province"
            size="70"
            placeholder="Escriba la provincia donde se encuentra"
          />
          <br />
          <br />
          <input
            type="text"
            name="province"
            size="70"
            placeholder="Escriba la dirección donde está ubicada la empresa"
          />
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={7}
            placeholder="¿Una descripción de la empresa?"
          />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <br />
          <br />
          <Link href={Routes.BUSINESSP} passHref>
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
export default UpdateProfileBusiness;
