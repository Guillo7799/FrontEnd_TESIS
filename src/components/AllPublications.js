import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Grid,
  TextField,
  Modal,
} from "@material-ui/core";
import { Pagination } from "antd";
import swal from "sweetalert";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import SaveIcon from "@material-ui/icons/Save";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RateReviewIcon from "@material-ui/icons/RateReview";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const schema = yup.object().shape({
  text: yup.string().required("Llene el formulario de postulación"),
});

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
  root: {
    maxWidth: 450,
    borderColor: "#094275",
    textAlign: "left",
  },
  media: {
    height: 140,
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
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

const Publications = (publication) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    const newApplication = {
      name: data.name,
      last_name: data.last_name,
      message: data.message,
      publication_id: data.publication_id,
    };
    const formData = new FormData();
    formData.append("name", newApplication.name);
    formData.append("last_name", newApplication.last_name);
    formData.append("message", newApplication.message);
    formData.append("publication_id", newApplication.publication_id);

    console.log("formData", formData);
    console.log("Nueva Postulación: ", newApplication);
    try {
      const response = await api.post("/applications", formData);
      console.log("Data Curriculum", response);
      swal({
        title: "Solicitud Envíada",
        text: "Su solicitud pasa a revisión por parte de la empresa, ellos revisarán su curriculum, si cumple con los requisitos, se pondrán en contacto con usted para continuar con el proceso",
        icon: "success",
        button: "Aceptar",
        timer: "15000",
      });
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "Hubo un error, revise que haya llenado bien todos los campos",
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
    data.target.reset();
  };

  const { data, error } = useSWR(`/publications`, fetcher);

  if (error) return <div>No se pudo cargar las publicaciones</div>;
  if (!data) return <div>Cargando publicaciones...</div>;
  if (data == null) return <div>No hay registros de publicaciones</div>;
  // render data

  return (
    <>
      <br />
      <br />
      <Grid
        container
        direction="row"
        style={{
          justifyContent: "space-between",
        }}
      >
        {data.data.map((publication) => (
          <Card className={classes.root} key={publication.id}>
            <CardActionArea>
              <CardContent>
                <p style={{ fontSize: 15 }}>
                  <strong>Empresa u Organización: </strong>
                  {publication.business_name}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong>Carrera: </strong>
                  {publication.career}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong>Descripción: </strong>
                  {publication.description}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong>Horas que oferta: </strong>
                  {publication.hours}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong>Correo de Contacto: </strong>
                  {publication.contact_email}
                </p>
                <br />
                <div style={{ textAlign: "center" }}>
                  <Button
                    backgroudnColor="#EE6E6E"
                    variant
                    startIcon={<RateReviewIcon />}
                    type="button"
                    onClick={handleOpen}
                  >
                    Postular
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div
                        style={modalStyle}
                        className={classes.paper}
                        key={user.id}
                      >
                        <Grid style={{ textAlign: "center" }}>
                          <h1>Formulario de Postulación</h1>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          style={{ textAlign: "center" }}
                        >
                          <br />
                          <form
                            className={classes.form}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            <Grid container item xs={12} sm={12} spacing={1}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="name"
                                  inputRef={register}
                                  label="Nombre"
                                  defaultValue={user.name}
                                  name="name"
                                  autoComplete="text"
                                />
                                <br />
                                <br />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="last_name"
                                  inputRef={register}
                                  label="Apellido"
                                  defaultValue={user.last_name}
                                  name="last_name"
                                  autoComplete="text"
                                />
                                <br />
                                <br />
                              </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Multiline"
                                multiline
                                rows={3}
                                id="message"
                                inputRef={register}
                                label="Mensaje descriptivo de solicitud"
                                name="message"
                                autoComplete="text"
                              />
                              <br />
                              <br />
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              sm={12}
                              key={publication.id}
                            >
                              <Grid item xs={3} sm={3}></Grid>
                              <Grid item xs={6} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  type="hidden"
                                  id="publication_id"
                                  inputRef={register}
                                  defaultValue={publication.id}
                                  name="publication_id"
                                  autoComplete="text"
                                />
                                <br />
                              </Grid>
                              <Grid item xs={3} sm={3}></Grid>
                            </Grid>
                            <br />
                            <Grid item xs={12} sm={12}>
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                              >
                                Guardar <SaveIcon style={{ fontSize: 20 }} />
                              </Button>
                              <br />
                              <br />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <Button onClick={handleClose}>Cancelar</Button>
                            </Grid>
                          </form>
                          <br />
                        </Grid>
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </CardContent>
              <CardContent style={{ backgroundColor: "#F77272" }}></CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <br />
      <br />
      <Pagination defaultCurrent={1} total={10} />
    </>
  );
};

export default withAuth(Publications);
