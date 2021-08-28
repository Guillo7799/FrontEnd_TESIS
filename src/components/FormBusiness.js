import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/auth";
import styles from "@/styles/Login.module.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Routes from "../constants/routes";
import swal from "sweetalert";
import SaveIcon from "@material-ui/icons/Save";
import Image from "next/image";

const schema = yup.object().shape({
  name: yup.string().required("Ingresa tu nombre"),
  last_name: yup.string().required("Ingresa tu apellido"),
  email: yup
    .string()
    .email("Ingresa un email válido")
    .required("Ingresa tu email."),
  password: yup.string().required("Ingresa la contraseña"),
  password_confirmation: yup
    .string()
    .required("Falta la confirmación de la contraseña"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: "-webkit-fill-available",
  },
  icon: {
    textAlign: "center",
  },
}));

const BusinessRegister = () => {
  const { businessregister: doBusinessRegister } = useAuth();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [image, setImage] = React.useState(null);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    password_confirmation: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const onSubmit = async (data) => {
    console.log("data", data);

    const newUser = {
      name: data.name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      province: data.province,
      city: data.city,
      location: data.location,
      description: data.description,
      cellphone: data.cellphone,
      role: data.role,
      ruc: data.ruc,
      business_name: data.business_name,
      business_type: data.business_type,
      business_age: data.business_age,
    };
    console.log("Nueva Empresa", newUser);

    const formData = new FormData();
    formData.append("name", newUser.name);
    formData.append("last_name", newUser.last_name);
    formData.append("email", newUser.email);
    formData.append("password", newUser.password);
    formData.append("password_confirmation", newUser.password_confirmation);
    formData.append("province", newUser.province);
    formData.append("city", newUser.city);
    formData.append("location", newUser.location);
    formData.append("description", newUser.description);
    formData.append("cellphone", newUser.cellphone);
    formData.append("role", newUser.role);
    formData.append("ruc", newUser.ruc);
    formData.append("business_name", newUser.business_name);
    formData.append("business_type", newUser.business_type);
    formData.append("business_age", newUser.business_age);

    console.log("formData", formData);

    try {
      const userData = await doBusinessRegister(data);
      swal({
        title: "Usuario Registrado",
        text: "Ya puede iniciar sesión",
        icon: "success",
        button: "Aceptar",
        timer: "6000",
      });
      console.log("userData", userData);
      data.reset();
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: "No se pudo registrar la cuenta",
          text: translateMessage(error.response.data.error),
          icon: "error",
          button: "Aceptar",
          timer: "2000",
        });
        console.log(error.response);
        return Promise.reject(error.response);
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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className={styles.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Grid>
            <Typography component="h1" variant="h5">
              Nueva Empresa
            </Typography>
          </Grid>
          <Grid container style={{ paddingTop: "30px" }}>
            <Grid item xs={12}>
              <Divider color="secondary" />
            </Grid>
          </Grid>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  inputRef={register}
                  label="Nombre"
                  autoFocus
                />
                <Typography color="primary">{errors.name?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  inputRef={register}
                  label="Apellido"
                  name="last_name"
                  autoComplete="lname"
                />
                <Typography color="primary">
                  {errors.last_name?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  inputRef={register}
                  label="Correo"
                  name="email"
                  autoComplete="email"
                />
                <Typography color="primary">{errors.email?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  className={clsx(classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="password">Contraseña *</InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    inputRef={register}
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={93}
                  />
                </FormControl>
                <Typography color="primary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  className={clsx(classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="password_confirmation">
                    Confirmar Contraseña *
                  </InputLabel>
                  <OutlinedInput
                    id="password_confirmation"
                    name="password_confirmation"
                    inputRef={register}
                    type={values.showPassword ? "text" : "password"}
                    value={values.password_confirmation}
                    onChange={handleChange("password_confirmation")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={175}
                  />
                </FormControl>
                <Typography color="primary">
                  {errors.password_confirmation?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="province"
                  inputRef={register}
                  label="Provincia"
                  name="province"
                  autoComplete="province"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  inputRef={register}
                  label="Ciudad"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="location"
                  inputRef={register}
                  label="Dirección"
                  name="location"
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  inputRef={register}
                  label="Biografia"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="cellphone"
                  inputRef={register}
                  label="Teléfono"
                  name="cellphone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="hidden"
                  id="role"
                  inputRef={register}
                  defaultValue="ROLE_BUSINESS"
                  name="role"
                  autoComplete="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="ruc"
                  inputRef={register}
                  label="RUC"
                  name="ruc"
                  autoComplete="ruc"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="business_name"
                  inputRef={register}
                  label="Nombre de la empresa"
                  name="business_name"
                  autoComplete="business_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="business_type"
                  inputRef={register}
                  label="Mercado al que se dirige la empresa"
                  name="business_type"
                  autoComplete="business_type"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="business_age"
                  inputRef={register}
                  label="Edad de la empresa"
                  name="business_age"
                  autoComplete="business_age"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<SaveIcon />}
            >
              Guardar
            </Button>
          </form>
        </div>
      </Container>
      <br />
      <br />
    </>
  );
};

export default BusinessRegister;
