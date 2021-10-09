import React, { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";
import * as yup from "yup";
import MyPublication from "@/components/MyPublications";
import MenuBusiness from "@/components/MenuBusiness";
import Button from "@material-ui/core/Button";
import Info from "@/components/BusinessInfo";

const schema = yup.object().shape({
  text: yup.string().required("Ingresa tu oferta de prácticas"),
});

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
    marginTop: 15,
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
      <br />
      <br />
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "15%" }}>
          <Typography variant="h4">Información:</Typography>
          <br />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
          <Typography variant="h4">Mis Publicaciones:</Typography>
          <br />
        </Grid>
      </Grid>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Info />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5} spacing={4} container>
            <Grid item xs={12} sm={12}></Grid>

            <MyPublication />
            <br />
            <Grid item xs={12} sm={12} style={{ marginLeft: "25%" }}>
              <Button color="primary" variant="contained">
                Gestionar
              </Button>
            </Grid>
            <br />
            <br />
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
