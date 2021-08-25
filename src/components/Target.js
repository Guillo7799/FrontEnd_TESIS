import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "7%",
  },
  media: {
    height: 400,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/logo-gales.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Razón de ser de Prácticas al Día
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Prácticas al día fue desarrollado con el objetivo de dar solución a
            un problema al cual se enfrentan varios estudiantes universitarios,
            indistintamente de la universidad en la que se encuentren, estas son
            las prácticas pre profesionales, siendo complicadas de conseguir,
            además de que existen empresas con problemas para encontrar
            practicantes que cumplan con esta actividad dentro de sus
            organizaciones, de esa idea nace Prácticas al día, espero que les
            guste y sus opiniones y recomendaciones son siempre bien reibidas,
            en la parte de abajo "Contacto con el desarrollador" esto me ayuda a
            crecer.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
