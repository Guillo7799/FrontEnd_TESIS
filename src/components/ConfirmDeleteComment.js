import React from "react";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Modal } from "@material-ui/core";
import { useForm } from "react-hook-form";
import api from "@/lib/api";
import ErrorIcon from "@material-ui/icons/Error";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import translateMessage from "../constants/messages";

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

const Confirm = (props) => {
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

  console.log("CommentValue", props.comment.content);
  const onSubmit = async (data) => {
    console.log("idComment: ", data);
    try {
      const response = await api.delete(`/comments/${props.comment.id}`);
      swal({
        title: "Comentario eliminado",
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
          text: "No se pudo eliminar el comentario",
          button: "Aceptar",
        });
        console.log(error.response.data);
        Error(error.response.data);
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
        <h1>Está seguro que desdea eliminar el comentario: </h1>
        <p>{props.comment.content}</p>
      </Grid>
      <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
        <br />
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item xs={5} sm={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ErrorIcon style={{ fontSize: "large" }} />}
              className={classes.submit}
            >
              Si, eliminar
            </Button>
            <br />
            <br />
          </Grid>
          <Grid item xs={5} sm={12}>
            <Button onClick={handleClose}>Cancelar</Button>
          </Grid>
        </form>
        <br />
      </Grid>
    </div>
  );

  return (
    <>
      <div>
        <IconButton
          color="default"
          className={classes.button}
          onClick={handleOpen}
        >
          <DeleteIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
};

export default Confirm;
