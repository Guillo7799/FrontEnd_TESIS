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

const BusinessCount = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <>
      <Grid container className={classes.root}>
        <Head>
          <title>Cuenta Empresarial</title>
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
              src="https://enciclopediaeconomica.com/wp-content/uploads/2019/01/icono-liderazgo-empresarial.jpg"
              alt="Empresa-imagen"
              width={700}
              height={200}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <h1>Datos del Usuario</h1>
            <br />
            <p>
              <strong>Su cuenta es:</strong> Empresarial
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
                  <strong>Registrar una oferta de prácticas</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  En el apartado de administrar el usuario encontra la
                  funcionalidad de la aplicación, donde podrá realizar una
                  publicación de oferta, llenando los campos que se solicita.
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>Visualización de mis Publicaciones</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El usuario empresarial tendra un espacio donde se muestra ls
                  publicaciones que haya realizado y la opción de eliminarlas.
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>
                    Visualizar postulaciones de usuarios estudiantes
                  </strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  En el partado de administrador se muestra una tabla que
                  contiene los registros de postulantes a las ofertas realizadas
                  por el usuario.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Visualización de perfil-curriculum</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  El usuario empresarial tiene la opción de visualizar el
                  curriculum del postulante con un botón en la tabla de
                  postulaciones que le redirije al curriculum del estudiante, de
                  tal manera que comprueba si es que tiene los conocimientos
                  necesarios para el puesto.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>VCambio de estado de postulación</strong>
                </td>
                <td style={{ textAlign: "left" }}>
                  Una vez revisado el curriculum del estudiante que postula el
                  usuario empresarial puede cambiar el estado de la postulación,
                  lo que permite tener conocimiento al usuario estudiante del
                  estado del mismo.
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

export default withAuth(BusinessCount);
