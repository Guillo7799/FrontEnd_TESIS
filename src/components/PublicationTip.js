import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        Primero asegúrese de llenar todos los campos, recuerde son importantes.
      </h2>
      <p id="simple-modal-description">
        <strong>Carrera de interés: </strong> Ingrese la carrera de interés (Ej:
        Se solicita practicante que estudie Ingeniería en Sistemas o afines).
      </p>
      <p id="simple-modal-description">
        <strong>Descripción: </strong>En este punto debe detallar que
        conocimientos se requiere del postulante y que actividades desarrollaría
        en su empresa.
      </p>
      <p id="simple-modal-description">
        <strong>Horas a ofertar: </strong>En este apartado ingrese la cantidad
        de horas que su empresa quiere ofertar y que otros beneficios tendría el
        postulante.
      </p>
      <p id="simple-modal-description">
        <strong>Calendario: </strong>En este punto seleccione o ingrese la fecha
        máxima en la que se puede postular.
      </p>
      <p id="simple-modal-description">
        <strong>Seleccione una categoría: </strong>Cada carrera pertenece a una
        categoría, seleccione a la que pertenezca la carrera de interés del
        pasante.
      </p>
      {/*<SimpleModal />*/}
      <Button onClick={handleClose}>Lo tengo</Button>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<EmojiObjectsIcon />}
        onClick={handleOpen}
      >
        ¿Cómo llenar?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
