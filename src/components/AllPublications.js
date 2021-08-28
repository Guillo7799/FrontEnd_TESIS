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
import Application from "@/components/Application";

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
                  <Application application={publication.id} />
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
