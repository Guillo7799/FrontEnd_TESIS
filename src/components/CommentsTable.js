import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";
import withAuth from "@/hocs/withAuth";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
  Button,
  Select,
  Modal,
} from "@material-ui/core";
import Loading from "@/components/Loading";

const useStyles = makeStyles((theme) => ({
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  root: { textAlign: "center" },
  confirmation: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#F77272",
  },
  comments: {
    width: "90%",
    height: "500px",
    textAlign: "center",
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CommentsTable = (props) => {
  const classes = useStyles();
  const { data: commentData, error } = useSWR(`/comments`, fetcher);

  if (error) return <div>No se pudo cargar los comentarios</div>;
  if (!commentData) return <Loading />;

  const onSubmit = async (data) => {
    console.log("idComment: ", data);
    try {
      const response = await api.delete(`/comments/${props.id}`);
      handleClick("Se ha eliminado el barrio con éxito", "success");
      props.onHandleCloseModal();
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        Error(error.response.data);
        props.onHandleCloseModal();
        return Promise.reject(error.response);
        // return error.response;
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

  return (
    <>
      {commentData ? (
        <Grid container className={classes.root}>
          <Grid container className={classes.comments} direction="column">
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" style={{ width: 150 }}>
                      Nombre
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ width: 150 }}>
                      Apellido
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ width: 250 }}>
                      Texto
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ width: 100 }}>
                      Acción
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {commentData.data.map((comment) => (
                    <StyledTableRow key={comment.id}>
                      <StyledTableCell align="center">
                        {comment.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {comment.last_name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {comment.content}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button type="submit" value={comment.id}>
                          Eliminar
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
      ) : (
        <>
          <div className={classes.confirmation}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/527/148/non_2x/vector-colorful-comment-speech-bubble-thin-line-icon-on-white-background.jpg"
              alt="Sin Comentarios"
              width={150}
              height={150}
            />
            <p>Vaya! Aún no se han registrado comentarios</p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default withAuth(CommentsTable);
