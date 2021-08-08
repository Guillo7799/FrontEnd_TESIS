import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import swal from "sweetalert";
import withAuth from "@/hocs/withAuth";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Comments from "@/components/Comments";

const schema = yup.object().shape({
  text: yup.string().required("Ingresa tu comentario"),
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
    minWidth: "150px",
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
    maxWidth: "100%",
    maxHeigh: "15%",
  },
}));

const Comment = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const [name, setName] = useState("");

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
      <Head>
        <title>Foro</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <QuestionAnswerIcon style={{ fontSize: 30 }} />
        <h1 style={{ fontSize: 40 }}>Foro de Comentarios</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid item xs={12} className={classes.title}>
        <h2>
          Conoce a los otros usuarios, comparte tu experiencia con la plataforma
          y tu punto de vista sobre esta.
        </h2>
      </Grid>
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
                style={{ width: "100%", minHeight: "15%" }}
              />
              <br />
              <br />
            </Grid>
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
                  Comentar
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
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.title}>
        <h2>Commentarios de usuarios</h2>
      </Grid>
      <Grid container>
        <Comments />
      </Grid>
      <br />
      <br />
    </>
  );
};

export default Comment;
