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
import ViewApplications from "@/components/ModalApplications";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    margin: "auto",
    minHeight: "250px",
    Width: "350px",
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
    height: "400px",
    overflowY: "scroll",
    width: "100%",
  },
}));

const MyPublicationsWithApplications = () => {
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
        direction="row"
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
              <CardContent>
                <ViewApplications publications={data.id} />
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

export default MyPublicationsWithApplications;
