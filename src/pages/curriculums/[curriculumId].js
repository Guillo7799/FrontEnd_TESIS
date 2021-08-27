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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
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
  confirmation: {
    paddingLeft: 55,
  },
  media: {
    height: 140,
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
      {data ? (
        <Grid
          container
          direction="column"
          style={{
            justifyContent: "space-between",
          }}
        >
          {data.data.map((data) => (
            <Grid className={classes.root} key={data.id}>
              <Image
                src={`/http://localhost:8000/cvitaes/${data.image}`}
                alt="Profile-User"
                width={150}
                height={150}
              />
              <p style={{ fontSize: 15 }}>
                <strong>Nombre: </strong>
                {data.name}
              </p>
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
                <strong>Idioma extranjero: </strong>
                {data.habilities}
              </p>
              <p style={{ fontSize: 15 }}>
                <strong>Idioma extranjero: </strong>
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
          ))}
        </Grid>
      ) : (
        <>
          <div>No se pudo cargar su curriculum</div>
        </>
      )}
    </>
  );
};

export default withAuth(UserProfile);
