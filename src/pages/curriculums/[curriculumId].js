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
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    textAlign: "center",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    marginTop: "5%",
  },
  media: {
    height: 140,
  },
  main: {
    marginTop: "1%",
    maxWidth: "90%",
    textAlign: "left",
    minHeight: "100%",
  },
  button: {
    textAlign: "center",
    minWidth: "100%",
    minHeight: "10%",
    marginLeft: "45%",
  },
  firstContent: {
    paddingLeft: "5%",
    width: "100%",
    background: "#E1D8CF",
    height: "100%",
  },
  name: {
    width: "100%",
    height: "35%",
    background: "#373741",
    textAlign: "center",
  },
  imageContent: {
    borderRadius: 5,
  },
  description: {
    width: "90%",
    height: "5%",
    background: "#373741",
    textAlign: "center",
  },
  description2: {
    width: "90%",
    marginLeft: "5%",
    height: "15%",
    background: "#373741",
    textAlign: "center",
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
      <Grid item xs={12} sm={12} className={classes.title}>
        <h1 style={{ color: "#094275", fontSize: 35 }}>Curriculum Vitae</h1>
      </Grid>
      {data ? (
        <Grid
          container
          style={{
            justifyContent: "center",
          }}
        >
          {data.map((data) => (
            <Grid container className={classes.main} key={data.id}>
              <Grid item xs={12} sm={6} className={classes.firstContent}>
                <Grid style={{ textAlign: "center", marginTop: 15 }}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${data.image}`}
                    alt="Profile-User"
                    width={250}
                    height={300}
                    className={classes.imageContent}
                  />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.description}>
                  <h1 style={{ color: "#E1D8CF" }}>Mis Habilidades</h1>
                </Grid>
                <Grid>
                  <p style={{ fontSize: 15 }}>{data.habilities}</p>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.description}>
                  <h1 style={{ color: "#E1D8CF" }}>Mi ubicación</h1>
                </Grid>
                <Grid>
                  <p style={{ fontSize: 15 }}>
                    <strong>Provincia:</strong> {data.province}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Ciudad:</strong> {data.city}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Dirección:</strong> {data.location}
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.description}>
                  <h1 style={{ color: "#E1D8CF" }}>Datos de Contacto</h1>
                </Grid>
                <Grid>
                  <p style={{ fontSize: 15 }}>
                    <strong>Correo:</strong> {data.email}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Celular:</strong> {data.cellphone}
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.name}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#373741",
                  }}
                >
                  <p
                    style={{
                      fontSize: 40,
                      color: "#E1D8CF",
                      textAlign: "center",
                    }}
                  >
                    {data.name}
                    <br /> {data.last_name}
                  </p>
                  <p
                    style={{
                      fontSize: 20,
                      color: "#E1D8CF",
                      textAlign: "center",
                    }}
                  >
                    {data.career}
                  </p>
                  <p
                    style={{
                      fontSize: 20,
                      color: "#E1D8CF",
                      textAlign: "center",
                    }}
                  >
                    {data.university}
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Grid item xs={12} sm={12} className={classes.description2}>
                    <h1 style={{ color: "#E1D8CF" }}>Idioma</h1>
                  </Grid>
                  <Grid style={{ textAlign: "left", paddingLeft: "5%" }}>
                    <p style={{ fontSize: 15 }}>
                      <strong>Idioma:</strong> {data.language}
                    </p>
                    <p style={{ fontSize: 15 }}>
                      <strong>Nivel de Idioma:</strong> {data.level_language}
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.description2}>
                    <h1 style={{ color: "#E1D8CF" }}>Mi título de 2° Grado</h1>
                  </Grid>
                  <Grid style={{ textAlign: "left", paddingLeft: "5%" }}>
                    <p style={{ fontSize: 15 }}>{data.highschool_degree}</p>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.description2}>
                    <h1 style={{ color: "#E1D8CF" }}>Mis certificados</h1>
                  </Grid>
                  <Grid style={{ textAlign: "left", paddingLeft: "5%" }}>
                    <p style={{ fontSize: 15 }}>{data.certificates}</p>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.description2}>
                    <h1 style={{ color: "#E1D8CF" }}>Experiencia laboral</h1>
                  </Grid>
                  <Grid style={{ textAlign: "left", paddingLeft: "5%" }}>
                    <p style={{ fontSize: 15 }}>{data.work_experience}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <div className={classes.nouser}>
            <img
              src="https://img2.freepng.es/20180920/caa/kisspng-design-sales-company-coaching-service-5ba32473a7aee4.0449760315374183556868.jpg"
              alt="No inicio de sesión"
              width={250}
              height={350}
            />
            <h2>Parece que este usuario no ha registrado un curriculum</h2>
            <div></div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      )}
      <br />
      <br />
      <br />
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
