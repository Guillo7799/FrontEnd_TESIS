import React, { useState } from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { fetcher } from "@/lib/utils";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import withAuth from "@/hocs/withAuth";
import Routes from "src/constants/routes";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as yup from "yup";
import api from "@/lib/api";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
  Button,
  Select,
  Modal,
} from "@material-ui/core";
import Image from "next/image";
import Loading from "@/components/Loading";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import translateMessage from "../constants/messages";
import { Application } from "@/lib/applications";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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
    maxWidth: "1000%",
    borderColor: "#094275",
    textAlign: "center",
    content: "center",
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
  confirmation: {
    textAlign: "center",
  },
  media: {
    height: 140,
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
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StudentsPostulations = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const { data: ApplicationData, error } = useSWR(
    `/users/${user.id}/publication/application`,
    fetcher
  );
  const { application, setApplication } = useState("");
  console.log("ApplicationData: ", ApplicationData);

  if (error) return <div>No se pudo cargar las postulaciones</div>;
  if (!ApplicationData) return <Loading />;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("infoApp", ApplicationData);
  const cont = 0;

  const onSubmit = async (status) => {
    //setApplication();
    console.log("ID: ", ApplicationData.data[0].id);
    console.log("Data: ", status);

    try {
      const response = await Application.update(
        ApplicationData.data[0].id,
        status
      );
      console.log("Response:", response);
      swal({
        title: "Cambio guardado",
        icon: "success",
        button: "Aceptar",
        timer: "15000",
      });
      return response;
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.errors);
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          text: "No se puede registrar el cambio",
          button: "Aceptar",
        });
        Error(error.response.data.errors);
        return Promise.reject(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <>
      {ApplicationData ? (
        <Grid
          container
          direction="column"
          style={{
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" style={{ width: 75 }}>
                    Curriculum
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: 150 }}>
                    Nombre de Postulante
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: 150 }}>
                    Apellido de Postulante
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: 250 }}>
                    Mensaje
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: 250 }}>
                    Descripción de mi publicación
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: 100 }}>
                    Estado de postulación
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ApplicationData.data.map((application) => (
                  <StyledTableRow key={application.id}>
                    <StyledTableCell align="center">
                      <Link href={`${Routes.CURRICULUMS}/${application.user}`}>
                        <Button size="small" color="primary">
                          Ver Perfil
                        </Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {application.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {application.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {application.message}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {application.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        backgroudnColor="#EE6E6E"
                        variant
                        startIcon={<EditIcon />}
                        type="button"
                        onClick={handleOpen}
                      >
                        {application.status}
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
                            key={application.id}
                          >
                            <Grid style={{ textAlign: "center" }}>
                              <h1>Cambio de estado</h1>
                            </Grid>
                            <Grid>
                              <p>
                                <strong>
                                  Recuerde que el estado permitirá conocer al
                                  estudiante como está el proceso de su
                                  postulación.
                                </strong>
                              </p>
                              <p>Pendiente = No ha revisado el Curriculum.</p>
                              <p>
                                Revisado = Ha revisado el Curriculum pero el
                                postulante no cumple con lo que se necesita.
                              </p>
                              <p>
                                Por Contactar = Ha revisado el curriculum y el
                                postulante cumple lo solicitado y se pondrá en
                                contacto con él para organizar una entrevista.
                              </p>
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
                                key={application.id}
                                onSubmit={handleSubmit(onSubmit)}
                              >
                                <Grid
                                  container
                                  item
                                  xs={12}
                                  sm={12}
                                  spacing={1}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12}>
                                      <Select
                                        native
                                        name="status"
                                        id="status"
                                        key={application.id}
                                        inputRef={register}
                                        variant="outlined"
                                        label="Estado"
                                        required
                                        fullWidth
                                      >
                                        <option value="Pendiente" selected>
                                          Pendiente
                                        </option>
                                        <option value="Revisado">
                                          Revisado
                                        </option>
                                        <option value="Por Contactar">
                                          Por Contactar
                                        </option>
                                      </Select>
                                      <br />
                                      <br />
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <Button
                                      type="submit"
                                      variant="contained"
                                      color="primary"
                                      key={application.id}
                                      className={classes.submit}
                                    >
                                      Actualizar{" "}
                                      <SaveIcon style={{ fontSize: 20 }} />
                                    </Button>
                                    <br />
                                    <br />
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <Button onClick={handleClose}>
                                      Cancelar
                                    </Button>
                                  </Grid>
                                </Grid>
                                <br />
                              </form>
                              <br />
                            </Grid>
                          </div>
                        </Fade>
                      </Modal>
                      {/*{application.status}*/}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
          <br />
        </Grid>
      ) : (
        <>
          <div className={classes.confirmation}>
            <Image
              src="https://image.flaticon.com/icons/png/512/1458/1458503.png"
              alt="Sin Postulación"
              width={150}
              height={150}
            />
            <p>Vaya! No tiene postulaciones de Practicantes</p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default withAuth(StudentsPostulations);
