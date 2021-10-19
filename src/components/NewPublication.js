import React from "react";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "src/constants/routes";
import { Select } from "@material-ui/core";
import { Button, Avatar, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import swal from "sweetalert";
import withAuth from "@/hocs/withAuth";
import PublicationTip from "@/components/PublicationTip";
import Typography from "@material-ui/core/Typography";

const schema = yup.object().shape({
  business_name: yup
    .string()
    .required("Ingrese el nombre de la empresa ofertante"),
  career: yup.string().required("Ingrese la carrera de interés"),
  description: yup
    .string()
    .required("Ingrese la descripción de las actividades a desarrollar"),
  hours: yup
    .string()
    .required(
      "Ingrese la cantidad de horas que oferta y si tienen algún tipo de beneficio"
    ),
  date: yup.string().required("Ingrese la fecha máxima de postulación"),
  city: yup
    .string()
    .required("Ingrese la ciudad donde se solicita el practicante"),
  contact_email: yup.string().required("Ingresa el correo de contacto"),
  category_id: yup
    .string()
    .required("Seleccione la categoría a la que pertenece la oferta"),
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
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  root2: {
    maxWidth: 500,
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
  main: {
    textAlign: "center",
  },
}));

const NewPublication = () => {
  const { user } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const publicationData = { ...data, user };
    console.log("Publication", publicationData);
    try {
      const response = await api.post("/publications", publicationData);
      console.log("Data Publication", response);
      swal({
        title: "Oferta registrada!",
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

  return (
    <>
      <Grid container className={classes.main}>
        <Grid container item sx={12} sm={12}>
          <br />
          <br />
          <Grid
            item
            xs={12}
            sm={12}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <h1>Nueva Publicación de oferta</h1>
            <hr color="black" width="90%" />
            <PublicationTip />{" "}
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
            <br />
            <br />
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
                  id="business_name"
                  inputRef={register}
                  label="Ingrese el nombre de su organización"
                  name="business_name"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">
                  {errors.business_name?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="career"
                  inputRef={register}
                  label="Carrera de interés"
                  name="career"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">
                  {errors.career?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Multiline"
                  multiline
                  rows={4}
                  id="description"
                  inputRef={register}
                  label="Descripción"
                  name="description"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">
                  {errors.description?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="hours"
                  inputRef={register}
                  label="Horas a ofertar"
                  name="hours"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">{errors.hours?.message}</Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  id="date"
                  inputRef={register}
                  label=""
                  name="date"
                  autoComplete="date"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">{errors.date?.message}</Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  inputRef={register}
                  label="Ciudad"
                  name="city"
                  autoComplete="text"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">{errors.city?.message}</Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  id="contact_email"
                  inputRef={register}
                  label="Correo de contacto"
                  name="contact_email"
                  autoComplete="email"
                  style={{ width: "100%", minHeight: "15%" }}
                />
                <Typography color="primary">
                  {errors.contact_email?.message}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12}>
                <Select
                  native
                  name="category_id"
                  id="category_id"
                  inputRef={register}
                  variant="outlined"
                  required
                  fullWidth
                >
                  <option selected>Seleccione una categoría...</option>
                  <option value="1">
                    Ingeniería en Sistemas y carreras afines
                  </option>
                  <option value="2">
                    Ingeniería en Mecánica y carreras afines
                  </option>
                  <option value="3">
                    Ingeniería Química y carreras afines
                  </option>
                  <option value="4">
                    Ingeniería en Electrónica y Control y carreras afines
                  </option>
                  <option value="5">
                    Ingeniería en Eléctrica, Redes y Telecomunicaciones y
                    carreras afines
                  </option>
                  <option value="6">Carreras ligadas a la medicina</option>
                  <option value="7">Derecho</option>
                  <option value="8">Admnistración</option>
                  <option value="9">Marketing</option>
                  <option value="10">Ingeniería Civil</option>
                  <option value="11">Licenciaturas</option>
                  <option value="12">Carreras de Comunicación</option>
                  <option value="13">Carreras Sociales y Humanísticas</option>
                </Select>
                <Typography color="primary">
                  {errors.category_id?.message}
                </Typography>
              </Grid>
              <br />
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
                    Publicar
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
                  <Link href={Routes.GLOBALPROFILE} passHref>
                    <MuiLink>
                      <Button variant="contained" color="primary">
                        Cancelar
                      </Button>
                    </MuiLink>
                  </Link>
                </Grid>
              </Grid>
            </form>
            <br />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withAuth(NewPublication);
