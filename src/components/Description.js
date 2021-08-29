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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.40defiebre.com/wp-content/uploads/2013/07/buena_interfazusuario.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Interfaz amigable
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Con prácticas al día puedes hacer uso de uno de los dos roles
                definidos, esocoje el que más se adecúe a tu necesidad.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.fundacionayesa.org/wp-content/uploads/2012/09/blog_multidevice.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Acceso desde cualquier dispositivo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Debido a las características de la página, los usuarios pueden
                utilizarlas hasta desde dispositivos móviles.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.yunbitsoftware.com/blog/wp-content/uploads/2020/06/3641599-scaled-e1593532828313.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Desde la comodidad de la casa u oficina
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nos encontramos en una época difícil, donde salir a la calle
                implica un riesgo, por lo cual para los prácticas evita salir de
                casa, cuidate y cuida a los tuyos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <br /> <br /> <br />
      </Grid>
    </Grid>
  );
}
