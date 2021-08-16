import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import { Grid } from "@material-ui/core";

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
}));

const MyCurriculum = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/users/curriculum/${user.id}`, fetcher);

  if (error) return <div>No se pudo cargar su curriculum</div>;
  if (!data) return <div>Cargando curriculum...</div>;
  // render data
  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          justifyContent: "space-between",
        }}
      >
        {data.data.map((data) => (
          <Grid className={classes.root} key={data.id}>
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
    </>
  );
};

export default MyCurriculum;
