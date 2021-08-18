import React from "react";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  main: {
    height: "700px",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
  },
}));

const Information = () => {
  const { user } = useAuth();
  const classes = useStyles();
  return (
    <>
      <br />
      <br />
      <Grid container item xs={12} sm={12}>
        <h1 style={{ fontSize: 22 }}>Información</h1>
      </Grid>
      <Grid
        container
        className={classes.main}
        key={user.id}
        item
        xs={12}
        sm={12}
      >
        <Grid item xs={12} sm={5}>
          <p>
            <strong>Nombre: </strong>
            {user.name}
          </p>
          <p>
            <strong>Apellido: </strong>
            {user.last_name}
          </p>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={5} spacing={4}>
          <p>
            <strong>Detalle: </strong>
          </p>
          {user.description}
        </Grid>
      </Grid>
    </>
  );
};

export default Information;
