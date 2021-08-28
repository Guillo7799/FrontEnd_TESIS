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
    paddingLeft: "5%",
    textAlign: "left",
  },
}));

const Information = () => {
  const { user } = useAuth();
  const classes = useStyles();
  return (
    <>
      <br />
      <Grid container key={user.id} item xs={12} sm={12}>
        <Grid container className={classes.main}>
          <Grid container item xs={12} sm={12}>
            <h1 style={{ fontSize: 22 }}>Información</h1>
          </Grid>
          <Grid item xs={12} sm={11}>
            <p>
              <strong>Nombre: </strong>
              {user.name}
            </p>
            <p>
              <strong>Apellido: </strong>
              {user.last_name}
            </p>
            <p>
              <strong>Detalle: </strong>
              {user.description}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Information;
