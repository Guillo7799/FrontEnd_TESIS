import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import { Pagination } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    maxWidth: 345,
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
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  mypublications: {
    marginTop: 20,
    overflowY: "scroll",
    width: "80%",
  },
}));

const MyPublication = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/users/publications/${user.id}`, fetcher);

  if (error) return <div>No se pudo cargar sus publicaciones</div>;
  if (!data) return <div>Cargando publicaciones...</div>;
  // render data
  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          justifyContent: "space-between",
        }}
        className={classes.mypublications}
      >
        {data.data.map((data) => (
          <Card className={classes.root} key={data.id}>
            <CardActionArea>
              <CardContent>
                <p style={{ fontSize: 15 }}>
                  <strong style={{ color: "#094275" }}>Carrera: </strong>
                  {data.career}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong style={{ color: "#094275" }}>Descripción: </strong>
                  {data.description}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong style={{ color: "#094275" }}>
                    Horas ofertadas:{" "}
                  </strong>
                  {data.hours}
                </p>
                <p style={{ fontSize: 15 }}>
                  <strong style={{ color: "#094275" }}>Fecha máxima: </strong>
                  {data.date}
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <br />
      <br />
    </>
  );
};

export default MyPublication;
