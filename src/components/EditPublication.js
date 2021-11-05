import * as React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import translateMessage from "../constants/messages";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import Modal from "@mui/material/Modal";
import { Publication } from "@/lib/publications";
import { useRouter } from "next/router";
import Routes from "src/constants/routes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  minWidth: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    backgroundColor: "#F77272",
    size: "large",
  },
}));

export default function BasicModal(props) {
  console.log("Datos de Publicación", props.publications);
  const { user } = useAuth();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await Publication.update(props.publications.id, data);
      console.log("Datos Publicación", response);
      swal({
        title: "Publicación Editada",
        icon: "success",
        button: "Aceptar",
        timer: "50000",
      });
      router.push(Routes.GLOBALPROFILE);
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: "Datos inválidos",
          icon: "error",
          text: "Error, revise que los campos estén llenos y de forma correcta",
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

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid style={{ textAlign: "center" }}>
            <h1>Edición de datos de Publicación</h1>
            <p>
              Se muestran los datos de la publicación seleccionada, edite los
              campos que requiera
            </p>
            <br />
          </Grid>
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
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
                    multiline
                    rows={3}
                    id="description"
                    inputRef={register}
                    label="Descripción"
                    defaultValue={props.publications.description}
                    name="description"
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
                    multiline
                    rows={3}
                    id="hours"
                    inputRef={register}
                    label="Oferta"
                    defaultValue={props.publications.hours}
                    name="hours"
                    autoComplete="text"
                  />
                  <br />
                  <br />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Carrera"
                    id="career"
                    inputRef={register}
                    defaultValue={props.publications.career}
                    name="career"
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
                    label="Fecha"
                    id="date"
                    inputRef={register}
                    defaultValue={props.publications.date}
                    name="date"
                    autoComplete="text"
                  />
                  <br />
                  <br />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Ciudad"
                    id="city"
                    inputRef={register}
                    defaultValue={props.publications.city}
                    name="city"
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
                    label="Correo de contacto"
                    id="contact_email"
                    inputRef={register}
                    defaultValue={props.publications.contact_email}
                    name="contact_email"
                    autoComplete="text"
                  />
                  <br />
                  <br />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Select
                  native
                  required
                  name="category_id"
                  id="category_id"
                  inputRef={register}
                  variant="outlined"
                  fullWidth
                >
                  <option value={props.publications.category}>
                    Editar categoría
                  </option>
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
                <br /> <br />
              </Grid>
              <br />
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SaveIcon style={{ fontSize: "large" }} />}
                  className={classes.submit}
                >
                  Guardar
                </Button>
                <br />
                <br />
              </Grid>
            </form>
            <br />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
