import React, { useState, useRef } from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { fetcher } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Loading from "@/components/Loading";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import translateMessage from "../constants/messages";
import { Application } from "@/lib/applications";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Routes from "src/constants/routes";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as yup from "yup";
import api from "@/lib/api";
import { Grid, Button, Select, Modal } from "@material-ui/core";

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

const EditStatus = (props) => {
  const { user } = useAuth();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (status) => {
    //setApplication();
    console.log("Data: ", status);
    console.log("IdStatus", props.application.id);

    try {
      const response = await Application.update(props.application.id, status);
      console.log("Response:", response);
      swal({
        title: "Cambio guardado",
        icon: "success",
        button: "Aceptar",
        timer: "15000",
      });
      return response;
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.errors);
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "No se puede registrar el cambio",
          button: "Aceptar",
        });
        Error(error.response.data.errors);
        return Promise.reject(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid style={{ textAlign: "center" }}>
        <h1>Cambio de estado</h1>
      </Grid>
      <Grid>
        <p>
          <strong>
            Recuerde que el estado permitirá conocer al estudiante como está el
            proceso de su postulación.
          </strong>
        </p>
        <p>Pendiente = No ha revisado el Curriculum.</p>
        <p>
          Revisado = Ha revisado el Curriculum pero el postulante no cumple con
          lo que se necesita.
        </p>
        <p>
          Por Contactar = Ha revisado el curriculum y el postulante cumple lo
          solicitado y se pondrá en contacto con él para organizar una
          entrevista.
        </p>
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
            <Grid item xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <Select
                  native
                  name="status"
                  id="status"
                  inputRef={register}
                  variant="outlined"
                  label="Estado"
                  required
                  fullWidth
                >
                  <option value="Pendiente" selected>
                    Pendiente
                  </option>
                  <option value="Revisado">Revisado</option>
                  <option value="Por Contactar">Por Contactar</option>
                </Select>
                <br />
                <br />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Actualizar <SaveIcon style={{ fontSize: 20 }} />
              </Button>
              <br />
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Grid>
          <br />
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
        startIcon={<EditIcon />}
        onClick={handleOpen}
      ></Button>
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
export default EditStatus;
