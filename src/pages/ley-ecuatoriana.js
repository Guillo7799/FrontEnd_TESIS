import React from "react";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

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
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const Laws = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
      <Grid container item xs={12} sm={12}>
        <Grid
          style={{
            textAlign: "center",
            width: "100%",
            height: "100px",
            fontFamily: "'Source Sans Pro', sans-serif",
          }}
        >
          <h2>
            ¿Qué dice la Ley Ecuatoriana sobre las prácticas preprofesionales?
          </h2>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src="https://image.flaticon.com/icons/png/512/1698/1698609.png"
            alt="personaje-confundido"
            width={375}
            height={350}
          />
        </Grid>
        <Grid item xs={12} sm={8} className={classes.root}>
          <AppBar position="static" color="default" background="#F77272 ">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="#094275"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Art. 59 (LOSEP)" {...a11yProps(0)} />
              <Tab label="Art. 87 (LOES)" {...a11yProps(1)} />
              <Tab label="Art. 89 (LOES)" {...a11yProps(2)} />
              <Tab label="Art. 14 lit (i) Ley de Juventud" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <p style={{ fontSize: 17 }}>
                Estipula que las instituciones del sector público podrán
                celebrar convenios o contratos de pasantías con estudiantes de
                institutos, universidades y escuelas politécnicas, respetando la
                equidad y paridad de género, discapacidad y la
                interculturalidad; que estos convenios o contratos no originan
                relación laboral ni dependencia alguna, no generan derechos ni
                obligaciones laborales o administrativas, y se caracterizan por
                tener una duración limitada; y que las y los pasantes podrán
                percibir un reconocimiento económico establecido por el
                Ministerio de Trabajo.
              </p>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <p style={{ fontSize: 17 }}>
                Establece como requisito previo a la obtención del título, que
                las y los estudiantes deberán acreditar servicios a la comunidad
                mediante prácticas o pasantías preprofesionales debidamente
                monitoreadas, en los campos de su especialidad, de conformidad
                con los lineamientos generales definidos por el Consejo de
                Educación Superior.
              </p>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <p style={{ fontSize: 17 }}>
                Señala que las prácticas pre profesionales, son actividades de
                aprendizaje orientadas a la aplicación de conocimientos y al
                desarrollo de las destrezas y habilidades específicas que un
                estudiante debe adquirir para un adecuado desempeño en su futura
                profesión. Estas prácticas deberán ser de investigación-acción y
                se realizarán en el entorno institucional, empresarial o
                comunitario, público o privado, adecuado para el fortalecimiento
                del aprendizaje. Las prácticas pre profesionales o pasatías son
                parte fundamental del currículo conforme se regula en el
                presente reglamento.
              </p>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <p style={{ fontSize: 17 }}>
                Prescribe como política de promoción del derecho a la educación
                de los jóvenes, la promoción de pasantías laborales en los
                sectores público y privado enfocados en el desarrollo del país y
                la oferta de empleo.
              </p>
            </TabPanel>
          </SwipeableViews>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Laws;
