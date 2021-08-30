import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
      <Grid container item xs={12} sm={12}>
        <Grid container item xs={12} sm={12}>
          <Grid item xs={12} sm={4}>
            <img
              src="https://www.seekpng.com/png/detail/334-3340257_mision-icono-ebook-la-bellezza-del-perdono.png"
              alt="mision-imagen"
              width={380}
              height={210}
            />
            <br />
            <h2 style={{ color: "#094275" }}>Misión</h2>
            <p>
              Prácticas al día es una aplicación web que permite realizar
              acciones de oferta y postulación sobre prácticas pre profesionales
              dedicado para empresas y estudiantes universitarios
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 style={{ color: "#094275" }}>Visión</h2>
            <p>
              Ser una aplicación confiable, segura y que sea la primera opción
              de los usuarios que necesiten realizar este tipo de actividades
            </p>
            <br />
            <img
              src="https://image.flaticon.com/icons/png/512/957/957349.png"
              alt="vision-imagen"
              width={200}
              height={200}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://i.pinimg.com/originals/f0/63/bb/f063bbf55323092056acb5c4ab6e8d70.png"
              alt="mision-imagen"
              width={370}
              height={200}
            />
            <br />
            <h2 style={{ color: "#094275" }}>Objetivo</h2>
            <ul style={{ textAlign: "left", marginLeft: "5%" }}>
              <li>Brindar una plataforma segura para el usuario</li>
              <li>Manejar los datos ingresados de la mejor manera</li>
              <li>Dar un servicio amigable y fácil de entender</li>
              <li>
                Brindar a los opciones opciones de publicación y postulación
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      {/*
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
      </Card>*/}
    </Grid>
  );
}
