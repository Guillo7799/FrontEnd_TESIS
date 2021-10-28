import React from "react";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import withoutAuth from "@/hocs/withoutAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/Login.module.css";
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Routes from "../constants/routes";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("Ingrese su email."),
  password: yup
    .string()
    .required("Ingrese su clave")
    .min(6, "La contraseña debe tener por lo menos 6 caracteres"),
});

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  buttonWrapper: {
    textAlign: "center",
  },
  icon: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
}));

const Login = () => {
  const { login } = useAuth();
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("data", data);
    try {
      const userData = await login(data);
      setLoading(false);
      swal({
        title: "¡Bienvenido!",
        button: "Aceptar",
        timer: "2000",
      });
      router.push(Routes.GLOBALPROFILE);
      console.log("userData", userData);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(error.response.message);
        console.log(error.response);
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
      setLoading(false);
    }
  };
  return (
    <div className={styles.login}>
      <Head>
        <title>Inicio de Sesión</title>
      </Head>
      <Grid container justify="center" style={{ height: "650px" }}>
        <Grid item xs={12} className={classes.icon}>
          <br />
          <br />
          <Image
            src="/login/key.png"
            alt="icono_login"
            width={100}
            height={110}
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.description}>
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} style={{ maxWidth: "500px" }}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justify="center" alignItems="center">
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
              <Grid xs={12} item>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Contraseña"
                  inputRef={register}
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
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
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link href={Routes.GENERAL} passHref>
                    <MuiLink>
                      <p style={{ fontFamily: "Roboto", marginLeft: 15 }}>
                        ¿No tiene cuenta?, Registrarme
                      </p>
                    </MuiLink>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default withoutAuth(Login);
