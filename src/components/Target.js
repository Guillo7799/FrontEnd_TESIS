import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "650px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "7%",
  },
  media: {
    height: 450,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={12} id="acerca-de">
      <Grid item xs={12} sm={12} style={{ textAlign: "center", width: "100%" }}>
        <h1>¿Qué objetivo tiene Prácticas al Día?</h1>
      </Grid>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/logo-gales.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ¿Para qué es prácticas al día?
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 17 }}
            >
              Prácticas al día fue desarrollado con el objetivo de dar solución
              a un problema al cual se enfrentan varios estudiantes
              universitarios, indistintamente de la universidad en la que se
              encuentren, estas son las prácticas pre profesionales, siendo
              complicadas de conseguir, además de que existen empresas con
              problemas para encontrar practicantes que cumplan con esta
              actividad dentro de sus organizaciones, de esa idea nace Prácticas
              al día, espero que les guste y sus opiniones y recomendaciones son
              siempre bien reibidas, en la parte de abajo "Contacto con el
              administrador".
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
