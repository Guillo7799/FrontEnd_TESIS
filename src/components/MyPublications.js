import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import Routes from "src/constants/routes";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Pagination } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderColor: "#094275",
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
}));

const MyPublication = () => {
  const classes = useStyles();
  const user = useAuth();
  const { data: publicationData, error } = useSWR(
    `/publications/filter/${user.id}`,
    fetcher
  );

  if (error) return <div>No se pudo cargar sus publicaciones</div>;
  if (!publicationData) return <div>Cargando publicaciones...</div>;
  // render data
  return (
    <>
      <br />
      <br />
      <Grid
        container
        direction="column"
        style={{
          justifyContent: "space-between",
        }}
      >
        {data.data.map((data) => (
          <Card className={classes.root} key={data.id}>
            <CardActionArea>
              <CardContent>
                <p style={{ fontSize: 15 }}>{data.career}</p>
                <p style={{ fontSize: 15 }}>{data.description}</p>
                <p style={{ fontSize: 15 }}>{data.hours}</p>
                <p style={{ fontSize: 12 }}>{data.date}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <br />
      <br />
      <Pagination defaultCurrent={1} total={10} />
    </>
  );
};

export default MyPublication;
