import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "src/constants/routes";
import { Modal, Select } from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { Button, Avatar, Grid, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import swal from "sweetalert";
import withAuth from "@/hocs/withAuth";
import PublicationTip from "@/components/PublicationTip";
import MyPublication from "@/components/MyPublications";

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
  root: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  root2: {
    maxWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title2: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    textAlign: "left",
  },
  submain: {
    paddingLeft: 150,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const BusinessProfile = () => {
  const { user } = useAuth();
  const { register, handleSubmit, control, errors } = useForm();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const publicationData = { ...data, user };
    console.log("Publication", publicationData);
    try {
      const response = await api.post("/publications", publicationData);
      console.log("Data Publication", response);
      swal({
        title: "Oferta registrada!",
        icon: "success",
        button: "Aceptar",
        timer: "3000",
      });
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          button: "Aceptar",
        });
        console.log(error.response.data);
        return Promise.reject(error.response);
        // return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <>
      <Head>
        <title>Perfil Empresa</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Cuenta Empresarial</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid container item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Información:</Typography>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Avatar
                image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${user.image}`}
                alt="Foto de perfil"
                className={classes.large}
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
          </Grid>
          {/* 
          <Grid item xs={1}>
            <hr width="1" size="750" />
          </Grid>*/}
          <Grid className={classes.submain} item xs={12} sm={6} spacing={4}>
            <h3>MIS PUBLICACIONES</h3>
            <br />
            <MyPublication />
          </Grid>
        </Grid>
        <Grid container item sx={12} sm={12}>
          <br />
          <br />
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
            <h1>Nueva Publicación de oferta</h1>
            <hr color="black" width="90%" />
            <PublicationTip />{" "}
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
            <br />
            <br />
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="career"
                  inputRef={register}
                  label="Carrera de interés"
                  name="career"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Multiline"
                  multiline
                  rows={4}
                  id="description"
                  inputRef={register}
                  label="Descripción"
                  name="description"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="hours"
                  inputRef={register}
                  label="Horas a ofertar"
                  name="hours"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  id="date"
                  inputRef={register}
                  label=""
                  name="date"
                  autoComplete="date"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12}>
                <Select
                  native
                  name="category_id"
                  id="category_id"
                  inputRef={register}
                  variant="outlined"
                  required
                  fullWidth
                >
                  <option selected>Seleccione una categoría...</option>
                  <option value="7">Carreras de Ingeniería</option>
                  <option value="6">Carreras de Ciencias</option>
                  <option value="5 Superior">
                    Carreras tecnológicas superiores
                  </option>
                  <option value="1">Enfermería</option>
                  <option value="2">Medicina</option>
                  <option value="3">Derecho y afines</option>
                  <option value="4">Idiomas</option>
                </Select>
              </Grid>
              <br />
              <Grid container item xs={12} sm={12}>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  style={{ textAlign: "right", paddingRight: 30 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Publicar
                  </Button>
                  <br />
                  <br />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  style={{ textAlign: "left", paddingLeft: 30 }}
                >
                  <Link href={Routes.HOME} passHref>
                    <MuiLink>
                      <Button variant="contained" color="primary">
                        Cancelar
                      </Button>
                    </MuiLink>
                  </Link>
                </Grid>
              </Grid>
            </form>
            <br />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BusinessProfile;
