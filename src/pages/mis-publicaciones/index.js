import React, { useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Grid } from "@material-ui/core";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import { Card, CardActionArea, CardContent, Button } from "@material-ui/core";
import withAuth from "@/hocs/withAuth";
import { useRouter } from "next/router";
import EditPublication from "@/components/EditPublication";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Routes from "src/constants/routes";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
    marginTop: 15,
  },
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
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  mypublications: {
    marginTop: 20,
    height: "400px",
    overflowY: "scroll",
    maxWidth: "90%",
    minHeight: "1000px",
    marginLeft: "3%",
  },
  card: {
    display: "relative",
    padding: "10px",
    width: "100%",
  },
  cardContainer: {
    margin: "10px 40px",
  },
}));

const Gestion = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();
  const { data, error } = useSWR(`/users/publications/${user.id}`, fetcher);

  if (error) return <div>No se pudo cargar sus publicaciones</div>;
  if (!data) return <div>Cargando publicaciones...</div>;
  // render data

  return (
    <>
      <Head>
        <title>Gestión</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>Gestión de mis Publicaciones</h1>
        <hr color="#F77272" width="90%" />
        <p>
          No se permite la eliminación de publicaciones debido a que puede
          contener postulaciones de usuarios estudiantes
        </p>
      </Grid>
      <Grid
        container
        direction="row"
        style={{
          justifyContent: "space-between",
        }}
        className={classes.mypublications}
      >
        {data.data.map((data) => (
          <Grid item xs={12} className={classes.cardContainer}>
            <Grid item xs={12} className={classes.card}>
              <Card className={classes.root} key={data.id}>
                <CardActionArea>
                  <CardContent>
                    <p style={{ fontSize: 15 }}>
                      <strong style={{ color: "#094275" }}>Carrera: </strong>
                      {data.career}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong style={{ color: "#094275" }}>
                        Descripción:{" "}
                      </strong>
                      {data.description}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong style={{ color: "#094275" }}>Ciudad: </strong>
                      {data.city}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong style={{ color: "#094275" }}>Oferta: </strong>
                      {data.hours}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong style={{ color: "#094275" }}>
                        Fecha máxima:{" "}
                      </strong>
                      {data.date}
                    </p>
                  </CardContent>
                  <CardContent>
                    <EditPublication publications={data} />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
        <Link href={Routes.GLOBALPROFILE} passHref>
          <MuiLink>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ArrowBackIcon style={{ fontSize: "large" }} />}
            >
              Regresar
            </Button>
          </MuiLink>
        </Link>
      </Grid>
      <br />
      <br />
    </>
  );
};

export default withAuth(Gestion);
