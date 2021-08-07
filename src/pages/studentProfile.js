import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Head from "next/head";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "../constants/routes";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

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
    padding: 70,
    textAlign: "center",
  },
  submain: {
    paddingLeft: 150,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const StudentProfile = () => {
  const classes = useStyles();
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
        <Grid container item xs={12} sm={12}>
          <Grid item xs={5}>
            <Image
              src="/profile/avatarS.jpg"
              alt="avatar_business"
              width={200}
              height={200}
              marginLeft="45%"
            />
            <br />
            <br />
            <br />
            <label>Nombre y Apellido: Guillermo Rivera</label>
            <br />
            <br />
            <label>Correo: riveraguillermo864@gmail.com</label>
            <br />
            <br />
            <br />
            <br />
            <Link href={Routes.UPDATESTUDENT} passHref>
              <MuiLink>
                <Button variant="contained" color="primary">
                  Actualizar Perfil
                </Button>
              </MuiLink>
            </Link>
            <br />
            <br />
            <Button variant="contained" color="primary">
              Ver Hoja de vida
            </Button>
          </Grid>
          <Grid item xs={1}>
            <hr width="1" size="750" />
          </Grid>
          <Grid className={classes.submain} item xs={5} spacing={4}>
            <input
              type="search"
              name="busquedapasantia"
              placeholder="Buscar
            "
            />
            <br />
            <br />
            <Card className={classes.root2}>
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
            <br />
            <hr color="black" width="100%" />
            <br />

            <Card className={classes.root2}>
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
            <br />
            <hr color="black" width="100%" />
            <br />
            <Card className={classes.root2}>
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
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
    </>
  );
};

export default StudentProfile;
