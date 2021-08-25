import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import withAuth from "@/hocs/withAuth";
import { Grid } from "@material-ui/core";
import Routes from "src/constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
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

const MyPostulations = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/users/applications/${user.id}`, fetcher);

  if (error) return <div>No se pudo cargar sus postulaciones</div>;
  if (!data) return <div>Cargando Postulaciones...</div>;
  // render data
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
              <table class="default">
                <tr>
                  <th>Nombre</th>
                  <th>Apelido</th>
                  <th>Estado de Potulación</th>
                  <th>Publicación</th>
                </tr>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.status}</td>
                  <td>{data.publication}</td>
                </tr>
              </table>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <div className={classes.confirmation}>
            <p>
              No ha postulado a ninguna oferta,{" "}
              <Link href={Routes.PUBLICATIONS}>Quiero Postular</Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default withAuth(MyPostulations);
