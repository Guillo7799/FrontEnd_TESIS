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
    marginLeft: "47%",
  },
  image: {
    paddingLeft: "5%",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { curriculumId } = router.query;
  const { data, error, mutate } = useSWR(
    `/users/curriculum/${curriculumId}`,
    fetcher
  );

  if (error) return <div>No se pudo cargar la información del artículo</div>;
  if (!data) return <Loading />;

  return (
    <>
      <Head>
        <title>Hoja de Vida</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>Curriculum Vitae</h1>
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
            {data.map((data) => (
              <Grid container className={classes.main} key={data.id}>
                <Grid container>
                  <Grid item xs={12} sm={6} className={classes.image}>
                    <img
                      src={`http://localhost:8000/storage/${data.image}`}
                      alt="Profile-User"
                      width={250}
                      height={300}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <p style={{ fontSize: 15 }}>
                      <strong>Nombre y Apellido: </strong>
                      {data.name} {data.last_name}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Provincia: </strong>
                      {data.province}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Ciudad: </strong>
                      {data.city}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Dirección: </strong>
                      {data.location}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Email: </strong>
                      {data.email}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Celular: </strong>
                      {data.cellphone}
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <p style={{ fontSize: 15 }}>
                      <strong>Universidad: </strong>
                      {data.university}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Carrera: </strong>
                      {data.career}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Idioma extranjero: </strong>
                      {data.language}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Nivel del Idioma extranjero: </strong>
                      {data.level_language}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Habilidades: </strong>
                      {data.habilities}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Certificados: </strong>
                      {data.certificates}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Título de Segundo Grado: </strong>
                      {data.highschool_degree}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Experiencia Laboral: </strong>
                      {data.work_experience}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <div>No se pudo cargar su curriculum</div>
          </>
        )}
      </Grid>
      <Grid container item xs={12} sm={12} className={classes.button}>
        <Link href={Routes.GLOBALPROFILE} passHref>
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

export default withAuth(UserProfile);
