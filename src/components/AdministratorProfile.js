import React from "react";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Head from "next/head";
import Information from "@/components/InfoAdmin";
import CommentsTable from "@/components/CommentsTable";
import NewCategory from "@/components/NewCategory";
import NewUserAdmin from "@/components/NewUsersAdmin";

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
  mainactions: {
    width: "80%",
  },
  actions: {
    width: "100%",
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
  },
}));

const Administrador = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Administrador</title>
      </Head>
      <Grid item xs={12} sm={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>¡Bienvenido Administrador!</h1>
        <hr color="#F77272" width="90%" />
      </Grid>
      <Grid container className={classes.main} item xs={12} sm={12}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Information />
          </Grid>
          {/*}
          <Grid item xs={12} sm={5}>
            <NewCategory />
          </Grid>*/}
        </Grid>
        <Grid container className={classes.actions} item xs={12} sm={12}>
          <Grid item xs={12} sm={12} style={{ width: "100%" }}>
            <h2 style={{ color: "#094275" }}>
              Visualización y eliminación de comentario
            </h2>
          </Grid>
          <CommentsTable />
        </Grid>
        <Grid container className={classes.actions} item xs={12} sm={12}>
          <Grid item xs={12} sm={12} style={{ width: "100%" }}>
            <h2 style={{ color: "#094275" }}>
              Registro de nuevo Usuario Estudiante/Empresa
            </h2>
          </Grid>
          <NewUserAdmin />
        </Grid>
        <br />
        <br />
      </Grid>
    </>
  );
};

export default Administrador;
