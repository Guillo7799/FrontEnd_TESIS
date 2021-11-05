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
import useSWR, { mutate } from "swr";
import { fetcher } from "@/lib/utils";
import Typography from "@material-ui/core/Typography";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  content: yup.string().required("Ingrese su comentario"),
});

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    marginTop: "5%",
  },
  root: {
    marginTop: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  show: {
    maxWidth: "80%",
    height: "auto",
    backgroundImage: "url(aquí la ruta de la imagen de fondo)",
    margin: "0 auto",
    padding: "0 1%",
    boxShadow: " 5px 5px 0 #AAA",
    borderRadius: "5px",
  },
  root3: {
    minWidth: "150px",
  },
  root4: {
    width: "80%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title2: {
    fontSize: 14,
    width: "80%",
    textAlign: "center",
    margin: "auto",
    marginTop: "2%",
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    marginLeft: "10%",
    maxWidth: "400px",
  },
  card2: {
    marginLeft: "10%",
    maxWidth: "400px",
  },
  main: {
    maxWidth: "100%",
    minWidth: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  form: {
    Width: "80%",
    maxHeigh: "15%",
  },
}));

const Comment = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState("");
  const { data: commentData, error, mutate } = useSWR(`/comments`, fetcher);

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const commentData = { ...data, user };
    console.log("Comment", commentData);
    try {
      const response = await api.post("/comments", commentData);
      console.log("Data Comment", response);
      swal({
        title: "Comentario registrado con éxito!",
        icon: "success",
        button: "Aceptar",
        timer: "3000",
      });
      mutate();
      reset();
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: "Dato inválido",
          icon: "error",
          text: "Error, revise que haya llenado el campo",
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
          text: "Error, hubo un problema con el servidor",
          button: "Aceptar",
        });
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        swal({
          title: "Error",
          icon: "error",
          text: "Error, hubo un problema con la petición al servidor",
          button: "Aceptar",
        });
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Head>
        <title>Foro</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <QuestionAnswerIcon style={{ fontSize: 30, color: "#F77272" }} />
        <h1 style={{ fontSize: 40, color: "#F77272" }}>Foro de Comentarios</h1>
        <hr color="#F77272" width="90%" />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.title2}>
        <h2>
          Conozca la opinión de otros usuarios, comparta su experiencia con la
          plataforma y su punto de vista sobre esta.
        </h2>
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
                  label="Multiline"
                  multiline
                  rows={4}
                  id="text"
                  inputRef={register}
                  label="Ingrese su comentario"
                  name="content"
                  autoComplete="text"
                  style={{ width: "80%", minHeight: "15%" }}
                />
                <Typography color="primary">
                  {errors.content?.message}
                </Typography>
                <br />
                <br />
              </Grid>
              <Grid container item xs={12} sm={12}>
                <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Comentar
                  </Button>
                  <br />
                  <br />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} sm={12} className={classes.title}>
          <img
            src="https://image.flaticon.com/icons/png/512/2593/2593668.png"
            alt="Sugerencia"
            width={175}
            height={175}
          />
          <h3>Necesita iniciar sesión para realizar un comentario</h3>
        </Grid>
      )}
      <Grid item xs={12} className={classes.title}>
        <h2>Comentarios de usuarios</h2>
      </Grid>
      <Grid container>
        <Comments mutate={mutate} />
      </Grid>
      <br />
      <br />
    </>
  );
};

export default Comment;
