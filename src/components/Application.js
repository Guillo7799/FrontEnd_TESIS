import React, { useEffect, useRef, useState } from "react";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import SendIcon from "@material-ui/icons/Send";
import Typography from "@material-ui/core/Typography";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const schema = yup.object().shape({
  name: yup.string().required("Ingrese su nombre"),
  last_name: yup.string().required("Ingrese su apellido"),
  message: yup.string().required("Es necesario un mensaje de postulación"),
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#F77272",
  },
}));

const Application = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState("");

  const handleOpen = () => {
    setOpen(true);
    console.log("PublicationData", props.application);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    const newApplication = {
      name: data.name,
      last_name: data.last_name,
      message: data.message,
      publication_id: data.publication_id,
    };
    const formData = new FormData();
    formData.append("name", newApplication.name);
    formData.append("last_name", newApplication.last_name);
    formData.append("message", newApplication.message);
    formData.append("publication_id", newApplication.publication_id);

    console.log("formData", formData);
    console.log("Nueva Postulación: ", newApplication);
    try {
      const response = await api.post("/applications", formData);
      console.log("Data Curriculum", response);
      swal({
        title: "Solicitud Envíada",
        text: "Su solicitud pasa a revisión por parte de la empresa, ellos revisarán su curriculum, si cumple con los requisitos, se pondrán en contacto con usted para continuar con el proceso",
        icon: "success",
        button: "Aceptar",
        timer: "15000",
      });
      reset();
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "Hubo un error, revise que haya llenado bien todos los campos",
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

  const body = (
    <div style={modalStyle} className={classes.paper} key={user.id}>
      <Grid style={{ textAlign: "center" }}>
        <h1>Formulario de Postulación</h1>
      </Grid>
      <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
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
                id="name"
                inputRef={register}
                label="Nombre"
                defaultValue={user.name}
                name="name"
                autoComplete="text"
              />
              <Typography color="primary">{errors.name?.message}</Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                inputRef={register}
                label="Apellido"
                defaultValue={user.last_name}
                name="last_name"
                autoComplete="text"
              />
              <Typography color="primary">
                {errors.last_name?.message}
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
              rows={3}
              id="message"
              inputRef={register}
              label="Mensaje descriptivo de solicitud"
              name="message"
              autoComplete="text"
            />
            <Typography color="primary">{errors.message?.message}</Typography>
            <br />
          </Grid>
          <Grid container item xs={12} sm={12}>
            <Grid item xs={3} sm={3}></Grid>
            <Grid item xs={6} sm={6}>
              <img
                src="data:image/png;base64,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"
                alt="Imagen-postulacion"
                width={50}
                height={50}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="publication_id"
                type="hidden"
                defaultValue={props.application}
                inputRef={register}
                name="publication_id"
                autoComplete="text"
              />
              <br />
              <br />
            </Grid>
            <Grid item xs={3} sm={3}></Grid>
          </Grid>
          <br />
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon style={{ fontSize: "large" }} />}
              className={classes.submit}
            >
              Enviar
            </Button>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button onClick={handleClose}>Cancelar</Button>
          </Grid>
        </form>
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
        startIcon={<DragIndicatorIcon />}
        onClick={handleOpen}
      >
        Postular
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

export default Application;
