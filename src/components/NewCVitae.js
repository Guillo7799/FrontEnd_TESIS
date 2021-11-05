import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import { useRouter } from "next/router";
import SaveIcon from "@material-ui/icons/Save";
import Typography from "@material-ui/core/Typography";
import Routes from "../constants/routes";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import { width } from "@mui/system";
import translateMessage from "../constants/messages";

const schema = yup.object().shape({
  university: yup.string().required("Ingrese la Universidad donde estudia"),
  career: yup.string().required("Ingrese la carrera que sigue"),
  language: yup.string().required("Ingrese el idioma extranjero"),
  level_language: yup.string().required("Ingrese el nivel del idioma"),
  habilities: yup.string().required("Ingrese su habilidades"),
  certificates: yup.string().required("Ingrese sus certificados"),
  highschool_degree: yup
    .string()
    .required("Ingrese su título de segundo grado (Secundaria)"),
  work_experience: yup.string().required("Ingrese su experiencia laboral"),
  image: yup.string().required("Seleccione su fotode perfil"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    height: "90%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    //margin: theme.spacing(1),
    backgroundColor: "#F77272",
  },
  message: {
    textAlign: "center",
    marginTop: "20%",
    height: "500px",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
    marginTop: 15,
  },
}));

const CurriculumByStudent = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  const [open, setOpen] = React.useState(false);
  const { data, error } = useSWR(`/users/curriculum/${user.id}`, fetcher);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    const newCurriculum = {
      university: data.university,
      career: data.career,
      language: data.language,
      level_language: data.level_language,
      habilities: data.habilities,
      certificates: data.certificates,
      highschool_degree: data.highschool_degree,
      work_experience: data.work_experience,
      image: image,
    };
    const formData = new FormData();
    formData.append("university", newCurriculum.university);
    formData.append("career", newCurriculum.career);
    formData.append("language", newCurriculum.language);
    formData.append("level_language", newCurriculum.level_language);
    formData.append("habilities", newCurriculum.habilities);
    formData.append("certificates", newCurriculum.certificates);
    formData.append("highschool_degree", newCurriculum.highschool_degree);
    formData.append("work_experience", newCurriculum.work_experience);
    formData.append("image", newCurriculum.image);

    console.log("formData", formData);
    console.log("Nuevo Curriculum", newCurriculum);
    try {
      const response = await api.post("/cvitaes", formData);
      console.log("Data Curriculum", response);
      swal({
        title: "Curriculum Registrado",
        icon: "success",
        button: "Aceptar",
        timer: "3000",
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

  const handleImage = (imageFile) => {
    setImage(imageFile);
    console.log("image", imageFile);
  };

  return (
    <>
      <Head>
        <title>Registro de Curriculum</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>Curriculum</h1>
        <hr color="#F77272" width="90%" />
      </Grid>

      {data ? (
        <Grid
          item
          xs={12}
          sm={12}
          style={{ textAlign: "center", height: "90%" }}
        >
          <h1 style={{ textAlign: "left" }}>Formulario de Curriculum</h1>
          <br />
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
                  id="university"
                  inputRef={register}
                  label="¿En qué universidad estudia?"
                  name="university"
                  autoComplete="text"
                />
                <Typography color="primary">
                  {errors.university?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="career"
                  inputRef={register}
                  label="¿Qué carrera estudia?"
                  name="career"
                  autoComplete="text"
                />
                <Typography color="primary">
                  {errors.career?.message}
                </Typography>
                <br />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Multiline"
                  id="language"
                  inputRef={register}
                  label="Idiomas"
                  name="language"
                  autoComplete="text"
                />
                <Typography color="primary">
                  {errors.language?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Multiline"
                  id="level_language"
                  inputRef={register}
                  label="Nivel de los idiomas"
                  name="level_language"
                  autoComplete="text"
                />
                <Typography color="primary">
                  {errors.level_language?.message}
                </Typography>
                <br />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Multiline"
                multiline
                rows={2}
                id="habilities"
                inputRef={register}
                label="Habilidades que posee"
                name="habilities"
                autoComplete="text"
              />
              <Typography color="primary">
                {errors.habilities?.message}
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Multiline"
                multiline
                rows={3}
                id="certificates"
                inputRef={register}
                label="Certificados que posee"
                name="certificates"
                autoComplete="text"
              />
              <Typography color="primary">
                {errors.certificates?.message}
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="highschool_degree"
                inputRef={register}
                label="¿Qué título de segundo grado tiene?"
                name="highschool_degree"
                autoComplete="text"
              />
              <Typography color="primary">
                {errors.highschool_degree?.message}
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Multiline"
                multiline
                rows={3}
                id="work_experience"
                inputRef={register}
                label="¿Qué experiencia laboral tiene?"
                name="work_experience"
                autoComplete="text"
              />
              <Typography color="primary">
                {errors.work_experience?.message}
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12}>
              <label>
                Subir foto:
                <input
                  type="file"
                  fullWidth
                  name="image"
                  id="image"
                  ref={register}
                  onChange={(e) => handleImage(e.target.files[0])}
                />
                <Typography color="primary">{errors.image?.message}</Typography>
              </label>
            </Grid>
            <br />
            <Grid container item xs={12} sm={12} spacing={5}>
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Guardar <SaveIcon style={{ fontSize: 20 }} />
                </Button>
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <Link href={Routes.GLOBALPROFILE} passHref>
                  <MuiLink>
                    <Button color="primary" variant="contained">
                      Cancelar
                    </Button>
                  </MuiLink>
                </Link>
              </Grid>
            </Grid>
          </form>
          <br />
          <br />
        </Grid>
      ) : (
        <>
          <div className={classes.message}>
            <img
              src="https://st3.depositphotos.com/16244452/34008/v/600/depositphotos_340081402-stock-illustration-palm-print-cancelled-black-line.jpg"
              alt="No inicio de sesión"
              width={150}
              height={150}
            />
            <h2>Usted ya cuenta con un curriculum registrado</h2>
            <Link href={Routes.GLOBALPROFILE} passHref>
              <MuiLink>
                <Button color="primary" variant="contained">
                  Regresar
                </Button>
              </MuiLink>
            </Link>
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

export default withAuth(CurriculumByStudent);
