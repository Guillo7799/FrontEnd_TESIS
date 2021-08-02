import Comments from "@/components/Comments";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import { Button } from "@material-ui/core";
import { Article } from "@/lib/articles";
import Routes from "../../constants/routes";
import { useSnackbar } from "notistack";

const ArticleDetails = () => {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { articleId } = router.query;
  const { data, error, mutate } = useSWR(`/articles/${articleId}`, fetcher);

  const handleUpdate = async () => {
    try {
      await Article.update(articleId, {
        ...data,
        title: "Articulo editado 2",
        category_id: 1,
      });
      mutate();
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(error.response.message);
        console.log(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  const handleDelete = async () => {
    try {
      await Article.delete(articleId);
      router.push(Routes.ARTICLES);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        enqueueSnackbar("No se pudo eliminar el artículo", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        console.log(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  if (error) return <div>No se pudo cargar la información del artículo</div>;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{data.title}</h1>
      <div>{data.user_data.name}</div>
      <p>{data.body}</p>
      <Button onClick={handleUpdate}>Editar</Button>
      <Button onClick={handleDelete}>Eliminar</Button>

      <Comments articleId={data.id} />
    </div>
  );
};

export default withAuth(ArticleDetails);

// export async function getStaticProps(context) {
//   console.log("context", context);
//
//   try {
//     const { articleId } = context.params;
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${articleId}`
//     );
//     const data = await res.json();
//
//     console.log("data", data);
//
//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }
//
//     return {
//       props: {
//         article: data,
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return {
//       props: {
//         article: null,
//       },
//     };
//   }
// }
//
// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`);
//   const data = await res.json();
//
//   const articles = data.data;
//
//   const paths = articles.map((article) => {
//     return { params: { articleId: "" + article.id } };
//   });
//
//   return {
//     paths,
//     fallback: true, // See the "fallback" section below
//   };
// }
