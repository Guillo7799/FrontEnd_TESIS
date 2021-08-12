import React from "react";
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
import Image from "next/image";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
  regcomm: {
    minWidth: "100%",
    textAlign: "center",
  },
  comment: {
    textAlign: "center",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    improfile: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: "#000000",
      width: 175,
      height: 175,
    },
    buttonss: {
      textAlign: "center",
    },
    contcoment: {
      textAlign: "center",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const { user } = useAuth();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <Avatar className={classes.improfile}>{user.name}</Avatar>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Información:</Typography>
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
            <strong>Celular:</strong> {user.phone}
          </Typography>
          <br />
          <div>
            <Avatar
              image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${user.image}`}
              alt="Foto de perfil"
              className={classes.large}
            />
          </div>
        </Grid>
        <br />
        <br />
        <br />
        {/*
        <Grid item xs={3} className={classes.buttonss}>
          <div>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Opciones
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <Link href={Routes.EDITPROFILE} passHref>
                  <MuiLink>
                    <Button>Editar mi perfil</Button>
                  </MuiLink>
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link href={Routes.ADDTUTORIA} passHref>
                  <MuiLink>
                    <Button>Registrar Tutoría</Button>
                  </MuiLink>
                </Link>
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </Grid>*/}
        <br />
        <br />
        <Grid item xs={12} container spacing={3} className={classes.contcoment}>
          <br />
          <br />
          <Grid item xs={12}>
            <Typography variant="h5">
              ¿Quiere realizar algún comentario sobre el sistema y su
              experiencia? ...Nos gustaría saberlo{" "}
              <SentimentVerySatisfiedIcon style={{ fontSize: 25 }} />
            </Typography>
            <br />
          </Grid>
          {/* 
          <Grid item xs={12} className={classes.comment}>
            <Link href={Routes.ADDCOMMENT} passHref>
              <MuiLink>
                <Button variant="contained" color="primary">
                  Ingresar un comentario
                </Button>
              </MuiLink>
            </Link>
          </Grid>*/}
        </Grid>
      </Grid>
    </>
  );
};
export default withAuth(Profile);
