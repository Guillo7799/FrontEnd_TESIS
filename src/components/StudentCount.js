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

const StudentCount = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <>
      <Grid container className={classes.root}>
        <Head>
          <title>Cuenta Estudiantil</title>
        </Head>
        <Grid className={classes.subheader}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#F77272" }}>Información de Cuenta</h1>
          </Grid>
          <hr color="#F77272" width="100%" />
        </Grid>
        <Grid container item xs={12} sm={12} className={classes.info}>
          <Grid container item sx={12} sm={2} className={classes.image}>
            <img
              src="https://cdn.icon-icons.com/icons2/1465/PNG/512/130manstudent2_100617.png"
              alt="Estudiantil-imagen"
              width={175}
              height={175}
              style={{ marginLeft: "25%" }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <h1>Datos del Usuario</h1>
            <br />
            <p>
              <strong>Su cuenta es:</strong> Estudiantil
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
          <Grid item xs={12} sm={5} style={{ marginLef: "5%" }}>
            <h1>Acciones permitidas</h1>
            <br />
            <table class="default">
              <tr>
                <th style={{ color: "#F77272" }}>Acción</th>
                <th style={{ color: "#F77272" }}>Descripción</th>
              </tr>
              <tr>
                <td>
                  <strong>Registrar curriculum</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El usuario podrá subir un curriculum que permitirá mejorar su
                  perfil, al momento de ser revisado por una empresa.
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>Visualización de mis postulaciones</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  En el apartado de administrar se le muestra al usuario una
                  tabla con todas las postulaciones a ofertas que ha realizado,
                  junto con el detalle.
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>Visualizar ofertas</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El usuario puede revisar todas las publicaciones realizadas
                  por usuarios con cuenta empresarial.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Postulación a oferta</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  En el caso de encontrar una publicación que le interese al
                  estudiante, podrá postular a ella llenando un pequeño
                  formulario, que contiene en sí un mensaje a mostrar a la
                  empresa para solicitar el puesto de practicante.
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

export default withAuth(StudentCount);
