import React from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Routes from "src/constants/routes";
import MyCurriculum from "@/components/MyCurriculum";
import Image from "next/image";
import MyPostulations from "@/components/MyPostulations";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  root2: {
    maxWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title2: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  main: {
    marginTop: "5%",
    paddingLeft: "10%",
    textAlign: "left",
  },
}));

const StudentProfile = () => {
  const { user } = useAuth();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1 style={{ color: "#F77272" }}>Perfil de Usuario</h1>
        <hr color="#F77272" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid container item xs={12} sm={12} style={{ height: "100%" }}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4">Información:</Typography>
            <br />
            <br />
            <div style={{ paddingLeft: "5%" }}>
              <Image
                src="/register/student.png"
                alt="icono_estudiante"
                width={115}
                height={125}
              />
            </div>
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
            <Link href={Routes.PUBLICATIONS} passHref>
              <MuiLink>
                <Button variant="outlined" color="primary">
                  Ver ofertas
                </Button>
              </MuiLink>
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5} spacing={4} style={{ paddingLeft: 10 }}>
            <h3 style={{ paddingLeft: 75 }}>CURRICULUM</h3>
            <MyCurriculum />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.title}>
        <h1>Mis Postulaciones</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid
        container
        className={classes.main}
        item
        xs={12}
        sm={12}
        style={{ textAlign: "center", height: 600 }}
      >
        <MyPostulations />
      </Grid>
    </>
  );
};

export default withAuth(StudentProfile);
