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

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("Ingrese su email."),
  password: yup.string().required("Ingrese su clave"),
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
      <Grid container justify="center">
        <Grid item xs={12} className={classes.icon}>
          <Image
            src="/login/key.png"
            alt="icono_login"
            width={100}
            height={110}
          />
        </Grid>
        <br />
        <Grid item xs={12} className={classes.description}>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={6} style={{ maxWidth: "450px" }}>
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
                  <Link href={Routes.REMEMBERPASSWORD} variant="body2">
                    Olvidé la contraseña
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link href={Routes.GENERAL} variant="body2" passHref>
                    <MuiLink>{"¿No tienes cuenta?, Registrarme"}</MuiLink>
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
