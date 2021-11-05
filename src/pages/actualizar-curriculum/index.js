import React, { useState } from "react";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import { useRouter } from "next/router";
import translateMessage from "../../constants/messages";
import withAuth from "@/hocs/withAuth";
import SaveIcon from "@material-ui/icons/Save";
import Routes from "src/constants/routes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CVitae } from "@/lib/cvitaes";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: "90%",
    minWidth: "80%",
    minHeight: "900px",
    maxHeight: "100%",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
    marginTop: 15,
  },
  form: {
    marginTop: "5%",
  },
}));

const UpdateCurriculum = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { data, error } = useSWR(`/users/curriculum/${user.id}`, fetcher);
  console.log("Datos del curriculum", data[0]);

  if (error) return <div>No se pudo cargar los datos de su curriculum</div>;
  if (!data) return <div>Cargando Curriculum...</div>;
  // render data

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await CVitae.update(data);
      console.log("Datos de Curriculum", response);
      swal({
        title: "Datos actualizados",
        icon: "success",
        button: "Aceptar",
        timer: "1500",
      });
      router.push(Routes.GLOBALPROFILE);
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: "Datos inválidos",
          icon: "error",
          text: "Error, revise que haya llenado todos los campos",
          button: "Aceptar",
        });
        console.log(error.response.data);
        return Promise.reject(error.response);
        // return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        swal({
          title: "Error",
          icon: "error",
          text: "Hubo un problema con el servidor",
          button: "Aceptar",
        });
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        swal({
          title: "Error",
          icon: "error",
          text: "Hubo un problema con la petición al servidor",
          button: "Aceptar",
        });
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <>
      <Head>
        <title>Actualizar Curriculum</title>
      </Head>
      {data[0] ? (
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.root}
          style={{ textAlign: "center" }}
        >
          <Grid item xs={12} className={classes.title}>
            <h1 style={{ color: "#F77272" }}>
              Actualización de datos de curriculum
            </h1>
            <hr color="#F77272" width="90%" />
            <p>
              Está permitida la actualización de ciertos datos del curriculum
            </p>
          </Grid>
          <br />
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container item xs={12} sm={12} spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="language"
                  inputRef={register}
                  label="Idioma"
                  defaultValue={data[0].language}
                  name="language"
                  autoComplete="text"
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="level_language"
                  inputRef={register}
                  label="Nivel de Idioma"
                  defaultValue={data[0].level_language}
                  name="level_language"
                  autoComplete="text"
                />
                <br />
                <br />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                label="Habilidades"
                multiline
                rows={4}
                id="habilities"
                inputRef={register}
                defaultValue={data[0].habilities}
                name="habilities"
                autoComplete="text"
              />
              <br />
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                label="Certificados"
                multiline
                rows={4}
                id="certificates"
                inputRef={register}
                defaultValue={data[0].certificates}
                name="certificates"
                autoComplete="text"
              />
              <br />
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                label="Experiencia Laboral"
                multiline
                rows={4}
                id="work_experience"
                inputRef={register}
                defaultValue={data[0].work_experience}
                name="work_experience"
                autoComplete="text"
              />
              <br />
              <br />
            </Grid>
            <br />
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SaveIcon style={{ fontSize: "large" }} />}
                className={classes.submit}
              >
                Actualizar
              </Button>
              <br />
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Link href={Routes.GLOBALPROFILE} passHref>
                <MuiLink>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowBackIcon style={{ fontSize: "large" }} />}
                    className={classes.submit}
                  >
                    Regresar
                  </Button>
                </MuiLink>
              </Link>
              <br />
              <br />
            </Grid>
          </form>
          <br />
        </Grid>
      ) : (
        <>
          <div>No existen registros de un curriculum</div>
        </>
      )}
    </>
  );
};

export default withAuth(UpdateCurriculum);
