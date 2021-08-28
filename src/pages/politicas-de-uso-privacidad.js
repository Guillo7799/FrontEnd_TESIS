import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  subheader: {
    flex: 1,
    margin: "10px auto",
    padding: "30px",
  },
  title: {
    textAlign: "center",
  },
  main: {
    paddingLeft: "10%",
    width: "90%",
  },
  partone: {
    padding: "10px",
    fontSize: 17,
  },
  partwo: {
    padding: "10px",
    fontSize: 17,
  },
  parthree: {
    padding: "10px",
    fontSize: 17,
  },
  partfour: {
    padding: "10px",
    fontSize: 17,
  },
}));

const Politics = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Políticas</title>
      </Head>
      <Grid className={classes.subheader}>
        <Grid className={classes.title}>
          <h1 style={{ color: "#F77272" }}>POLÍTICAS DE USO Y PRIVACIDAD</h1>
        </Grid>
        <hr color="#F77272" width="100%" />
      </Grid>
      <Grid className={classes.main}>
        <Grid className={classes.partone}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>Políticas de uso</h1>
          </Grid>
          <p>
            La presente Política de Privacidad establece los términos en que
            "Prácticas al día" usa y protege la información que es proporcionada
            por sus usuarios al momento de utilizar el sitio web respectivo.
            Esta empresa de desarrollo está comprometida con la seguridad de los
            datos de los usuarios. Cuando le pedimos llenar los campos de
            información personal con la cual usted puede ser identificado, se lo
            hace asegurando que sólo se empleará de acuerdo con los términos de
            este documento. Sin embargo esta Política de Privacidad puede
            cambiar con el tiempo o ser actualizada por lo que se le recomienda
            al usuario revisar de manera contínua esta política de uso para
            asegurarse que está de acuerdo con dichos cambios.
          </p>
        </Grid>
        <Grid className={classes.partwo}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>Información recogida</h1>
          </Grid>
          <p>
            La aplicación web podrá recoger información personal como: Nombre,
            información de contacto como la dirección de correo electrónico e
            informaicón, dirección, etc. De igual manera cuando se requiera
            información específica.
          </p>
        </Grid>
        <Grid className={classes.parthree}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>Uso de la información</h1>
          </Grid>
          <p>
            "Prácticas al día" emplea la información con el fin de proporcionar
            un buen servicio. "Prácticas al día" está altamente comprometido a
            cumplir con el compromiso de mantener su información segura. Se usan
            sistemas más avanzados y se los actualiza de forma constante para
            asegurar que no existe ningún tipo de acceso no autorizado.
          </p>
        </Grid>
        <Grid className={classes.partfour}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>Enlaces a terceros</h1>
          </Grid>
          <p>
            La aplicación podría contener accesos a otros sitios web que pueden
            ser de interés del usuario. Una vez que se haga clic en los enlaces
            y se abandone la página, ya no se tendrá control sobre el sitio al
            que se redirigió y por lo tanto "Prácticas al día" y el responsable
            del desarrollo de la aplicación no se hacen responsables de los
            términos o privacidad ni de la protección de los datos que el
            usuario ingrese en dichos sitios. Aquellos sitios están sujetos a
            sus propias políticas de privacidad y uso por lo cual es
            recomendable que el usuario los consulte y revise para confirmar que
            está de acuerdo con aquellos términos.
          </p>
        </Grid>
        <Grid className={classes.partfour}>
          <Grid className={classes.title}>
            <h1 style={{ color: "#094275" }}>
              Control de su información personal
            </h1>
          </Grid>
          <p>
            "Prácticas al día", NO cederá ni distribuirá la información personal
            que se recopile sin su consentimiento, salvo que sea requerido por
            un juez ante un orden judicial. "Prácticas al día" se reserva el
            derecho de modificar los términos de uso en cualquier momento.
          </p>
          <p>Haga uso consiente de la aplicación.</p>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid>
    </>
  );
};

export default Politics;
