import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
import SaveIcon from "@material-ui/icons/Save";
import BackupIcon from "@material-ui/icons/Backup";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const schema = yup.object().shape({
  text: yup.string().required("Ingrese su curriculum"),
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
}));

const Curriculum = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [image, setImage] = React.useState(null);
  const fileInputRef = useRef();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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
      image: data.image[0],
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

  const handleImage = (imageFile) => {
    setImage(imageFile);
    console.log("image", imageFile);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1>Formulario de Curriculum</h1>
      <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
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
              <br />
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
              <br />
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
                multiline
                rows={3}
                id="language"
                inputRef={register}
                label="Idiomas"
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
                label="Multiline"
                multiline
                rows={3}
                id="level_language"
                inputRef={register}
                label="Nivel de los idiomas"
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
              rows={3}
              id="certificates"
              inputRef={register}
              label="Certificados que posee"
              name="certificates"
              autoComplete="text"
            />
            <br />
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
              rows={3}
              id="work_experience"
              inputRef={register}
              label="¿Qué experiencia laboral tiene?"
              name="work_experience"
              autoComplete="text"
            />
            <br />
            <br />
          </Grid>
          <Grid item xs={12}>
            {/* 
            <Button component="label" variant="contained" color="primary">
              Seleccionar Foto <BackupIcon style={{ fontSize: 20 }} />
              <input
                type="file"
                fullWidth
                name="image"
                id="image"
                ref={register}
                onChange={(e) => handleImage(e.target.files[0])}
                hidden
              />
            </Button>*/}
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
            </label>
          </Grid>
          <br />
          <Grid container item xs={12} sm={12} spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ textAlign: "right", paddingRight: 30 }}
            >
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
            <Grid item xs={12} sm={6}>
              <Button onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Grid>
        </form>
        <br />
        <br />
      </Grid>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<NoteAddIcon />}
        onClick={handleOpen}
      >
        Llenar Curriculum
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default withAuth(Curriculum);