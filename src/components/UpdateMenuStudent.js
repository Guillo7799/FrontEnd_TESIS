import * as React from "react";
import withAuth from "@/hocs/withAuth";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Routes from "src/constants/routes";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SaveIcon from "@material-ui/icons/Save";
import UpdateIcon from "@material-ui/icons/Update";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UpdateInfo from "@/components/UpdateStudent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#F77272",
    size: "large",
  },
}));

export default function BasicModal() {
  const classes = useStyles();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, error } = useSWR(`/users/curriculum/${user.id}`, fetcher);
  console.log("Info Curriculum", data);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await User.update(user.id, data);
      console.log("Dato Estudiante", response);
      swal({
        title: "Datos actualizado",
        icon: "success",
        button: "Aceptar",
        timer: "1500",
      });
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "No se pudo actualizar los datos",
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
  if (error) return <div>No se pudo cargar su curriculum</div>;
  if (!data) return <div>Cargando curriculum...</div>;

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<UpdateIcon />}
        onClick={handleOpen}
      >
        Actualizar datos
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid style={{ textAlign: "center" }}>
            <MenuOpenIcon style={{ fontSize: "40px", color: "#F77272" }} />
            <h1>Actualización de datos</h1>
          </Grid>

          {data[0] ? (
            <Grid container item xs={12} sm={12}>
              <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                <p>
                  Tiene registrado un curriculum, escoja entre las opciones cual
                  de los datos desea actualizar
                </p>
                <br />
              </Grid>
              <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                <UpdateInfo />
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                <Link href={Routes.UPDATECV} passHref>
                  <MuiLink>
                    <Button style={{ color: "#F77272" }}>
                      Actualizar datos de Curriculum
                    </Button>
                  </MuiLink>
                </Link>
              </Grid>
            </Grid>
          ) : (
            <>
              <Grid container item xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
                    <br />
                    <form
                      className={classes.form}
                      noValidate
                      autoComplete="off"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Grid container item xs={12} sm={12} spacing={1}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="location"
                            inputRef={register}
                            label="Dirección"
                            defaultValue={user.location}
                            name="location"
                            autoComplete="text"
                          />
                          <br />
                          <br />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="description"
                            inputRef={register}
                            label="Descripción"
                            defaultValue={user.description}
                            name="description"
                            autoComplete="text"
                          />
                          <br />
                          <br />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          variant="outlined"
                          type="number"
                          required
                          fullWidth
                          label="Teléfono"
                          id="cellphone"
                          inputRef={register}
                          defaultValue={user.cellphone}
                          name="cellphone"
                          autoComplete="text"
                        />
                        <br />
                        <br />
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
                  <Button onClick={handleClose}>Lo tengo</Button>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
