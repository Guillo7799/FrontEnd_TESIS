import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, Grid } from "@material-ui/core";
import Application from "@/components/Application";
import { Pagination } from "antd";

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
}));

const Comments = () => {
  const classes = useStyles();
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
                <Application />
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

export default Comments;
