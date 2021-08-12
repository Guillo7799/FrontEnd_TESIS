import React from "react";
import useSWR from "swr";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Routes from "../constants/routes";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  table: {
    width: "70%",
  },
  td: {
    width: "15%",
  },
}));

const Administrador = () => {
  const { user } = useAuth;
  const { data, error } = useSWR(`/user`, fetcher);

  if (error) return <div>No se pudo cargar la información del usuario</div>;
  if (!data) return <div>Cargando datos del Administrador...</div>;
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Administrador</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Bienvenido Administrador!</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid item xs={6} sm={6} className={classes.profile1}>
          <h1 style={{ fontSize: 22 }}>Datos del Administrador</h1>
          {/*<div className={classes.image}>{user.credential_number}</div>*/}
          <table className={classes.table} key={user.id}>
            <tr>
              <td className={classes.td}>
                <b>Nombre del administrador</b>
              </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td className={classes.td}>
                <b>Apellido del administrador</b>
              </td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td className={classes.td}>
                <b>Correo</b>
              </td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td className={classes.td}>
                <b>Provincia</b>
              </td>
              <td>{user.province}</td>
            </tr>
            <tr>
              <td className={classes.td}>
                <b>Ciudad</b>
              </td>
              <td>{user.city}</td>
            </tr>
            <tr>
              <td className={classes.td}>
                <b>Description</b>
              </td>
              <td>{user.description}</td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={6} sm={6} className={classes.profile2}></Grid>
      </Grid>
    </>
  );
};

export default Administrador;
