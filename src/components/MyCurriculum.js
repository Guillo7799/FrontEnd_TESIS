import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import NewCurriculum from "@/components/NewCurriculum";
import withAuth from "@/hocs/withAuth";
import { Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    borderColor: "#094275",
    textAlign: "left",
    height: "510px",
    overflowY: "scroll",
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
    paddingLeft: 10,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: 15,
    width: "350px",
  },
  media: {
    height: 140,
  },
}));

const MyCurriculum = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/users/curriculum/${user.id}`, fetcher);
  console.log("cdatad", data);

  if (error) return <div>No se pudo cargar su curriculum</div>;
  if (!data) return <div>Cargando curriculum...</div>;
  // render data
  return (
    <>
      {data[0] ? (
        <Grid container direction="column">
          {data.map((data) => (
            <Grid className={classes.root} key={data.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${data.image}`}
                alt="Profile-User"
                width={150}
                height={150}
                style={{ marginLeft: "22%" }}
              />
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
                <strong>Mis habilidades: </strong>
                {data.habilities}
              </p>
              <p style={{ fontSize: 15 }}>
                <strong>Mis certificados: </strong>
                {data.certificates}
              </p>
              <p style={{ fontSize: 15 }}>
                <strong>T??tulo de Segundo Grado: </strong>
                {data.highschool_degree}
              </p>
              <p style={{ fontSize: 15 }}>
                <strong>Experiencia Laboral: </strong>
                {data.work_experience}
              </p>
              <a href={data.link} style={{ fontSize: 15 }} target="_blank">
                <strong>Link de mi Hoja de vida </strong>
              </a>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Grid item xs={8} sm={12}>
            <div className={classes.confirmation}>
              <img
                src="https://image.flaticon.com/icons/png/512/1207/1207431.png"
                alt="No hay curriculum"
                style={{ marginLeft: 30 }}
                width={190}
                height={200}
              />
              <p>
                <strong>No hay registro</strong>
              </p>
              <p>
                Recuerde, es recomendable postular con un curriculum lleno, de
                tal manera que la empresa puede revisarlo.
              </p>
              <NewCurriculum />
            </div>
          </Grid>
        </>
      )}
    </>
  );
};

export default withAuth(MyCurriculum);
