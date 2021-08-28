import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  subheader: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  info: {
    minHeight: "50%",
    maxWidth: "90%",
    paddingLeft: "5%",
    textAlign: "left",
  },
}));

const Laws = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>¿Qué dice la Ley?</title>
      </Head>
      <Grid className={classes.subheader}>
        <Grid className={classes.title}>
          <h1 style={{ color: "#F77272" }}>Conozcamos</h1>
        </Grid>
        <hr color="#F77272" width="100%" />
      </Grid>
      <Grid
        style={{
          textAlign: "center",
          width: "100%",
          height: "100px",
          fontFamily: "'Source Sans Pro', sans-serif",
        }}
      >
        <h2>
          ¿Qué dice la Ley ecuatoriana sobre las prácticas preprofesionales?
        </h2>
      </Grid>
      <Grid container className={classes.info} spacing={2}>
        <Grid item xs={12} sm={5} style={{ height: "100%" }}>
          <img
            src="https://image.flaticon.com/icons/png/512/1698/1698609.png"
            alt="personaje-confundido"
            width={375}
            height={350}
          />
        </Grid>
        <Grid item xs={12} sm={7} style={{ height: "100%" }}>
          <h2 style={{ color: "#094275" }}>
            Artículo 59 de la Ley Orgánica del Servicio Público (LOSEP)
          </h2>
          <p style={{ fontSize: 17 }}>
            Estipula que las instituciones del sector público podrán celebrar
            convenios o contratos de pasantías con estudiantes de institutos,
            universidades y escuelas politécnicas, respetando la equidad y
            paridad de género, discapacidad y la interculturalidad; que estos
            convenios o contratos no originan relación laboral ni dependencia
            alguna, no generan derechos ni obligaciones laborales o
            administrativas, y se caracterizan por tener una duración limitada;
            y que las y los pasantes podrán percibir un reconocimiento económico
            establecido por el Ministerio de Trabajo.
          </p>
          <h2 style={{ color: "#094275" }}>
            Artículo 87 de la Ley Orgánica de Educación Superior (LOES)
          </h2>
          <p style={{ fontSize: 17 }}>
            Establece como requisito previo a la obtención del título, que las y
            los estudiantes deberán acreditar servicios a la comunidad mediante
            prácticas o pasantías preprofesionales debidamente monitoreadas, en
            los campos de su especialidad, de conformidad con los lineamientos
            generales definidos por el Consejo de Educación Superior.
          </p>
          <h2 style={{ color: "#094275" }}>
            Artículo 89 de la Ley Orgánica de Educación Superior (LOES)
          </h2>
          <p style={{ fontSize: 17 }}>
            Señala que las prácticas pre profesionales, son actividades de
            aprendizaje orientadas a la aplicación de conocimientos y al
            desarrollo de las destrezas y habilidades específicas que un
            estudiante debe adquirir para un adecuado desempeño en su futura
            profesión. Estas prácticas deberán ser de investigación-acción y se
            realizarán en el entorno institucional, empresarial o comunitario,
            público o privado, adecuado para el fortalecimiento del aprendizaje.
            Las prácticas pre profesionales o pasatías son parte fundamental del
            currículo conforme se regula en el presente reglamento.
          </p>
          <h2 style={{ color: "#094275" }}>
            Literal i) del artículo 14 de la Ley de la Juventud
          </h2>
          <p style={{ fontSize: 17 }}>
            Prescribe como política de promoción del derecho a la educación de
            los jóvenes, la promoción de pasantías laborales en los sectores
            público y privado enfocados en el desarrollo del país y la oferta de
            empleo.
          </p>
          <a href="https://www.trabajo.gob.ec/wp-content/uploads/downloads/2017/07/MDT-2017-109F.pdf">
            Acuerdo Ministerial Nro.: MDT-2017{" "}
            <LocalOfferIcon style={{ paddingTop: 10 }} />
          </a>
        </Grid>
        <br />
        <br />
      </Grid>
      <br /> <br />
      <br /> <br />
    </>
  );
};

export default Laws;
