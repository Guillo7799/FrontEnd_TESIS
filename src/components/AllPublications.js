import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, Grid } from "@material-ui/core";
import { Pagination } from "antd";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import IconButton from "@material-ui/core/IconButton";
import * as yup from "yup";
import Link from "next/link";
import Routes from "src/constants/routes";
import Application from "@/components/Application";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const schema = yup.object().shape({
  text: yup.string().required("Llene el formulario de postulación"),
});

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
  root: {
    maxWidth: "90%",
    marginLeft: "5%",
    borderColor: "#094275",
    textAlign: "left",
  },
  cardContainer: {
    margin: "10px 40px",
  },
  media: {
    height: 140,
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
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
    backgroundColor: "#F77272",
  },
}));

const Publications = (publication) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();

  const { data, error } = useSWR(`/publications`, fetcher);

  if (error) return <div>No se pudo cargar las publicaciones</div>;
  if (!data) return <Loading />;
  if (data == null) return <div>No hay registros de publicaciones</div>;
  // render data

  return (
    <>
      <br />
      <br />
      <Grid container direction="row" className={classes.root}>
        {data.data.map((publication) => (
          <Grid item xs={12} className={classes.cardContainer}>
            <Card className={classes.root} key={publication.id}>
              <CardActionArea>
                <CardContent>
                  <h1 style={{ color: "#094275" }}>{publication.career}</h1>
                  <p style={{ fontSize: 15 }}>
                    <strong> Empresa: </strong>
                    {publication.business_name}
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <strong>Descripción: </strong>
                    {publication.description}
                  </p>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Application application={publication.id} />
                  </div>
                  <div>
                    <Link href={`${Routes.PUBLICATIONS}/${publication.id}`}>
                      <IconButton
                        color="#094071"
                        aria-label="add to shopping cart"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </div>
                </CardContent>
                <CardContent
                  style={{ backgroundColor: "#094275" }}
                ></CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Pagination defaultCurrent={1} total={10} />
    </>
  );
};

export default withAuth(Publications);
