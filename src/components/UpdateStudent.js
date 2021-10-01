import React, { useState } from "react";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import withAuth from "@/hocs/withAuth";
import SaveIcon from "@material-ui/icons/Save";
import UpdateIcon from "@material-ui/icons/Update";
import { User } from "@/lib/users";

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
    backgroundColor: "#F77272",
    size: "large",
  },
}));

const UpdateStudent = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  console.log("UserData", props);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await User.update(user.id, data);
      console.log("Dato Estudiante", response);
      swal({
        title: "Datos actualizado",
        icon: "success",
        button: "Aceptar",
        timer: "1500",
      });
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "No se pudo actualizar los datos",
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
    <div style={modalStyle} className={classes.paper}>
      <Grid style={{ textAlign: "center" }}>
        <h1>Actualización de datos</h1>
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
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                inputRef={register}
                label="Dirección"
                defaultValue={user.location}
                name="location"
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
                id="description"
                inputRef={register}
                label="Descripción"
                defaultValue={user.description}
                name="description"
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
              label="Teléfono"
              multiline
              rows={3}
              id="cellphone"
              inputRef={register}
              defaultValue={user.cellphone}
              name="cellphone"
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
              Guardar
            </Button>
            <br />
            <br />
          </Grid>
        </form>
        <br />
      </Grid>
      <Button onClick={handleClose}>Lo tengo</Button>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<UpdateIcon />}
        onClick={handleOpen}
      >
        Actualizar datos
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

export default withAuth(UpdateStudent);
