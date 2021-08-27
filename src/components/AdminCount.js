import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100%",
    maxWidth: "100%",
  },
  subheader: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  table: {
    minWidth: 650,
  },
  image: { textAlign: "center" },
  info: {
    height: "100%",
    maxWidth: "100%",
    textAlign: "center",
    marginTop: "2%",
  },
}));

const AdminCount = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <>
      <Grid container className={classes.root}>
        <Head>
          <title>Cuenta Administrativa</title>
        </Head>
        <Grid className={classes.subheader}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#F77272" }}>Información de Cuenta</h1>
          </Grid>
          <hr color="#F77272" width="100%" />
        </Grid>
        <Grid container item xs={12} sm={12} className={classes.info}>
          <Grid container item sx={12} sm={1} className={classes.image}>
            <img
              src="https://image.flaticon.com/icons/png/512/2942/2942813.png"
              alt="Admin-imagen"
              width={175}
              height={175}
              style={{ marginLeft: "25%" }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <h1>Datos del Administrador</h1>
            <br />
            <p>
              <strong>Su cuenta es:</strong> Administrativa
            </p>
            <p>
              <br />
              <strong>Nombre de usuario:</strong> {user.name}
            </p>
            <p>
              <br />
              <strong>Apellido de usuario:</strong> {user.last_name}
            </p>
            <p>
              <br />
              <strong>Correo:</strong> {user.email}
            </p>
            <p>
              <br />
              <strong>Teléfono:</strong> {user.cellphone}
            </p>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginLef: "5%" }}>
            <h1>Acciones permitidas</h1>
            <br />
            <table class="default">
              <tr>
                <th style={{ color: "#F77272" }}>Acción</th>
                <th style={{ color: "#F77272" }}>Descripción</th>
              </tr>
              <tr>
                <td>
                  <strong>Ingresar nueva categoría</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  En el apartado de administrar el usuario puede ingresar nuevas
                  categorías de carreras para las futuras publicaciones de
                  usuario empresariales
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>Registrar usuario estudiante</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El administrador llena un formulario con los datos de un nuevo
                  usuario con cuenta estudiantil
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>Registrar usuario empresa</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El administrador llena un formulario con los datos de un nuevo
                  usuario con cuenta empresarial
                </td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
};

export default withAuth(AdminCount);
