import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Pagination } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    borderColor: "#094275",
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
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginLeft: 150 }}
                >
                  Postular
                </Button>
              </CardContent>
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
