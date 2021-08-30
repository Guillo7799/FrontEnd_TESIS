import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const images = [
  {
    url: "data:image/png;base64,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",
    title: "Interfaz Amigable",
    width: "33%",
  },
  {
    url: "https://pixeladas.com/wp-content/uploads/2021/01/icon-responsive.png",
    title: "Multidispositivo",
    width: "33%",
  },
  {
    url: "https://img.freepik.com/vector-gratis/teletrabajo_23-2148491068.jpg?size=626&ext=jpg",
    title: "Todo desde casa",
    width: "33%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <Grid container style={{ width: "100%" }}>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      <br />
      <br />
      <br />
    </Grid>
  );
}
