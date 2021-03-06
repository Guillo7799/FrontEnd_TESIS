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
    height: "100%",
  },
  nouser: {
    textAlign: "center",
    marginTop: "20%",
    height: "500px",
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
          <Grid container style={{ paddingLeft: "10%", minHeight: "1000px" }}>
            <Grid item xs={12} sm={4} style={{ height: "500px" }}>
              <MiniPostulations />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              style={{
                textAlign: "center",
                height: "900px",
                overflowY: "scroll",
              }}
            >
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
                  <option value="">Seleccione una categor??a</option>
                  <option value="1">
                    Ingenier??a en Sistemas y carreras afines
                  </option>
                  <option value="2">
                    Ingenier??a en Mec??nica y carreras afines
                  </option>
                  <option value="3">
                    Ingenier??a Qu??mica y carreras afines
                  </option>
                  <option value="4">
                    Ingenier??a en Electr??nica y Control y carreras afines
                  </option>
                  <option value="5">
                    Ingenier??a en El??ctrica, Redes y Telecomunicaciones y
                    carreras afines
                  </option>
                  <option value="6">Carreras ligadas a la medicina</option>
                  <option value="7">Derecho</option>
                  <option value="8">Administraci??n</option>
                  <option value="9">Marketing</option>
                  <option value="10">Ingenier??a Civil</option>
                  <option value="11">Licenciaturas</option>
                  <option value="12">Carreras de Comunicaci??n</option>
                  <option value="13">Carreras Sociales y Human??sticas</option>
                </Select>
              </Grid>
              <AllPublications categoria={filtrar} />
            </Grid>
          </Grid>
          <br />
          <br />
        </Grid>
      ) : (
        <>
          <div className={classes.nouser}>
            <img
              src="https://image.flaticon.com/icons/png/512/2622/2622112.png"
              alt="No inicio de sesi??n"
              width={150}
              height={150}
            />
            <h2>Vaya! parece que no ha iniciado sesi??n</h2>
            <div></div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      )}
    </>
  );
};

export default Publications;
