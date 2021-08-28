import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import Routes from "../../constants/routes";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
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
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "800",
    textAlign: "left",
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "center",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  media: {
    height: 140,
  },
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    maxWidth: "90%",
    textAlign: "left",
    minHeight: "800px",
  },
  button: {
    textAlign: "center",
    minWidth: "100%",
    minHeight: "10%",
    marginLeft: "45%",
  },
  image: {
    paddingLeft: "5%",
  },
}));

const PublicationDetail = () => {
  const classes = useStyles();
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { publicationId } = router.query;
  const { data, error, mutate } = useSWR(
    `/publications/${publicationId}`,
    fetcher
  );
  console.log("detail", data);

  if (error)
    return <div>No se pudo cargar la información de la publicación</div>;
  if (!data) return <Loading />;

  return (
    <>
      <Head>
        <title>Hoja de Vida</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>Detalle de Oferta</h1>
        <hr color="#F77272" width="90%" />
      </Grid>
      <Grid container>
        {data ? (
          <Grid
            container
            style={{
              justifyContent: "center",
            }}
          >
            <Grid container className={classes.main} key={data.id}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <p style={{ fontSize: 15 }}>
                    <strong>Nombre de la Empresa </strong>
                    {data.business_name}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Carrera de interés: </strong>
                    {data.career}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Detalle de publicación: </strong>
                    {data.description}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Oferta: </strong>
                    {data.hours}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Fecha máxima para postular: </strong>
                    {data.date}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Ciudad donde se oferta: </strong>
                    {data.city}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Correo al que se pueden contactar: </strong>
                    {data.contact_email}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <>
            <div>No se pudo cargar la publicación</div>
          </>
        )}
      </Grid>
      <Grid container item xs={12} sm={12} className={classes.button}>
        <Link href={Routes.PUBLICATIONS} passHref>
          <MuiLink>
            <Button color="primary" variant="contained">
              Regresar
            </Button>
          </MuiLink>
        </Link>
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
};

export default withAuth(PublicationDetail);
