import React, { useState } from "react";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { fetcher } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import withAuth from "@/hocs/withAuth";
import SaveIcon from "@material-ui/icons/Save";
import UpdateIcon from "@material-ui/icons/Update";
import { User } from "@/lib/users";

const schema = yup.object().shape({
  location: yup
    .string()
    .required(
      "Ingrese la nueva dirección, recuerde que no debe ser exacta (Referencia)"
    )
    .matches(/^[aA-zZ\s]+$/, "Debe ingresar palabras del alfabeto"),
  description: yup
    .string()
    .required("Ingrese la nueva biografía")
    .matches(/^[aA-zZ\s]+$/, "Debe ingresar palabras del alfabeto"),
  cellphone: yup
    .string("De ingresar un número de teléfono")
    .min(10, "El número debe tener mínimo 10 dígitos")
    .max(10, "El número debe tener 10 dígitos")
    .required("Ingrese el nuevo número de teléfono"),
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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
    backgroundColor: "#F77272",
    size: "large",
  },
}));

const UpdateStudent = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
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
      console.log("Datos Estudiante", response);
      swal({
        title: "Datos Actualizados",
        text: "Por favor para que se reflejen los cambios cierre e inicie sesión nuevamente",
        icon: "success",
        button: "Aceptar",
        timer: "50000",
      });
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
              <Typography
                style={{ color: "red", fontSize: "12px", marginLeft: "3%" }}
              >
                {errors.location?.message}
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={3}
                id="description"
                inputRef={register}
                label="Descripción"
                defaultValue={user.description}
                name="description"
                autoComplete="text"
              />
              <Typography
                style={{ color: "red", fontSize: "12px", marginLeft: "3%" }}
              >
                {errors.description?.message}
              </Typography>
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
              id="cellphone"
              inputRef={register}
              defaultValue={user.cellphone}
              name="cellphone"
              autoComplete="text"
            />
            <Typography
              style={{ color: "red", fontSize: "12px", marginLeft: "3%" }}
            >
              {errors.cellphone?.message}
            </Typography>
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
      <Button style={{ color: "#F77272" }} onClick={handleOpen}>
        Actualizar datos de Perfil
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
