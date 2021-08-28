import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import { Button, Grid, TextField, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import swal from "sweetalert";
import withAuth from "@/hocs/withAuth";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Comments from "@/components/Comments";
import { useAuth } from "@/lib/auth";

const schema = yup.object().shape({
  text: yup.string().required("Ingresa tu comentario"),
});

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  root: {
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  form: {
    Width: "100%",
    textAlign: "center",
    maxHeigh: "15%",
  },
  button: {
    textAlign: "center",
  },
}));

const Comment = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit, control, errors } = useForm();
  const [name, setName] = useState("");

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const categoryData = { ...data, user };
    console.log("Category", categoryData);
    try {
      const response = await api.post("/categories", categoryData);
      console.log("Data Category", response);
      swal({
        title: "Categoría ingresada",
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ fontSize: 15, color: "black" }}>Registro de categoría</h1>
      </Grid>
      {user ? (
        <Grid container className={classes.root} item xs={12} sm={12}>
          <Grid
            item
            xs={12}
            sm={12}
            style={{
              margin: "auto !important",
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
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
                  id="designation"
                  inputRef={register}
                  label="Ingrese la categoría"
                  name="designation"
                  autoComplete="text"
                  style={{ width: "90%", minHeight: "5%" }}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button type="submit" variant="contained" color="primary">
                  Guardar
                </Button>
                <br />
                <br />
              </Grid>
            </form>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} sm={12} className={classes.title}>
          <img
            src="https://alicorp-prod-medias.s3.amazonaws.com/static-img/files/2019-11/articulo-luz-fria-o-luz-calida/icono-foco.png"
            alt="Sugerencia"
            width={175}
            height={175}
          />
          <h3>Necesita iniciar sesión para registrar una categoría</h3>
        </Grid>
      )}
      <br />
      <br />
    </>
  );
};

export default Comment;
