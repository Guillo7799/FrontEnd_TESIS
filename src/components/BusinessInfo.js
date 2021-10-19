import React from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
    marginTop: 15,
  },
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    textAlign: "left",
  },
  actions: {
    width: "90%",
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
}));

const PersonalInfo = () => {
  const { user } = useAuth();
  const classes = useStyles();
  return (
    <>
      <div id="infoBusiness">
        <br />
        <div style={{ paddingLeft: "5%" }}>
          <Image
            src="/register/working-man.png"
            alt="icono_estudiante"
            width={115}
            height={125}
          />
        </div>
        <br />
        <br />
        <Typography varian="h6">
          <strong>Nombre:</strong> {user.name}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Apellido:</strong> {user.last_name}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Correo electronico:</strong> {user.email}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Celular:</strong> {user.cellphone}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Provincia:</strong> {user.province}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Ciudad:</strong> {user.city}
        </Typography>
        <br />
        <Typography varian="h6">
          <strong>Biografía:</strong> {user.description}
        </Typography>
        <br />
        <br />
      </div>
    </>
  );
};

export default PersonalInfo;
