import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import withAuth from "@/hocs/withAuth";
import { Grid } from "@material-ui/core";
import Routes from "src/constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000%",
    borderColor: "#094275",
    textAlign: "center",
    content: "center",
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

const StudentsPostulations = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/applications`, fetcher);
  const { data: publicationData, error: errorData } = useSWR(
    `/users/publications/${user.id}`,
    fetcher
  );

  if (error) return <div>No se pudo cargar la petición</div>;
  if (!data) return <div>Cargando Postulaciones...</div>;
  if (errorData) return <div>No se pudo cargar la petición</div>;
  if (!publicationData) return <div>Cargando Postulaciones...</div>;
  // render data
  return (
    <>
      {data.data.publication_id === publicationData.data.id ? (
        <Grid
          container
          direction="column"
          style={{
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <table class="default">
            <tr>
              <th>Id de Postulante</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Estado de Potulación</th>
              <th>Mensaje</th>
            </tr>
          </table>
          {data.data.map((data, description) => (
            <Grid className={classes.root} key={(data.id, publicationData.id)}>
              <tr>
                <td>{data.user}</td>
                <td>{data.name}</td>
                <td>{data.last_name}</td>
                <td>{data.status}</td>
                <td>{data.message}</td>
              </tr>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <div className={classes.confirmation}>
            <p>No tiene postulaciones de Practicantes </p>
          </div>
        </>
      )}
    </>
  );
};

export default withAuth(StudentsPostulations);
