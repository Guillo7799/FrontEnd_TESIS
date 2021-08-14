import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Routes from "src/constants/routes";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

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
  submain: {
    paddingLeft: 150,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
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
        <h1>Perfil de Usuario</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid container className={classes.main}>
        <Grid container item xs={12} sm={12} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Información:</Typography>
            <br />
            <br />
            <div>
              <Avatar
                image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${user.image}`}
                alt="Foto de perfil"
                className={classes.large}
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
          {/* 
          <Grid item xs={1}>
            <hr width="1" size="750" />
          </Grid>*/}
          <Grid className={classes.submain} item xs={12} sm={6} spacing={4}>
            <h3>CURRICULUM</h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} style={{ textAlign: "center", height: 600 }}>
        <h1>Mis Postulaciones</h1>
        <hr color="black" width="90%" />
        <p>No hay registros...</p>
      </Grid>
    </>
  );
};

export default StudentProfile;
