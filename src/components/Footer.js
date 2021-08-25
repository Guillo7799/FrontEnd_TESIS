import React from "react";
import { Grid, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //height: "400px relative",
    backgroundColor: "#333132",
    color: "white",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
  },
}));

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_bx291w9",
      "template_t818igv",
      e.target,
      "user_bUkKPtO0bY3YekQk4J4Sj"
    )
    .then(
      (result) => {
        swal({
          title: "Correo Enviado!",
          icon: "success",
          button: "Aceptar",
          timer: "3000",
        });
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        swal({
          title: "Error: revise que haya llenado todos los campos",
          icon: "error",
          button: "Aceptar",
        });
      }
    );
  e.target.reset();
}

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid container item xs={12} sm={5}>
          <Grid item xs={12} sm={12} style={{ padding: 15 }}>
            <h2>REDES SOCIALES:</h2>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.content}>
            <p style={{ fontSize: 20, color: "#878586" }}>
              Conoce más sobre la plataforma, visita nuestras redes sociales
            </p>
            <br />
            <a href="https://www.youtube.com/channel/UCi-LZGktPQ08v4vfF-ej9Qg">
              <YouTubeIcon style={{ fontSize: 70, color: "red" }} />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-rivera-guerrero-4556b5205/">
              <LinkedInIcon style={{ fontSize: 70, color: "#0270AD" }} />
            </a>
            <a href="https://www.instagram.com/guillo_rivera7/">
              <InstagramIcon
                style={{
                  fontSize: 63,
                  color: "white",
                }}
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.content}>
            <p style={{ fontSize: 20, color: "#878586" }}>
              © Copyright | Prácticas al día | Powered By Gales
            </p>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12} sm={12} style={{ padding: 15 }}>
            <h2>CONTACTO CON EL DESARROLLADOR:</h2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ padding: 15, textAlign: "center" }}
          >
            <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    size="medium"
                    style={{ width: "50%", minHeight: "15%", color: "white" }}
                  />
                </div>
                <br />
                <br />
                <div className="col-8 form-group pt-2 mx-auto">
                  <Input
                    type="email"
                    className="form-control"
                    placeholder="Tu correo electrónico"
                    name="email"
                    size="medium"
                    style={{ width: "50%", minHeight: "15%", color: "white" }}
                  />
                </div>
                <br />
                <br />
                <div className="col-8 form-group pt-2 mx-auto">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Asunto"
                    name="subject"
                    size="medium"
                    style={{ width: "50%", minHeight: "15%", color: "white" }}
                  />
                </div>
                <br />
                <br />
                <div className="col-8 form-group pt-2 mx-auto">
                  <Input
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Tu mensaje"
                    name="message"
                    style={{ width: "50%", minHeight: "15%", color: "white" }}
                  ></Input>
                </div>
                <br />
                <br />
                <div className="col-8 pt-3 mx-auto">
                  <Input
                    type="submit"
                    className="btn btn-info"
                    value="Enviar"
                    style={{
                      width: "90px",
                      height: "35px",
                      color: "white",
                      backgroundColor: "#0170B8",
                      borderRadius: 5,
                    }}
                  ></Input>
                </div>
              </div>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
