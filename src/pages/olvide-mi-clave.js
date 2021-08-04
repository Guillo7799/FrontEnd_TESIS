import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../lib/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import Head from "next/head";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo válido")
    .required("Ingresa tu correo electrónico"),
});

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  buttonWrapper: {
    textAlign: "center",
  },
}));
const SendPasswordResetEmailPage = () => {
  const { sendPasswordResetEmail } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSendEmail = async ({ email }) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(email);
      setLoading(false);
      enqueueSnackbar(
        "Te hemos enviado un correo con instrucciones para restablecer tu clave.",
        {
          variant: "success",
        }
      );
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        enqueueSnackbar(error.response.data.status, { variant: "error" });

        return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        enqueueSnackbar("Ocurrió un error al realizar la petición.", {
          variant: "error",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        enqueueSnackbar("Ocurrió un error desconocido :(", {
          variant: "error",
        });
      }
      console.log(error.config);
    }
  };

  return (
    <Grid container justify="center">
      <Head>
        <title>Recuperar Contraseña</title>
      </Head>
      <Grid item xs={6} style={{ height: "600px" }}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSendEmail)}
        >
          <Grid container spacing={2} justify="center" alignItems="center">
            <h1>Recordar contraseña</h1>
            <p>
              Prácticas al día enviará un correo al email que especifiques a
              continuación, por favor si no encuentras el correo, revísalo en
              correo no deseado.
            </p>
            <Grid xs={12} item>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Correo electrónico"
                inputRef={register}
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid xs={12} item className={classes.buttonWrapper}>
              <Button
                name="submit"
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SendPasswordResetEmailPage;
