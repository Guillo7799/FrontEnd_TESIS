import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
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

const Comments = () => {
  const classes = useStyles();
  const { data, error } = useSWR(`/comments`, fetcher);

  if (error) return <div>No se pudo cargar los comentarios</div>;
  if (!data) return <div>Cargando comentarios...</div>;
  // render data
  return (
    <>
      <Grid
        container
        direction="row"
        style={{ justifyContent: "space-between" }}
      >
        {data.data.map((comment) => (
          <Card
            className={classes.root}
            key={(comment.content, comment.created_at)}
          >
            <CardActionArea>
              <CardContent>
                <p style={{ fontSize: 15 }}>{comment.content}</p>
                <p style={{ fontSize: 12, color: "#C0C0C0" }}>
                  Realizado: {comment.created_at}
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <Pagination defaultCurrent={1} total={10} />
    </>
  );
};

export default Comments;
