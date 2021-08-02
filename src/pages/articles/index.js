import Link from "next/link";
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
import Routes from "../../constants/routes";
import ArticleForm from "@/components/ArticleForm";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Article } from "@/lib/articles";
import Loading from "@/components/Loading";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 40,
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
  body: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
});

const Articles = () => {
  const classes = useStyles();
  const { data, error } = useSWR("/articles", fetcher);

  if (error) return <div>No se pudo cargar la lista de artículos</div>;
  if (!data) return <Loading />;

  return (
    <>
      <ArticleForm />
      <Grid container direction="row" justify="space-between">
        {data.data.map((article, index) => (
          <Card className={classes.root} key={article.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${article.image}`}
                // image={`https://picsum.photos/200/300?sig=${index}`}
                title={article.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.body}
                >
                  {article.body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={`${Routes.ARTICLES}/${article.id}`}>
                <Button size="small" color="primary">
                  Ver más
                </Button>
              </Link>
            </CardActions>
          </Card>
          // <li>
          //   <Link href={`/articles/${article.id}`}>{article.title}</Link>
          // </li>
        ))}
      </Grid>
    </>
  );
};

export default Articles;

// export async function getStaticProps() {
//   const response = await Article.getAll();
//   const articles = response.data.data;
//
//   return {
//     props: {
//       articles,
//     },
//   };
// }
