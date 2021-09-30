import React, { useState } from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import AllPublications from "@/components/AllPublications";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import MiniPostulations from "@/components/MiniPostulations";
import Select from "@material-ui/core/Select";
import createTypography from "@material-ui/core/styles/createTypography";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    marginTop: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

const Publications = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const [filtrar, setFiltrar] = useState("");

  const handleChange = (e) => {
    setFiltrar({
      ...filtrar,
      [e.target.name]: e.target.value,
    });
  };

  console.log("categoria: ", filtrar);

  return (
    <>
      <Head>
        <title>Ofertas</title>
      </Head>
      {user ? (
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.title}>
            <AllInboxIcon style={{ fontSize: 30, color: "#F77272" }} />
            <h1 style={{ fontSize: 40, color: "#F77272" }}>
              Publicaciones de ofertas
            </h1>
            <hr color="#F77272" width="90%" />
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <h2>Postule a la oferta que crea conveniente.</h2>
          </Grid>
          <Grid container style={{ paddingLeft: "10%" }}>
            <Grid item xs={12} sm={4} style={{ height: "500px" }}>
              <MiniPostulations />
            </Grid>
            <Grid item xs={12} sm={8} style={{ textAlign: "center" }}>
              <Grid item xs={12} sm={12} style={{ width: "80%" }}>
                <h3 style={{ marginLeft: "20%" }}>Filtrar Publicaciones: </h3>
                <Select
                  style={{ marginLeft: "12%" }}
                  native
                  name="category_id"
                  id="category_id"
                  variant="outlined"
                  required
                  value={filtrar}
                  onChange={handleChange}
                  fullWidth
                >
                  <option>Ingeniería en Sistemas y carreras afines</option>
                  <option value="1">
                    Ingeniería en Sistemas y carreras afines
                  </option>
                  <option value="2">
                    Ingeniería en Mecánica y carreras afines
                  </option>
                  <option value="3">
                    Ingeniería Química y carreras afines
                  </option>
                  <option value="4">
                    Ingeniería en Electrónica y Control y carreras afines
                  </option>
                  <option value="5">
                    Ingeniería en Eléctrica, Redes y Telecomunicaciones y
                    carreras afines
                  </option>
                  <option value="6">Carreras ligadas a la medicina</option>
                  <option value="7">Derecho</option>
                  <option value="8">Admnistración</option>
                  <option value="9">Marketing</option>
                  <option value="10">Ingeniería Civil</option>
                  <option value="11">Licenciaturas</option>
                  <option value="12">Carreras de Comunicación</option>
                  <option value="13">Carreras Sociales y Humanísticas</option>
                </Select>
              </Grid>
              <AllPublications categoria={filtrar} />
            </Grid>
          </Grid>
          <br />
          <br />
        </Grid>
      ) : (
        <div>
          <img
            src="https://image.flaticon.com/icons/png/512/2622/2622112.png"
            alt="No inicio de sesión"
            width={150}
            height={150}
          />
          <p>Vaya! parece que no ha iniciado sesión</p>
          <br />
        </div>
      )}
    </>
  );
};

export default Publications;
