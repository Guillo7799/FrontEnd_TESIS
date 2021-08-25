import React, { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "src/constants/routes";
import { Button, Avatar, Grid, TextField, Typography } from "@material-ui/core";
import * as yup from "yup";
import withAuth from "@/hocs/withAuth";
import MyPublication from "@/components/MyPublications";
import ApplicationsByPostulation from "@/components/ApplicationsByPostulation";
import NewPublication from "@/components/NewPublication";

const schema = yup.object().shape({
  text: yup.string().required("Ingresa tu oferta de prácticas"),
});

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
  root2: {
    maxWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title2: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    textAlign: "left",
  },
}));

const BusinessProfile = () => {
  const { user } = useAuth();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Perfil Empresa</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Cuenta Empresarial</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4">Información:</Typography>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Avatar
                image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${user.image}`}
                alt="Foto de perfil"
                className={classes.large}
              />
            </div>
            <br />
            <br />
            <Typography varian="h6">
              <strong>Nombre:</strong> {user.name}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Apellido:</strong> {user.last_name}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Correo electronico:</strong> {user.email}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Celular:</strong> {user.cellphone}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Provincia:</strong> {user.province}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Ciudad:</strong> {user.city}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Biografía:</strong> {user.description}
            </Typography>
            <br />
            <Typography varian="h6">
              <strong>Nombre de la Empresa:</strong> {user.business_name}
            </Typography>
            <br />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5} spacing={4}>
            <h3 style={{ paddingLeft: 75 }}>MIS PUBLICACIONES</h3>
            <br />
            <MyPublication />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <NewPublication />
      </Grid>
      <Grid>
        <ApplicationsByPostulation />
      </Grid>
    </>
  );
};

export default withAuth(BusinessProfile);
