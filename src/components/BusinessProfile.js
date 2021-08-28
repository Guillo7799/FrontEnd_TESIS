import React, { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import * as yup from "yup";
import MyPublication from "@/components/MyPublications";
import Image from "next/image";
import MenuBusiness from "@/components/MenuBusiness";

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
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    textAlign: "left",
  },
  actions: {
    width: "90%",
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
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
        <h1 style={{ color: "#F77272" }}>Cuenta Empresarial</h1>
        <hr color="#F77272" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4">Información:</Typography>
            <br />
            <br />
            <div style={{ paddingLeft: "5%" }}>
              <Image
                src="/register/working-man.png"
                alt="icono_estudiante"
                width={115}
                height={125}
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
      <Grid container className={classes.actions} item xs={12} sm={12}>
        <MenuBusiness />
      </Grid>
    </>
  );
};

export default withAuth(BusinessProfile);
