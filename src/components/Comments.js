import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    marginLeft: "5%",
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
  comments: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif",
    margin: "auto",
    padding: 10,
  },
  card: {
    display: "relative",
    padding: "10px",
    width: "100%",
  },
  cardContainer: {
    margin: "10px 40px",
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
      <br />
      <br />
      <Grid container className={classes.root} direction="row">
        {data.data.map((comment) => (
          <Grid item xs={12} className={classes.cardContainer}>
            <Grid item xs={12} className={classes.card}>
              <Card className={classes.comments}>
                <CardActionArea>
                  <CardContent>
                    <p style={{ fontSize: 15 }}>{comment.content}</p>
                    <p style={{ fontSize: 12, color: "#F77272" }}>
                      {comment.name} {comment.last_name}
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </>
  );
};

export default Comments;
