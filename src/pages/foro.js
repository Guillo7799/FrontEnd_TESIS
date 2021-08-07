import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  root: {
    width: "100%",
    marginTop: 20,
    margin: "1rem",
    padding: "1rem",
    alignContent: "center",
    justifyContent: "center",
  },
  show: {
    maxWidth: "80%",
    height: "auto",
    backgroundImage: "url(aquí la ruta de la imagen de fondo)",
    margin: "0 auto",
    padding: "0 1%",
    boxShadow: " 5px 5px 0 #AAA",
    borderRadius: "5px",
  },
  input: {
    textAlign: "left",
  },
  buttons: {
    textAlign: "center",
  },
  input2: {
    width: "80%",
    height: "130px",
    font: "300 15px Open Sans, Arial, sans-serif",
    margin: "5px 0 10px 0",
  },
  root3: {
    minWidth: "150px",
  },
  root4: {
    minWidth: "150px",
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
  card: {
    marginLeft: "10%",
    maxWidth: "400px",
  },
  card2: {
    marginLeft: "10%",
    maxWidth: "400px",
  },
}));

const Comment = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Head>
        <title>Foro</title>
      </Head>
      <Grid item xs={12} className={classes.title}>
        <h1>Foro de Comentarios</h1>
        <hr color="black" width="90%" />
      </Grid>
      <Grid item xs={12} className={classes.title}>
        <h2>
          Conoce a los otros usuarios, comparte tu experiencia con la plataforma
          y tu punto de vista sobre esta.
        </h2>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} className={classes.show}>
          <label>Ingresa tu comentario </label>
          <br />
          <input
            className={classes.input2}
            type="text"
            name="content"
            size="70"
            placeholder="Experiencia de uso, opinión..."
          />
          <br />
          <br />
          <br />
          <label>La fecha de publicación será automática </label>
          <br />
          <br />
        </Grid>
        <Grid item xs={6} sm={6} className={classes.input}></Grid>
      </Grid>
      <Grid item xs={12} className={classes.buttons}>
        <Link href={Routes.HOME} passHref>
          <MuiLink>
            <Button variant="contained" color="primary">
              {" "}
              Cancelar
            </Button>
          </MuiLink>
        </Link>
        {"          "}
        <Button style={{ margin: "50px" }} variant="contained" color="primary">
          Guardar
        </Button>
        <br />
        <br />
        <br />
        <br />
      </Grid>
      <Grid container>
        <Grid item xs={6} className={classes.card}>
          <Card className={classes.root3}>
            <CardContent>
              <Typography
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} sm={12} className={classes.card2}>
          <Card className={classes.root4}>
            <CardContent>
              <Typography
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
    </>
  );
};

export default Comment;
